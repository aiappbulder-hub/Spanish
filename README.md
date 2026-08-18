# Spanish — the Michel Thomas way

**Live: https://aiappbulder-hub.github.io/Spanish/**

A speaking-first Spanish course that runs in the browser. No accounts, no build
step, no network. Open `index.html` and start talking.

## What makes it "Michel Thomas"

The method is not flashcards with a Spanish coat of paint. Four things define
it, and the app is built around them:

**You never memorise.** Each lesson hands you a few building blocks — a
cognate pattern, a verb form, a connector — and then immediately makes you
build sentences out of them. Retention is a side effect of construction.

**You produce before you look.** Every prompt is English, and the Spanish stays
hidden until you ask for it. The pause where you work it out is the part that
teaches; the app never rushes it and never runs a timer.

**Nothing is dropped.** A missed sentence reappears a few prompts later in the
same session, then again the next day, then a week out. Remembering to revise
is the app's job, not yours.

**Everything accumulates.** Lesson 5 does not drill lesson 5 in isolation — it
weaves in whatever is due from lessons 1 to 4, so old material keeps getting
re-earned in new company.

## Conversations

Every lesson ends in a real exchange, and this is the point of the whole thing.
The other speaker talks; you have to answer. Crucially, each conversation is
built **only** from material already taught, so from lesson one you are holding
up your end of a genuine dialogue rather than reciting drills.

The final lesson is about conversational survival specifically — asking someone
to slow down, saying you did not understand, buying yourself a second with
*bueno...*, and asking what a word means. That is the skill that decides whether
you actually speak to anyone.

## The reference shelf

Separate from the course, reachable from the home screen, and deliberately not
drilled or scheduled:

- **Sayings** — 100 expressions people actually use, from `¿Qué tal?` and
  `Es que...` through idioms (`costar un ojo de la cara`) to proverbs
  (`Del dicho al hecho hay mucho trecho`). Literal readings are given wherever
  they are the reason the phrase sticks.
- **Words** — 256 entries in themed groups: the 40 verbs that do most of the
  work, people, time, numbers, food, travel, describing things, and the small
  connecting words that turn phrases into speech. Nouns carry their article,
  because the article *is* the gender.
- **Spanish vs English** — 24 points where an English instinct produces wrong
  Spanish, with 71 worked examples. Not a grammar course: gender agreement,
  ser/estar, `gustar` running backwards, the compulsory double negative, the
  personal *a*, por/para, saber/conocer, and the stress rules that make Spanish
  spelling predictable.

Everything on the shelf has a play button, and search matches either language
with accents optional.

A note on why it is fenced off: Michel Thomas would not have handed you a word
list, and reading one is not learning. The course teaches; the shelf answers
questions. Keeping them apart is intentional.

## Running it

Open `index.html` in a browser. That is the whole install.

For a single-file copy — one 134 KB HTML file with everything inlined, nothing
external, suitable for hosting or emailing to someone:

```
node build.js          # writes dist/spanish-out-loud.html and _site/
```

Both outputs are build artifacts and are not committed — the deploy regenerates
them, and a committed copy would be permanently one commit out of date, since
the build stamps itself with the commit it was built from.

The bundle deliberately carries no `<html>`/`<body>` wrapper, so it works both
as a hosted page and when opened straight off disk.

If your browser is strict about local files, serve the directory:

```
python3 -m http.server 8000    # then open http://localhost:8000
```

**Audio.** Speech is not optional garnish here — you need to hear the Spanish.
The app uses the browser's built-in speech synthesis and picks a Spanish voice
automatically. If none is installed it says so; add one in your OS voice
settings. Pace is adjustable and starts deliberately unhurried.

**Speaking your answers.** In Chrome and Edge you can press *Say it* and answer
out loud — the app listens, checks what it heard, and grades it. Everywhere
else, say it out loud anyway and mark yourself honestly. Typing is available in
Settings for anyone who wants it, but it is off by default on purpose.

## Keyboard

The screen should not need your hands or your eyes while you answer.

| Key | Does |
| --- | --- |
| `Space` | Show the answer · advance the conversation |
| `1` `2` `3` | Got it · Nearly · Missed |
| `R` | Hear it again |
| `Esc` | Back to the course |

## How grading works

Three self-marks, because only you know whether you actually produced it:

- **Got it** — promotes the item; it comes back later and later.
- **Nearly** — you produced it but not cleanly; it holds its place.
- **Missed** — back to the start of the queue and again in this session.

If you type or speak your answer the app pre-judges it for you (accents and
punctuation are never penalised), but its verdict is a second opinion. Yours
decides.

The percentage on each lesson is *strength*, not coverage: one clean pass
through an item is worth a third of it. Reaching 100% means recalling the
material correctly on separate days, which is the only kind of knowing that
counts.

## Deployment

Pushing to `claude/spanish-michel-thomas-app-eg0drl` (this repo's default
branch) runs `.github/workflows/deploy.yml`, which rebuilds the bundle,
assembles the site, asserts the output is intact, and publishes to GitHub
Pages. There is no manual step — the workflow enables Pages itself on first
run.

The published site serves both forms:

| Path | What it is |
| --- | --- |
| `/` | the multi-file app |
| `/spanish-out-loud.html` | the single-file bundle, for saving or passing on |

## Layout

```
index.html            page shell and script order
build.js              assembles _site/ and the single-file bundle (both untracked)
data/curriculum.js    the course: blocks, drill items, conversations
data/reference.js     the shelf: sayings, vocabulary, grammar contrasts
js/engine.js          answer checking, Leitner scheduling, session building
js/speech.js          text-to-speech and optional speech recognition
js/storage.js         progress in localStorage
js/app.js             screens, drill loop, conversation loop, keyboard
css/styles.css        light and dark
```

## Extending the course

Add a lesson to `data/curriculum.js`. One rule governs everything: **never use a
word in an item or a conversation that no earlier block has introduced.** The
whole method rests on the learner never meeting an unexplained element, and
that guarantee is only as good as the newest lesson.

```js
{
  id: 'l9',
  title: 'Something new',
  subtitle: 'the short version',
  goal: 'What the learner can do afterwards.',
  blocks: [{ rule: 'the pattern', ex: 'example → ejemplo' }],
  items: [
    { en: 'English prompt.', es: 'Respuesta.', alt: ['Otra respuesta.'], note: 'shown only after the reveal' }
  ],
  conversations: [{
    id: 'c9a',
    title: 'Scene',
    setting: 'One line of context.',
    turns: [
      { who: 'them', es: '¿Qué tal?', en: 'How are things?' },
      { who: 'you',  cue: 'Say: Very well, thank you.', es: 'Muy bien, gracias.' }
    ]
  }]
}
```

Use `alt` wherever Spanish genuinely allows more than one answer — a climbing
object pronoun (`quiero comprarlo` / `lo quiero comprar`) or a feminine
agreement (`cansado` / `cansada`). Marking a learner wrong for correct Spanish
is the fastest way to lose them.
