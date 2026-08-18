/* Progress persistence. Everything lives in localStorage — no account, no server. */
window.MT = window.MT || {};

(function (MT) {
  'use strict';

  var KEY = 'mt-spanish-progress-v1';
  var SETTINGS_KEY = 'mt-spanish-settings-v1';

  var defaults = {
    items: {},          // itemKey -> { box, due, seen, right, wrong }
    lessonsStarted: {}, // lessonId -> timestamp
    conversationsDone: {},
    onboarded: false,
    streak: { count: 0, lastDay: null },
    totals: { answered: 0, right: 0 }
  };

  var defaultSettings = {
    voice: '',          // preferred voice name, '' = auto
    rate: 0.85,         // Michel Thomas pace: unhurried
    autoPlay: true,     // speak the answer on reveal
    typed: false,       // typing is opt-in; the method is spoken
    showEnglish: true   // show English under partner turns in conversations
  };

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return clone(fallback);
      var parsed = JSON.parse(raw);
      var out = clone(fallback);
      Object.keys(parsed).forEach(function (k) { out[k] = parsed[k]; });
      return out;
    } catch (e) {
      return clone(fallback);
    }
  }

  var writable = true;

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // Private browsing, or a sandboxed frame with storage switched off.
      writable = false;
    }
  }

  var state = read(KEY, defaults);
  var settings = read(SETTINGS_KEY, defaultSettings);

  MT.store = {
    state: state,
    settings: settings,

    // False once a write has actually failed, so the app can be honest about it.
    canSave: function () { return writable; },

    save: function () { write(KEY, state); },
    saveSettings: function () { write(SETTINGS_KEY, settings); },

    set: function (name, value) {
      settings[name] = value;
      this.saveSettings();
    },

    item: function (key) {
      return state.items[key] || null;
    },

    recordItem: function (key, record) {
      state.items[key] = record;
      this.save();
    },

    markLessonStarted: function (lessonId) {
      if (!state.lessonsStarted[lessonId]) {
        state.lessonsStarted[lessonId] = Date.now();
        this.save();
      }
    },

    markOnboarded: function () {
      state.onboarded = true;
      this.save();
    },

    markConversationDone: function (id) {
      state.conversationsDone[id] = Date.now();
      this.save();
    },

    countAnswer: function (correct) {
      state.totals.answered += 1;
      if (correct) state.totals.right += 1;
      this.touchStreak();
      this.save();
    },

    touchStreak: function () {
      var today = new Date().toISOString().slice(0, 10);
      var s = state.streak;
      if (s.lastDay === today) return;
      var yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      s.count = (s.lastDay === yesterday) ? s.count + 1 : 1;
      s.lastDay = today;
    },

    reset: function () {
      state = clone(defaults);
      MT.store.state = state;
      this.save();
    }
  };
})(window.MT);
