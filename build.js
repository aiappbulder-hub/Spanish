/* Build the published site and the single-file bundle.
 *
 * Two things this has to get right:
 *
 * 1. Cache busting. The multi-file page loads css/ and js/ by plain relative
 *    path, so a browser that has visited before will happily keep serving the
 *    old JavaScript after a deploy — the page looks unchanged even though the
 *    deploy succeeded. Every asset reference therefore carries a ?v= stamp
 *    tied to the commit, so a new build is a new URL and cannot be stale.
 *
 * 2. One source of truth for what gets served. The site directory is assembled
 *    here rather than by shell steps in the workflow, so what CI publishes is
 *    exactly what `node build.js` produces locally.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
const STYLES = 'css/styles.css';

function version() {
  const sha = process.env.GITHUB_SHA;
  if (sha) return sha.slice(0, 8);
  try {
    return execSync('git rev-parse --short=8 HEAD', { cwd: ROOT }).toString().trim();
  } catch (e) {
    return String(Date.now());          // a working tree with no git still builds
  }
}

const V = version();
const indexHtml = read('index.html');

// The load order in index.html is a real dependency; fail loudly if it drifts.
const indexOrder = indexHtml.match(/<script src="([^"]+)"><\/script>/g).map(t => t.match(/src="([^"]+)"/)[1]);
if (indexOrder.join() !== SCRIPTS.join()) {
  console.error('index.html script order has drifted from build.js:');
  console.error('  index.html: ' + indexOrder.join(', '));
  console.error('  build.js:   ' + SCRIPTS.join(', '));
  process.exit(1);
}

const guard = js => js.replace(/<\/script>/gi, '<\\/script>');
const stamp = `<script>window.MT_BUILD = ${JSON.stringify(V)};</script>`;

/* ---- the site ---- */

const SITE = path.join(ROOT, '_site');
fs.rmSync(SITE, { recursive: true, force: true });
fs.mkdirSync(SITE, { recursive: true });

let sitePage = indexHtml;
SCRIPTS.forEach(f => { sitePage = sitePage.replace(`src="${f}"`, `src="${f}?v=${V}"`); });
sitePage = sitePage.replace(`href="${STYLES}"`, `href="${STYLES}?v=${V}"`);
sitePage = sitePage.replace('</head>', stamp + '\n</head>');
fs.writeFileSync(path.join(SITE, 'index.html'), sitePage);

['css', 'js', 'data'].forEach(dir => {
  fs.cpSync(path.join(ROOT, dir), path.join(SITE, dir), { recursive: true });
});
fs.writeFileSync(path.join(SITE, '.nojekyll'), '');

/* ---- the single-file bundle, for the site and for handing to people ---- */

const bundle = `<title>Spanish Out Loud</title>
<meta name="description" content="A speaking-first Spanish course built on the Michel Thomas method: build sentences from the first minute, and hold a real conversation at the end of every lesson.">
${stamp}
<style>
${read(STYLES).trim()}
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
fs.writeFileSync(path.join(ROOT, 'dist/spanish-out-loud.html'), bundle);
fs.writeFileSync(path.join(SITE, 'spanish-out-loud.html'), bundle);

const kb = (Buffer.byteLength(bundle) / 1024).toFixed(0);
console.log(`build ${V}`);
console.log(`  _site/                     multi-file site, assets stamped ?v=${V}`);
console.log(`  dist/spanish-out-loud.html ${kb} KB single file`);
