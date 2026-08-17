/* Drill engine: answer checking and the spacing schedule.
 *
 * The method says: never let something you got wrong disappear, and never
 * drill something in isolation. So items live in Leitner boxes and every
 * session mixes new material with whatever is due from earlier lessons.
 */
window.MT = window.MT || {};

(function (MT) {
  'use strict';

  // Box 0 is "just missed" — it comes back inside the same session.
  var INTERVALS_MIN = [0, 10, 60 * 24, 60 * 24 * 3, 60 * 24 * 7, 60 * 24 * 21];

  function key(lessonId, index) { return lessonId + ':' + index; }

  function normalize(s) {
    return (s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')  // strip accents — never penalise them in typing
      .replace(/[¿?¡!.,;:"'()]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function accepts(item) {
    return [item.es].concat(item.alt || []).map(normalize);
  }

  /* Returns 'right' | 'close' | 'wrong'.
     'close' = the words are there but something small is off, which in this
     method is a nudge, not a failure. */
  function check(item, answer) {
    var given = normalize(answer);
    if (!given) return 'wrong';
    var targets = accepts(item);
    if (targets.indexOf(given) !== -1) return 'right';

    var best = 0;
    targets.forEach(function (t) {
      var score = similarity(given, t);
      if (score > best) best = score;
    });
    if (best >= 0.9) return 'close';
    return 'wrong';
  }

  // Token-level overlap, order-sensitive enough to catch real word errors.
  function similarity(a, b) {
    if (a === b) return 1;
    var aw = a.split(' '), bw = b.split(' ');
    var matched = 0;
    var pool = bw.slice();
    aw.forEach(function (w) {
      var i = pool.indexOf(w);
      if (i !== -1) { matched++; pool.splice(i, 1); }
    });
    var lenPenalty = Math.abs(aw.length - bw.length) * 0.5;
    return Math.max(0, (matched - lenPenalty) / Math.max(aw.length, bw.length));
  }

  function due(record, now) {
    if (!record) return true;
    return record.due <= now;
  }

  function schedule(record, grade) {
    var now = Date.now();
    var r = record || { box: 0, due: now, seen: 0, right: 0, wrong: 0 };
    r.seen += 1;

    if (grade === 'right') {
      r.right += 1;
      r.box = Math.min(r.box + 1, INTERVALS_MIN.length - 1);
    } else if (grade === 'close') {
      r.right += 1;
      // Stays put: you produced it, but not cleanly enough to promote.
      r.box = Math.max(r.box, 1);
    } else {
      r.wrong += 1;
      r.box = 0; // straight back into this session
    }

    r.due = now + INTERVALS_MIN[r.box] * 60000;
    return r;
  }

  /* Build a session queue for one lesson: its own items, plus due items
     drawn from every earlier lesson, woven in rather than bolted on. */
  function buildLessonQueue(lesson, allLessons, opts) {
    opts = opts || {};
    var now = Date.now();
    var fresh = lesson.items.map(function (item, i) {
      return { item: item, lessonId: lesson.id, index: i, key: key(lesson.id, i), isReview: false };
    });

    var review = [];
    allLessons.forEach(function (l) {
      if (l.id === lesson.id) return;
      l.items.forEach(function (item, i) {
        var k = key(l.id, i);
        var rec = MT.store.item(k);
        if (rec && due(rec, now)) {
          review.push({ item: item, lessonId: l.id, index: i, key: k, isReview: true });
        }
      });
    });

    shuffle(review);
    review = review.slice(0, opts.maxReview == null ? 8 : opts.maxReview);

    // Interleave: a review item roughly every fourth prompt.
    var out = [];
    var ri = 0;
    fresh.forEach(function (entry, i) {
      out.push(entry);
      if (i > 0 && i % 4 === 0 && ri < review.length) out.push(review[ri++]);
    });
    while (ri < review.length) out.push(review[ri++]);
    return out;
  }

  /* Everything due right now, across the whole course. */
  function buildReviewQueue(allLessons, limit) {
    var now = Date.now();
    var out = [];
    allLessons.forEach(function (l) {
      l.items.forEach(function (item, i) {
        var k = key(l.id, i);
        var rec = MT.store.item(k);
        if (rec && due(rec, now)) {
          out.push({ item: item, lessonId: l.id, index: i, key: k, isReview: true, box: rec.box });
        }
      });
    });
    out.sort(function (a, b) { return a.box - b.box; }); // shakiest first
    return limit ? out.slice(0, limit) : out;
  }

  /* Two different questions, two different numbers:
     - strength: how well is this lesson holding up? Each clean recall moves an
       item a third of the way, so one good pass shows real progress instead of
       a demoralising 0%, but 100% still needs recall spread over several days.
     - covered: have you actually been through the material? This is what
       decides when to point the learner at the next lesson. */
  var MASTERY_BOX = 3;

  function lessonProgress(lesson) {
    var strong = 0, seen = 0, covered = 0, strength = 0;
    lesson.items.forEach(function (item, i) {
      var rec = MT.store.item(key(lesson.id, i));
      if (!rec) return;
      seen++;
      if (rec.box >= 1) covered++;
      if (rec.box >= MASTERY_BOX) strong++;
      strength += Math.min(rec.box, MASTERY_BOX) / MASTERY_BOX;
    });
    var total = lesson.items.length;
    return {
      seen: seen,
      covered: covered,
      strong: strong,
      total: total,
      pct: total ? Math.round((strength / total) * 100) : 0
    };
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  MT.engine = {
    key: key,
    normalize: normalize,
    check: check,
    schedule: schedule,
    buildLessonQueue: buildLessonQueue,
    buildReviewQueue: buildReviewQueue,
    lessonProgress: lessonProgress,
    countDue: function (allLessons) { return buildReviewQueue(allLessons).length; },
    shuffle: shuffle
  };
})(window.MT);
