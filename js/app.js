/* View controller.
 *
 * Three screens matter: the course map, the drill, and the conversation.
 * Everything is keyboard-first, because the learner's hands should be free
 * and their eyes should be off the screen while they answer.
 */
(function (MT) {
  'use strict';

  var app = document.getElementById('app');
  var course = MT.curriculum;
  var view = { name: 'home' };
  var session = null;

  /* ---------- helpers ---------- */

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      if (k === 'class') node.className = attrs[k];
      else if (k === 'html') node.innerHTML = attrs[k];
      else if (k === 'text') node.textContent = attrs[k];
      else if (k.slice(0, 2) === 'on') node.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] != null && attrs[k] !== false) node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }

  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  function lessonById(id) {
    return course.filter(function (l) { return l.id === id; })[0];
  }

  function go(next) {
    MT.speech.stop();
    MT.speech.stopListening();
    view = next;
    render();
  }

  /* ---------- home ---------- */

  function renderHome() {
    var due = MT.engine.countDue(course);
    var totals = MT.store.state.totals;
    var streak = MT.store.state.streak.count;

    var header = el('header', { class: 'hero' }, [
      el('p', { class: 'eyebrow', text: 'Spanish · the Michel Thomas way' }),
      el('h1', { text: 'You are not going to memorise anything.' }),
      el('p', { class: 'lede', text: 'Listen, then say it out loud before you look. Nothing to write down, nothing to revise. If you forget something it will come back to you on its own — that is the app’s job, not yours.' })
    ]);

    var stats = el('div', { class: 'stats' }, [
      stat(streak, streak === 1 ? 'day in a row' : 'days in a row'),
      stat(totals.answered, 'sentences produced'),
      stat(due, due === 1 ? 'item due' : 'items due')
    ]);

    var actions = el('div', { class: 'row' }, [
      due > 0 ? el('button', {
        class: 'btn btn-primary',
        onclick: function () { startReview(); }
      }, ['Review what is due (' + due + ')']) : null,
      el('button', {
        class: due > 0 ? 'btn' : 'btn btn-primary',
        onclick: function () { startNextLesson(); }
      }, [nextLessonLabel()])
    ]);

    var noSave = storageWarning();

    var list = el('ol', { class: 'lessons' }, course.map(function (lesson, i) {
      return lessonCard(lesson, i);
    }));

    // The shelf is deliberately outside the course: look things up here, but
    // do not mistake reading a list for learning.
    var lost = el('p', { class: 'muted lost-link' }, [
      'Not sure where to start? ',
      el('button', { class: 'linkish', onclick: function () { startIntro(); } }, ['Take the two-minute intro again'])
    ]);

    var shelf = el('button', { class: 'shelf', onclick: function () { go({ name: 'reference', tab: 'sayings', q: '' }); } }, [
      el('h3', { text: 'The reference shelf' }),
      el('p', { text: 'Sayings people actually use, a working vocabulary, and the points where Spanish and English genuinely disagree. Nothing here is drilled or scheduled — it is for looking things up.' }),
      el('span', { class: 'shelf-counts', text: countSayings() + ' sayings · ' + countWords() + ' words · ' + countContrasts() + ' grammar contrasts' })
    ]);

    var main = el('main', { class: 'wrap' }, [
      header, noSave, stats, actions,
      el('h2', { class: 'section', text: 'The course' }),
      lost,
      list,
      shelf,
      renderSettings()
    ]);

    clear(app);
    app.appendChild(main);
  }

  function stat(value, label) {
    return el('div', { class: 'stat' }, [
      el('strong', { text: String(value) }),
      el('span', { text: label })
    ]);
  }

  function nextLessonLabel() {
    var lesson = nextLesson();
    var idx = course.indexOf(lesson) + 1;
    var p = MT.engine.lessonProgress(lesson);
    return (p.seen === 0 ? 'Start lesson ' : 'Continue lesson ') + idx;
  }

  function startNextLesson() {
    go({ name: 'blocks', lessonId: nextLesson().id });
  }

  // Move on once the material has been covered, not once it is perfect —
  // the spacing schedule keeps bringing the shaky items back regardless.
  function nextLesson() {
    for (var i = 0; i < course.length; i++) {
      var p = MT.engine.lessonProgress(course[i]);
      if (p.covered < Math.ceil(p.total * 0.8)) return course[i];
    }
    return course[course.length - 1];
  }

  function lessonCard(lesson, i) {
    var p = MT.engine.lessonProgress(lesson);
    var pct = p.pct;

    var convButtons = lesson.conversations.map(function (c) {
      var done = !!MT.store.state.conversationsDone[c.id];
      return el('button', {
        class: 'chip' + (done ? ' chip-done' : ''),
        onclick: function (e) { e.stopPropagation(); go({ name: 'conversation', lessonId: lesson.id, convId: c.id }); }
      }, [(done ? '✓ ' : '▶ ') + c.title]);
    });

    return el('li', { class: 'lesson' + (p.seen ? ' lesson-touched' : '') }, [
      el('div', { class: 'lesson-head' }, [
        el('span', { class: 'lesson-num', text: String(i + 1) }),
        el('div', { class: 'lesson-title' }, [
          el('h3', { text: lesson.title }),
          el('p', { class: 'muted', text: lesson.subtitle })
        ]),
        el('span', { class: 'lesson-pct', text: pct + '%' })
      ]),
      el('p', { class: 'goal', text: lesson.goal }),
      el('div', { class: 'bar' }, [el('div', { class: 'bar-fill', style: 'width:' + pct + '%' })]),
      el('div', { class: 'row row-tight' }, [
        el('button', {
          class: 'btn btn-small',
          onclick: function () { go({ name: 'blocks', lessonId: lesson.id }); }
        }, [p.seen ? 'Practise' : 'Begin'])
      ].concat(convButtons))
    ]);
  }

  /* ---------- settings ---------- */

  function renderSettings() {
    var s = MT.store.settings;
    var voices = MT.speech.spanishVoices();

    var voiceSelect = el('select', {
      class: 'input',
      onchange: function (e) { MT.store.set('voice', e.target.value); MT.speech.speak('Perfecto.'); }
    }, [el('option', { value: '', text: 'Automatic' })].concat(
      voices.map(function (v) {
        return el('option', { value: v.name, text: v.name + ' (' + v.lang + ')', selected: s.voice === v.name });
      })
    ));

    var rateInput = el('input', {
      type: 'range', min: '0.5', max: '1.2', step: '0.05', value: String(s.rate), class: 'range',
      oninput: function (e) {
        MT.store.set('rate', parseFloat(e.target.value));
        e.target.nextSibling.textContent = parseFloat(e.target.value).toFixed(2) + '×';
      },
      onchange: function () { MT.speech.speak('No es difícil, es fácil.'); }
    });

    var warn = null;
    if (!MT.speech.supported) {
      warn = el('p', { class: 'warn', text: 'This browser has no speech synthesis, so the app cannot read the Spanish to you. Chrome, Edge or Safari will.' });
    } else if (!MT.speech.hasSpanishVoice()) {
      warn = el('p', { class: 'warn', text: 'No Spanish voice is installed on this system. Audio will fall back to whatever voice exists, which will sound wrong. Install a Spanish voice in your OS settings.' });
    }

    return el('details', { class: 'settings' }, [
      el('summary', { text: 'Settings' }),
      warn,
      el('div', { class: 'setting' }, [
        el('label', { text: 'Spanish voice' }), voiceSelect
      ]),
      el('div', { class: 'setting' }, [
        el('label', { text: 'Speaking pace' }),
        el('div', { class: 'range-row' }, [rateInput, el('span', { class: 'range-val', text: s.rate.toFixed(2) + '×' })])
      ]),
      toggle('Type your answers as well as saying them', 'typed'),
      toggle('Speak the answer automatically on reveal', 'autoPlay'),
      toggle('Show English under the other speaker in conversations', 'showEnglish'),
      el('div', { class: 'setting' }, [
        el('button', {
          class: 'btn btn-quiet',
          onclick: function () {
            if (confirm('Erase all progress and start the course again?')) { MT.store.reset(); render(); }
          }
        }, ['Reset all progress'])
      ]),
      el('p', { class: 'muted', text: 'Version ' + (window.MT_BUILD || 'dev') + '. If the app looks out of date, reload the page — a browser will sometimes hold on to an older copy.' })
    ]);
  }

  function toggle(label, name) {
    return el('label', { class: 'setting setting-toggle' }, [
      el('input', {
        type: 'checkbox', checked: !!MT.store.settings[name],
        onchange: function (e) { MT.store.set(name, e.target.checked); }
      }),
      el('span', { text: label })
    ]);
  }

  /* ---------- building blocks ---------- */

  function renderBlocks() {
    var lesson = lessonById(view.lessonId);
    MT.store.markLessonStarted(lesson.id);

    var main = el('main', { class: 'wrap narrow' }, [
      backBar(lesson.title),
      el('h1', { class: 'screen-title', text: lesson.title }),
      el('p', { class: 'lede', text: lesson.goal }),
      el('h2', { class: 'section', text: 'What you are about to be given' }),
      el('ul', { class: 'blocks' }, lesson.blocks.map(function (b) {
        return el('li', { class: 'block' }, [
          el('p', { class: 'block-rule', text: b.rule }),
          b.ex ? el('p', { class: 'block-ex', text: b.ex }) : null,
          b.ex ? el('button', {
            class: 'btn btn-icon', title: 'Hear it',
            onclick: function () { MT.speech.speak(spanishOnly(b.ex)); }
          }, ['♪']) : null
        ]);
      })),
      el('p', { class: 'muted', text: 'Read these once. Do not try to hold on to them — you are about to use them, and using them is what makes them stick.' }),
      el('div', { class: 'row' }, [
        el('button', { class: 'btn btn-primary', onclick: function () { startLesson(lesson); } }, ['Start speaking →'])
      ])
    ]);

    clear(app);
    app.appendChild(main);
  }

  // Pull the Spanish half out of an example line like "possible → posible".
  function spanishOnly(ex) {
    return ex.split('·').map(function (part) {
      var halves = part.split(/→|—|-{1,2}\s/);
      return (halves.length > 1 ? halves[1] : halves[0]).trim();
    }).join(', ');
  }

  function backBar(label) {
    return el('div', { class: 'topbar' }, [
      el('button', { class: 'btn btn-quiet', onclick: function () { go({ name: 'home' }); } }, ['← Course']),
      el('span', { class: 'topbar-label', text: label || '' })
    ]);
  }

  /* ---------- drill ---------- */

  function startLesson(lesson) {
    var queue = MT.engine.buildLessonQueue(lesson, course, { maxReview: 8 });
    session = { queue: queue, pos: 0, revealed: false, title: lesson.title, kind: 'lesson', heard: '', verdict: null, right: 0, listening: false };
    go({ name: 'drill', lessonId: lesson.id });
  }

  function startReview() {
    var queue = MT.engine.buildReviewQueue(course, 30);
    if (!queue.length) return;
    session = { queue: queue, pos: 0, revealed: false, title: 'Review', kind: 'review', heard: '', verdict: null, right: 0, listening: false };
    go({ name: 'drill' });
  }

  function renderDrill() {
    if (!session || session.pos >= session.queue.length) return renderDone();

    var entry = session.queue[session.pos];
    var item = entry.item;
    var total = session.queue.length;
    var pct = Math.round((session.pos / total) * 100);

    var promptCard = el('div', { class: 'card prompt-card' }, [
      entry.isReview ? el('span', { class: 'tag', text: 'from earlier' }) : null,
      el('p', { class: 'label', text: 'Say this in Spanish' }),
      el('p', { class: 'prompt', text: item.en }),
      el('button', {
        class: 'btn btn-icon', title: 'Hear the English prompt',
        onclick: function () { MT.speech.speak(item.en, { lang: 'en', rate: 1 }); }
      }, ['♪'])
    ]);

    var body = [promptCard];

    if (!session.revealed) {
      body.push(el('p', { class: 'coach', text: 'Take as long as you like. Work it out, say it out loud, and only then look.' }));

      if (MT.store.settings.typed) {
        var input = el('input', {
          class: 'input input-answer', type: 'text', placeholder: 'Type it here (accents optional)',
          autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false',
          value: session.heard || '',
          onkeydown: function (e) {
            if (e.key === 'Enter') { session.heard = e.target.value; reveal(entry); }
          }
        });
        body.push(input);
        setTimeout(function () { input.focus(); }, 0);
      }

      var controls = [
        el('button', { class: 'btn btn-primary', onclick: function () { reveal(entry); } }, ['Show me (space)'])
      ];
      if (MT.speech.recognitionSupported) {
        controls.push(el('button', {
          class: 'btn' + (session.listening ? ' btn-live' : ''),
          onclick: function () { toggleListen(entry); }
        }, [session.listening ? '● Listening…' : '● Say it']));
      }
      body.push(el('div', { class: 'row' }, controls));

      if (session.heard && !MT.store.settings.typed) {
        body.push(el('p', { class: 'heard', text: 'Heard: “' + session.heard + '”' }));
      }
    } else {
      var verdict = session.verdict;
      body.push(el('div', { class: 'card answer-card' }, [
        el('p', { class: 'label', text: 'In Spanish' }),
        el('p', { class: 'answer', text: item.es }),
        el('button', {
          class: 'btn btn-icon', title: 'Hear it again (r)',
          onclick: function () { MT.speech.speak(item.es); }
        }, ['♪']),
        item.note ? el('p', { class: 'note', text: item.note }) : null,
        verdict ? el('p', {
          class: 'verdict verdict-' + verdict,
          text: verdict === 'right' ? 'That is it exactly.'
            : verdict === 'close' ? 'Close — compare it word for word.'
            : 'Not yet. Say the correct sentence out loud twice, then move on.'
        }) : null
      ]));

      body.push(el('p', { class: 'coach', text: 'Be honest with yourself here. Nothing is lost by marking it missed — it simply comes back.' }));
      body.push(el('div', { class: 'row' }, [
        el('button', { class: 'btn btn-good', onclick: function () { grade(entry, 'right'); } }, ['Got it  (1)']),
        el('button', { class: 'btn btn-mid', onclick: function () { grade(entry, 'close'); } }, ['Nearly  (2)']),
        el('button', { class: 'btn btn-bad', onclick: function () { grade(entry, 'wrong'); } }, ['Missed  (3)'])
      ]));
    }

    var main = el('main', { class: 'wrap narrow drill' }, [
      backBar(session.title + '  ·  ' + (session.pos + 1) + ' of ' + total),
      el('div', { class: 'bar bar-slim' }, [el('div', { class: 'bar-fill', style: 'width:' + pct + '%' })])
    ].concat(body));

    clear(app);
    app.appendChild(main);
  }

  function toggleListen(entry) {
    if (session.listening) {
      MT.speech.stopListening();
      session.listening = false;
      return render();
    }
    session.listening = true;
    session.heard = '';
    render();
    MT.speech.listen(function (transcript, isFinal) {
      session.heard = transcript;
      if (isFinal) {
        session.listening = false;
        reveal(entry);
      } else {
        render();
      }
    }, function (err) {
      session.listening = false;
      if (err && err !== 'no-speech') session.heard = '';
      render();
    });
  }

  function reveal(entry) {
    MT.speech.stopListening();
    session.listening = false;
    session.revealed = true;
    session.verdict = session.heard ? MT.engine.check(entry.item, session.heard) : null;
    if (MT.store.settings.autoPlay) MT.speech.speak(entry.item.es);
    render();
  }

  function grade(entry, result) {
    var record = MT.engine.schedule(MT.store.item(entry.key), result);
    MT.store.recordItem(entry.key, record);
    MT.store.countAnswer(result !== 'wrong');
    if (result !== 'wrong') session.right += 1;

    // A missed item is re-queued a few places on — inside this same session.
    if (result === 'wrong') {
      var reinsert = Math.min(session.pos + 4, session.queue.length);
      session.queue.splice(reinsert, 0, entry);
    }

    session.pos += 1;
    session.revealed = false;
    session.heard = '';
    session.verdict = null;
    render();
  }

  function renderDone() {
    var lesson = view.lessonId ? lessonById(view.lessonId) : null;
    var total = session ? session.queue.length : 0;
    var right = session ? session.right : 0;

    var next = [];
    if (lesson && lesson.conversations.length) {
      next.push(el('button', {
        class: 'btn btn-primary',
        onclick: function () { go({ name: 'conversation', lessonId: lesson.id, convId: lesson.conversations[0].id }); }
      }, ['Now use it in a conversation →']));
    }
    next.push(el('button', { class: 'btn', onclick: function () { go({ name: 'home' }); } }, ['Back to the course']));

    var main = el('main', { class: 'wrap narrow' }, [
      backBar('Done'),
      el('h1', { class: 'screen-title', text: 'That is the session.' }),
      el('p', { class: 'lede', text: 'You produced ' + total + ' sentences and got ' + right + ' of them. Whatever you missed is already scheduled to come back — you do not have to do anything about it.' }),
      el('div', { class: 'row' }, next)
    ]);

    clear(app);
    app.appendChild(main);
  }

  /* ---------- conversation ---------- */

  function renderConversation() {
    var lesson = lessonById(view.lessonId);
    var conv = lesson.conversations.filter(function (c) { return c.id === view.convId; })[0];

    if (!session || session.kind !== 'conv' || session.convId !== conv.id) {
      session = { kind: 'conv', convId: conv.id, pos: 0, revealed: false, heard: '', verdict: null, listening: false };
      // The other person opens if theirs is the first turn.
      if (conv.turns[0].who === 'them') setTimeout(function () { MT.speech.speak(conv.turns[0].es); }, 250);
    }

    var lines = [];
    for (var i = 0; i <= session.pos && i < conv.turns.length; i++) {
      lines.push(turnNode(conv, conv.turns[i], i));
    }

    var finished = session.pos >= conv.turns.length;
    var footer;
    if (finished) {
      if (!MT.store.state.conversationsDone[conv.id]) MT.store.markConversationDone(conv.id);
      footer = el('div', { class: 'row' }, [
        el('button', { class: 'btn btn-primary', onclick: function () { playWhole(conv); } }, ['Play the whole conversation']),
        el('button', {
          class: 'btn',
          onclick: function () { session = null; go({ name: 'conversation', lessonId: lesson.id, convId: conv.id }); }
        }, ['Run it again']),
        el('button', { class: 'btn btn-quiet', onclick: function () { go({ name: 'home' }); } }, ['Back to the course'])
      ]);
    } else {
      footer = null;
    }

    var main = el('main', { class: 'wrap narrow conv' }, [
      backBar(lesson.title),
      el('h1', { class: 'screen-title', text: conv.title }),
      el('p', { class: 'setting-line', text: conv.setting }),
      el('div', { class: 'thread' }, lines),
      footer
    ]);

    clear(app);
    app.appendChild(main);
    var last = app.querySelector('.turn:last-child');
    if (last && session.pos > 0) last.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  function turnNode(conv, turn, index) {
    var isCurrent = index === session.pos;

    if (turn.who === 'them') {
      var node = el('div', { class: 'turn turn-them' }, [
        el('p', { class: 'turn-es', text: turn.es }),
        MT.store.settings.showEnglish ? el('p', { class: 'turn-en', text: turn.en }) : null,
        turn.note ? el('p', { class: 'note', text: turn.note }) : null,
        el('button', { class: 'btn btn-icon', title: 'Hear it again', onclick: function () { MT.speech.speak(turn.es); } }, ['♪'])
      ]);
      if (isCurrent) {
        node.appendChild(el('div', { class: 'row row-tight' }, [
          el('button', {
            class: 'btn btn-primary btn-small',
            onclick: function () { session.pos += 1; render(); autoSpeakCurrent(conv); }
          }, ['Continue (space)'])
        ]));
      }
      return node;
    }

    // Your turn.
    var children = [el('p', { class: 'turn-cue', text: turn.cue })];

    if (isCurrent && !session.revealed) {
      if (MT.store.settings.typed) {
        var input = el('input', {
          class: 'input input-answer', type: 'text', placeholder: 'Your answer',
          autocomplete: 'off', spellcheck: 'false',
          onkeydown: function (e) { if (e.key === 'Enter') { session.heard = e.target.value; revealTurn(turn); } }
        });
        children.push(input);
        setTimeout(function () { input.focus(); }, 0);
      }
      var controls = [
        el('button', { class: 'btn btn-primary btn-small', onclick: function () { revealTurn(turn); } }, ['Show me (space)'])
      ];
      if (MT.speech.recognitionSupported) {
        controls.push(el('button', {
          class: 'btn btn-small' + (session.listening ? ' btn-live' : ''),
          onclick: function () { toggleListenTurn(turn); }
        }, [session.listening ? '● Listening…' : '● Say it']));
      }
      children.push(el('div', { class: 'row row-tight' }, controls));
      if (session.heard) children.push(el('p', { class: 'heard', text: 'Heard: “' + session.heard + '”' }));
    } else if (index < session.pos || session.revealed) {
      children.push(el('p', { class: 'turn-es', text: turn.es }));
      if (turn.note) children.push(el('p', { class: 'note', text: turn.note }));
      children.push(el('button', { class: 'btn btn-icon', title: 'Hear it again', onclick: function () { MT.speech.speak(turn.es); } }, ['♪']));
      if (isCurrent) {
        if (session.verdict) {
          children.push(el('p', {
            class: 'verdict verdict-' + session.verdict,
            text: session.verdict === 'right' ? 'Exactly that.'
              : session.verdict === 'close' ? 'Close — check it word for word.'
              : 'Say the correct line out loud, then carry on.'
          }));
        }
        children.push(el('div', { class: 'row row-tight' }, [
          el('button', {
            class: 'btn btn-primary btn-small',
            onclick: function () { nextTurn(conv); }
          }, ['Continue (space)'])
        ]));
      }
    }

    return el('div', { class: 'turn turn-you' + (isCurrent ? ' turn-current' : '') }, children);
  }

  function revealTurn(turn) {
    MT.speech.stopListening();
    session.listening = false;
    session.revealed = true;
    session.verdict = session.heard ? MT.engine.check(turn, session.heard) : null;
    if (MT.store.settings.autoPlay) MT.speech.speak(turn.es);
    render();
  }

  function toggleListenTurn(turn) {
    if (session.listening) {
      MT.speech.stopListening();
      session.listening = false;
      return render();
    }
    session.listening = true;
    session.heard = '';
    render();
    MT.speech.listen(function (transcript, isFinal) {
      session.heard = transcript;
      if (isFinal) { session.listening = false; revealTurn(turn); }
      else render();
    }, function (err) {
      session.listening = false;
      if (err && err !== 'no-speech') session.heard = '';
      render();
    });
  }

  function nextTurn(conv) {
    session.pos += 1;
    session.revealed = false;
    session.heard = '';
    session.verdict = null;
    render();
    autoSpeakCurrent(conv);
  }

  function autoSpeakCurrent(conv) {
    var turn = conv.turns[session.pos];
    if (turn && turn.who === 'them' && MT.store.settings.autoPlay) {
      setTimeout(function () { MT.speech.speak(turn.es); }, 200);
    }
  }

  function playWhole(conv) {
    var i = 0;
    (function next() {
      if (i >= conv.turns.length) return;
      var turn = conv.turns[i++];
      MT.speech.speak(turn.es).then(function () { setTimeout(next, 350); });
    })();
  }

  /* ---------- first run ---------- */

  /* Probe storage, and say so if it cannot hold anything. This has to be
     available on the welcome screen as well as the course map, because a
     learner whose storage is blocked never gets past the welcome. */
  function storageWarning() {
    MT.store.touchStreak();
    MT.store.save();
    if (MT.store.canSave()) return null;
    return el('p', { class: 'warn', text: 'This browser is not letting the page save anything, so your progress will not survive a reload — private browsing usually causes this. Everything else works.' });
  }


  function renderWelcome() {
    var main = el('main', { class: 'wrap narrow welcome' }, [
      el('p', { class: 'eyebrow', text: 'Spanish · the Michel Thomas way' }),
      el('h1', { text: 'You will be speaking in about two minutes.' }),
      storageWarning(),
      el('p', { class: 'lede', text: 'No writing. No memorising. No homework. You will be given one small piece at a time and asked to build with it, and you will get things right almost immediately — that is by design, not luck.' }),

      el('ul', { class: 'promises' }, [
        el('li', { html: '<strong>Say it out loud.</strong> Nothing is typed. If you are somewhere you cannot speak, whisper it.' }),
        el('li', { html: '<strong>Take your time.</strong> Nothing is timed and nothing is scored against you. The pause where you work it out is the part that teaches.' }),
        el('li', { html: '<strong>Forgetting is fine.</strong> Anything you lose comes back on its own. You never have to plan revision.' })
      ]),

      el('div', { class: 'row' }, [
        el('button', { class: 'btn btn-primary btn-big', onclick: function () { startIntro(); } }, ['Say your first Spanish sentence →'])
      ]),
      el('p', { class: 'muted', text: 'Sound on if you can — you learn this by ear.' }),

      el('button', {
        class: 'btn btn-quiet',
        onclick: function () { MT.store.markOnboarded(); go({ name: 'home' }); }
      }, ['Skip and show me the course'])
    ]);

    clear(app);
    app.appendChild(main);
  }

  function startIntro() {
    session = { kind: 'intro', pos: 0, revealed: false };
    go({ name: 'intro' });
  }

  function renderIntro() {
    var steps = MT.intro.steps;
    if (!session || session.kind !== 'intro') return startIntro();

    if (session.pos >= steps.length) return renderIntroDone();

    var step = steps[session.pos];
    var body = [
      el('p', { class: 'label', text: 'Step ' + (session.pos + 1) + ' of ' + steps.length }),
      el('p', { class: 'teach', text: step.teach }),
      step.detail ? el('p', { class: 'coach', text: step.detail }) : null
    ];

    if (step.hear) {
      body.push(el('div', { class: 'card hear-card' }, [
        el('p', { class: 'answer', text: step.hear }),
        step.caption ? el('p', { class: 'ref-en', text: step.caption }) : null,
        el('button', {
          class: 'btn btn-icon', title: 'Hear it',
          onclick: function () { MT.speech.speak(step.hear); }
        }, ['♪'])
      ]));
      body.push(el('div', { class: 'row' }, [
        el('button', { class: 'btn btn-primary', onclick: function () { nextIntro(); } }, ['Continue (space)'])
      ]));
    } else if (step.ask) {
      body.push(el('div', { class: 'card prompt-card' }, [
        el('p', { class: 'label', text: 'Say this in Spanish, out loud' }),
        el('p', { class: 'prompt', text: step.ask.en })
      ]));

      if (!session.revealed) {
        body.push(el('div', { class: 'row' }, [
          el('button', { class: 'btn btn-primary', onclick: function () { session.revealed = true; MT.speech.speak(step.ask.es); render(); } }, ['Show me (space)'])
        ]));
        body.push(el('p', { class: 'muted', text: 'Have a go first, even if you are not sure. Being wrong here costs nothing.' }));
      } else {
        body.push(el('div', { class: 'card answer-card' }, [
          el('p', { class: 'label', text: 'In Spanish' }),
          el('p', { class: 'answer', text: step.ask.es }),
          el('button', {
            class: 'btn btn-icon', title: 'Hear it again',
            onclick: function () { MT.speech.speak(step.ask.es); }
          }, ['♪'])
        ]));
        body.push(el('div', { class: 'row' }, [
          el('button', { class: 'btn btn-primary', onclick: function () { nextIntro(); } }, ['Continue (space)'])
        ]));
      }
    }

    var pct = Math.round((session.pos / steps.length) * 100);
    var main = el('main', { class: 'wrap narrow' }, [
      el('div', { class: 'topbar' }, [
        el('button', { class: 'btn btn-quiet', onclick: function () { MT.store.markOnboarded(); go({ name: 'home' }); } }, ['Skip']),
        el('span', { class: 'topbar-label', text: 'Getting started' })
      ]),
      el('div', { class: 'bar bar-slim' }, [el('div', { class: 'bar-fill', style: 'width:' + pct + '%' })])
    ].concat(body));

    clear(app);
    app.appendChild(main);
  }

  function nextIntro() {
    session.pos += 1;
    session.revealed = false;
    render();
  }

  function renderIntroDone() {
    var d = MT.intro.done;
    MT.store.markOnboarded();

    var main = el('main', { class: 'wrap narrow' }, [
      el('h1', { class: 'screen-title', text: d.title }),
      el('p', { class: 'lede', text: d.body }),
      el('p', { class: 'coach', text: d.next }),
      el('div', { class: 'row' }, [
        el('button', {
          class: 'btn btn-primary btn-big',
          onclick: function () { go({ name: 'blocks', lessonId: course[0].id }); }
        }, ['Start lesson 1 →']),
        el('button', { class: 'btn btn-quiet', onclick: function () { go({ name: 'home' }); } }, ['See the whole course'])
      ])
    ]);

    clear(app);
    app.appendChild(main);
  }

  /* ---------- reference shelf ---------- */

  function countSayings() { return MT.sayings.reduce(function (n, g) { return n + g.items.length; }, 0); }
  function countWords() { return MT.vocabulary.reduce(function (n, g) { return n + g.items.length; }, 0); }
  function countContrasts() { return MT.contrasts.reduce(function (n, g) { return n + g.items.length; }, 0); }

  var TABS = [
    { id: 'sayings',   label: 'Sayings',           blurb: 'What people actually say. The literal reading is given wherever it is the reason the phrase sticks.' },
    { id: 'words',     label: 'Words',             blurb: 'Nouns carry their article, because the article is the gender — learning a noun without it means learning it twice.' },
    { id: 'contrasts', label: 'Spanish vs English', blurb: 'Not a grammar course: only the points where an English instinct produces wrong Spanish. That is a much shorter list.' }
  ];

  function renderReference() {
    var tab = view.tab || 'sayings';
    var meta = TABS.filter(function (t) { return t.id === tab; })[0];
    var results = el('div', { class: 'ref-results' });

    var search = el('input', {
      class: 'input', type: 'search', placeholder: 'Search English or Spanish…',
      value: view.q || '', autocomplete: 'off', spellcheck: 'false',
      oninput: function (e) { view.q = e.target.value; fillResults(results, tab, view.q); }
    });

    var tabs = el('div', { class: 'tabs' }, TABS.map(function (t) {
      return el('button', {
        class: 'tab' + (t.id === tab ? ' tab-on' : ''),
        onclick: function () { go({ name: 'reference', tab: t.id, q: view.q || '' }); }
      }, [t.label]);
    }));

    var main = el('main', { class: 'wrap' }, [
      backBar('Reference'),
      el('h1', { class: 'screen-title', text: 'The reference shelf' }),
      el('p', { class: 'lede', text: meta.blurb }),
      tabs,
      el('div', { class: 'ref-search' }, [search]),
      results
    ]);

    clear(app);
    app.appendChild(main);
    fillResults(results, tab, view.q || '');
  }

  function matches(q, fields) {
    if (!q) return true;
    var needle = MT.engine.normalize(q);
    if (!needle) return true;
    return fields.some(function (f) {
      return f && MT.engine.normalize(String(f)).indexOf(needle) !== -1;
    });
  }

  // Only the results are rebuilt as you type, so the search box keeps focus.
  function fillResults(container, tab, q) {
    clear(container);
    var groups = tab === 'sayings' ? MT.sayings : tab === 'words' ? MT.vocabulary : MT.contrasts;
    var shown = 0;

    groups.forEach(function (group) {
      var items = group.items.filter(function (i) {
        return tab === 'contrasts'
          ? matches(q, [i.title, i.english, i.spanish, i.why].concat((i.examples || []).map(function (e) { return e.es + ' ' + e.en; })))
          : matches(q, [i.es, i.en, i.lit, i.note]);
      });
      if (!items.length) return;
      shown += items.length;

      container.appendChild(el('div', { class: 'ref-group' }, [
        el('h2', { class: 'ref-group-title', text: group.group }),
        group.note ? el('p', { class: 'ref-group-note', text: group.note }) : null,
        el('div', { class: tab === 'contrasts' ? 'contrast-list' : 'ref-list' },
          items.map(tab === 'contrasts' ? contrastCard : refRow))
      ]));
    });

    if (!shown) {
      container.appendChild(el('p', { class: 'coach', text: 'Nothing matches “' + q + '” here. Try the other tabs — the same word may live under sayings rather than vocabulary.' }));
    }
  }

  function refRow(item) {
    return el('div', { class: 'ref-item' }, [
      el('button', {
        class: 'btn btn-play', title: 'Hear it',
        onclick: function () { MT.speech.speak(item.es); }
      }, ['♪']),
      el('div', { class: 'ref-body' }, [
        el('p', { class: 'ref-es', text: item.es }),
        el('p', { class: 'ref-en', text: item.en }),
        item.lit ? el('p', { class: 'ref-lit', text: 'Literally: ' + item.lit }) : null,
        item.note ? el('p', { class: 'ref-note', text: item.note }) : null
      ])
    ]);
  }

  function contrastCard(item) {
    return el('article', { class: 'contrast' }, [
      el('h3', { class: 'contrast-title', text: item.title }),
      el('div', { class: 'contrast-pair' }, [
        el('div', { class: 'contrast-side' }, [
          el('span', { class: 'contrast-lang', text: 'English' }),
          el('p', { text: item.english })
        ]),
        el('div', { class: 'contrast-side contrast-es' }, [
          el('span', { class: 'contrast-lang', text: 'Spanish' }),
          el('p', { text: item.spanish })
        ])
      ]),
      item.why ? el('p', { class: 'contrast-why', text: item.why }) : null,
      (item.examples || []).length ? el('div', { class: 'contrast-examples' },
        item.examples.map(function (ex) {
          return el('div', { class: 'ref-item' }, [
            el('button', {
              class: 'btn btn-play', title: 'Hear it',
              onclick: function () { MT.speech.speak(ex.es); }
            }, ['♪']),
            el('div', { class: 'ref-body' }, [
              el('p', { class: 'ref-es', text: ex.es }),
              el('p', { class: 'ref-en', text: ex.en }),
              ex.note ? el('p', { class: 'ref-note', text: ex.note }) : null
            ])
          ]);
        })
      ) : null
    ]);
  }

  /* ---------- keyboard ---------- */

  document.addEventListener('keydown', function (e) {
    if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    var k = e.key;

    if (k === 'Escape') { go({ name: 'home' }); return; }

    if (view.name === 'intro' && session && session.kind === 'intro') {
      if (k === ' ') {
        e.preventDefault();
        var step = MT.intro.steps[session.pos];
        if (step && step.ask && !session.revealed) { session.revealed = true; MT.speech.speak(step.ask.es); render(); }
        else nextIntro();
        return;
      }
    }

    if (view.name === 'drill' && session) {
      var entry = session.queue[session.pos];
      if (!entry) return;
      if (k === ' ') { e.preventDefault(); if (!session.revealed) reveal(entry); return; }
      if (session.revealed) {
        if (k === '1') return grade(entry, 'right');
        if (k === '2') return grade(entry, 'close');
        if (k === '3') return grade(entry, 'wrong');
        if (k === 'r' || k === 'R') return void MT.speech.speak(entry.item.es);
      }
    }

    if (view.name === 'conversation' && session && session.kind === 'conv') {
      var conv = lessonById(view.lessonId).conversations.filter(function (c) { return c.id === view.convId; })[0];
      var turn = conv.turns[session.pos];
      if (!turn) return;
      if (k === ' ') {
        e.preventDefault();
        if (turn.who === 'them') { session.pos += 1; render(); autoSpeakCurrent(conv); }
        else if (!session.revealed) revealTurn(turn);
        else nextTurn(conv);
        return;
      }
      if (k === 'r' || k === 'R') MT.speech.speak(turn.es);
    }
  });

  /* ---------- boot ---------- */

  function render() {
    if (view.name === 'welcome') return renderWelcome();
    if (view.name === 'intro') return renderIntro();
    if (view.name === 'home') {
      // Never open on a wall of eight lessons. A newcomer gets one door, and
      // so does anyone who has not yet been shown the intro — they can skip.
      if (!MT.store.state.onboarded) return renderWelcome();
      return renderHome();
    }
    if (view.name === 'reference') return renderReference();
    if (view.name === 'blocks') return renderBlocks();
    if (view.name === 'drill') return renderDrill();
    if (view.name === 'conversation') return renderConversation();
    renderHome();
  }

  MT.render = render;
  render();
})(window.MT);
