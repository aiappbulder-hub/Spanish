/* Voice: the method lives in the ear, not on the page.
 * Text-to-speech is required for the app to feel right; speech recognition
 * is a bonus where the browser offers it (Chrome/Edge), never a requirement. */
window.MT = window.MT || {};

(function (MT) {
  'use strict';

  var synth = window.speechSynthesis || null;
  var voices = [];
  var ready = false;

  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices() || [];
    if (voices.length) ready = true;
  }

  if (synth) {
    loadVoices();
    if (typeof synth.addEventListener === 'function') {
      synth.addEventListener('voiceschanged', loadVoices);
    } else {
      synth.onvoiceschanged = loadVoices;
    }
  }

  function spanishVoices() {
    return voices.filter(function (v) { return /^es(-|_|$)/i.test(v.lang); });
  }

  function pickVoice(lang) {
    if (!voices.length) loadVoices();
    var wanted = MT.store.settings.voice;
    if (wanted) {
      var chosen = voices.filter(function (v) { return v.name === wanted; })[0];
      if (chosen && (lang !== 'en' || /^en/i.test(chosen.lang))) return chosen;
    }
    if (lang === 'en') {
      return voices.filter(function (v) { return /^en(-|_|$)/i.test(v.lang); })[0] || null;
    }
    var es = spanishVoices();
    // Prefer a peninsular or Mexican voice; either is fine for the learner.
    var preferred = ['es-ES', 'es-MX', 'es-US', 'es-419'];
    for (var i = 0; i < preferred.length; i++) {
      var match = es.filter(function (v) { return v.lang.replace('_', '-') === preferred[i]; })[0];
      if (match) return match;
    }
    return es[0] || null;
  }

  var current = null;

  function speak(text, opts) {
    opts = opts || {};
    if (!synth || !text) return Promise.resolve(false);
    return new Promise(function (resolve) {
      try {
        synth.cancel();
        var u = new SpeechSynthesisUtterance(text);
        var lang = opts.lang === 'en' ? 'en' : 'es';
        var voice = pickVoice(lang);
        if (voice) u.voice = voice;
        u.lang = voice ? voice.lang : (lang === 'en' ? 'en-GB' : 'es-ES');
        u.rate = opts.rate != null ? opts.rate : (lang === 'en' ? 1 : MT.store.settings.rate);
        u.pitch = 1;
        u.onend = function () { current = null; resolve(true); };
        u.onerror = function () { current = null; resolve(false); };
        current = u;
        synth.speak(u);
      } catch (e) {
        resolve(false);
      }
    });
  }

  function stop() {
    if (synth) { try { synth.cancel(); } catch (e) {} }
    current = null;
  }

  /* ---- Speech recognition (optional) ---- */

  var Recognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  var recognizer = null;

  function listen(onResult, onEnd) {
    if (!Recognition) { if (onEnd) onEnd('unsupported'); return null; }
    try { if (recognizer) recognizer.abort(); } catch (e) {}
    var r = new Recognition();
    var voice = pickVoice('es');
    r.lang = voice ? voice.lang.replace('_', '-') : 'es-ES';
    r.interimResults = true;
    r.maxAlternatives = 3;
    r.continuous = false;

    r.onresult = function (event) {
      var result = event.results[event.results.length - 1];
      var alternatives = [];
      for (var i = 0; i < result.length; i++) alternatives.push(result[i].transcript);
      onResult(alternatives[0] || '', result.isFinal, alternatives);
    };
    r.onerror = function (e) { if (onEnd) onEnd(e.error || 'error'); };
    r.onend = function () { if (onEnd) onEnd(null); };

    try { r.start(); } catch (e) { if (onEnd) onEnd('start-failed'); return null; }
    recognizer = r;
    return r;
  }

  function stopListening() {
    if (recognizer) { try { recognizer.stop(); } catch (e) {} }
  }

  MT.speech = {
    supported: !!synth,
    recognitionSupported: !!Recognition,
    speak: speak,
    stop: stop,
    listen: listen,
    stopListening: stopListening,
    voices: function () { if (!voices.length) loadVoices(); return voices; },
    spanishVoices: function () { if (!voices.length) loadVoices(); return spanishVoices(); },
    hasSpanishVoice: function () { if (!voices.length) loadVoices(); return spanishVoices().length > 0; }
  };
})(window.MT);
