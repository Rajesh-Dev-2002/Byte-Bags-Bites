import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { SITE, CATEGORIES } from '../config.js';
import { posts, formatDate } from '../lib/posts.js';

export default function Home() {
  const { cat } = useParams();
  const [q, setQ] = useState('');

  const list = posts.filter(
    (p) =>
      (!cat || p.category === cat) &&
      `${p.title} ${p.summary} ${p.place || ''}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <section className="hero">
        {cat && CATEGORIES[cat] ? (
          <h1 className="mega" style={{ '--c': CATEGORIES[cat].color }}>
            <span>{CATEGORIES[cat].label}</span>
          </h1>
        ) : (
          <>
            <h1 className="mega">
              {Object.entries(CATEGORIES).map(([k, c]) => (
                <Link key={k} to={`/category/${k}`} style={{ '--c': c.color }}>{c.word || c.label}</Link>
              ))}
            </h1>
            <p className="lead">{SITE.tagline}</p>
          </>
        )}
        <div className="tools">
          <div className="tabs">
            <NavLink to="/" end>All</NavLink>
            {Object.entries(CATEGORIES).map(([k, c]) => (
              <NavLink key={k} to={`/category/${k}`} style={{ '--c': c.color }}>{c.label}</NavLink>
            ))}
          </div>
          <input
            type="search"
            placeholder="Search posts"
            aria-label="Search posts"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </section>

      {list.length === 0 && <p className="empty">No posts match. Try another word or category.</p>}

      {list.map((p) => {
        const c = CATEGORIES[p.category] || { label: p.category, color: 'var(--muted)' };
        return (
          <article key={p.slug} className="row" style={{ '--c': c.color }}>
            <div className="meta">
              <span className="cat">{c.label}</span>
              <span>{formatDate(p.date)}</span>
              <span>{p.minutes} min read</span>
              {p.place && <span>{p.place}</span>}
            </div>
            <h2><Link to={`/post/${p.slug}`}>{p.title}</Link></h2>
            <p>{p.summary}</p>
          </article>
        );
      })}
    </>
  );
}
