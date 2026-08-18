/* Inline the app into a single self-contained HTML file.
 *
 * The output has no <html>, <head> or <body> wrapper: it is written as page
 * content so it can be published as a hosted artifact, and browsers supply the
 * missing structure themselves when the file is opened directly. One file
 * therefore serves both purposes.
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

const SCRIPTS = [
  'data/curriculum.js',
  'data/reference.js',
  'js/storage.js',
  'js/engine.js',
  'js/speech.js',
  'js/app.js'
];

// Keep the script order honest: it is the load order the app depends on.
const indexOrder = read('index.html')
  .match(/<script src="([^"]+)"><\/script>/g)
  .map(t => t.match(/src="([^"]+)"/)[1]);

if (indexOrder.join() !== SCRIPTS.join()) {
  console.error('index.html script order has drifted from build.js:');
  console.error('  index.html: ' + indexOrder.join(', '));
  console.error('  build.js:   ' + SCRIPTS.join(', '));
  process.exit(1);
}

// </script> inside a string literal would close the inlined block early.
const guard = js => js.replace(/<\/script>/gi, '<\\/script>');

const out = `<title>Spanish Out Loud</title>
<meta name="description" content="A speaking-first Spanish course built on the Michel Thomas method: build sentences from the first minute, and hold a real conversation at the end of every lesson.">
<style>
${read('css/styles.css').trim()}
</style>

<div id="app"></div>
<noscript>
  <p style="padding:2rem;font:1rem/1.6 system-ui">This course is interactive and needs JavaScript switched on.</p>
</noscript>

<script>
${SCRIPTS.map(f => `/* ===== ${f} ===== */\n${guard(read(f).trim())}`).join('\n\n')}
</script>
`;

fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'dist/spanish-out-loud.html'), out);

const kb = (Buffer.byteLength(out) / 1024).toFixed(0);
console.log(`dist/spanish-out-loud.html — ${kb} KB, ${SCRIPTS.length} scripts inlined`);
