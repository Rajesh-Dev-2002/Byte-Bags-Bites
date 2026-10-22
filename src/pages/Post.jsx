import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { CATEGORIES, AUTHOR } from "../config.js";
import { posts, formatDate } from "../lib/posts.js";
import Avatar from "../components/Avatar.jsx";
// import post from "../posts/";

export default function Post() {
  const { slug } = useParams();
  const p = posts.find((x) => x.slug === slug);
  if (!p)
    return (
      <p>
        Post not found. <Link to="/">Back to all posts</Link>
      </p>
    );

  const c = CATEGORIES[p.category] || {
    label: p.category,
    color: "var(--muted)",
  };
  return (
    <article className="post" style={{ "--c": c.color }}>
      <Link to={`/category/${p.category}`} className="back">
        Back to {c.label}
      </Link>
      <div className="meta">
        <span className="cat">{c.label}</span>
        <span>{formatDate(p.date)}</span>
        <span>{p.minutes} min read</span>
        {p.place && <span>{p.place}</span>}
      </div>
      <h1>{p.title}</h1>
      <div className="body">
        <ReactMarkdown>{p.body}</ReactMarkdown>
      </div>
     

      <aside className="byline">
        <Avatar size={64} />
        <div>
          <strong>Written by {AUTHOR.name}</strong>
          <span>
            {AUTHOR.role}, {AUTHOR.location}
          </span>
          <Link to="/about">More about me</Link>
        </div>
      </aside>
    </article>
  );
}
