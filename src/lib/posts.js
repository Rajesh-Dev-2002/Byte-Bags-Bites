// Loads every .md file in src/posts automatically. No code change needed to add a post.
const files = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true });

function parse(raw) {
  const m = raw.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta = {};
  m[1].split('\n').forEach((line) => {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  return { meta, body: m[2] };
}

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parse(raw);
    const minutes = Math.max(1, Math.round(body.split(/\s+/).length / 200));
    return { slug: path.split('/').pop().replace('.md', ''), ...meta, body, minutes };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
