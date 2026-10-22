import { AUTHOR } from '../config.js';
import Avatar from '../components/Avatar.jsx';

export default function About() {
  const links = Object.entries(AUTHOR.links).filter(([, url]) => url);
  return (
    <section className="about">
      <Avatar size={140} />
      <h1>{AUTHOR.name}</h1>
      <p className="role">{AUTHOR.role}, {AUTHOR.location}</p>

      {AUTHOR.bio.map((para, i) => <p key={i}>{para}</p>)}

      <h2>Skills</h2>
      <ul className="chips">
        {AUTHOR.skills.map((s) => <li key={s}>{s}</li>)}
      </ul>

      <h2>Education</h2>
      <ul>{AUTHOR.education.map((e) => <li key={e}>{e}</li>)}</ul>

      {links.length > 0 && (
        <>
          <h2>Find me online</h2>
          <p className="links">
            {links.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>
            ))}
          </p>
        </>
      )}
    </section>
  );
}
