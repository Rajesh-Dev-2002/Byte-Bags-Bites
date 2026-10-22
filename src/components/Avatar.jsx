import { AUTHOR } from '../config.js';

export default function Avatar({ size = 120 }) {
  const initials = AUTHOR.name.split(' ').map((w) => w[0]).slice(0, 2).join('');
  const style = { width: size, height: size, fontSize: size / 2.6 };
  return AUTHOR.photo ? (
    <img className="avatar" style={style} src={AUTHOR.photo} alt={AUTHOR.name} />
  ) : (
    <div className="avatar" style={style} aria-label={AUTHOR.name}>{initials}</div>
  );
}
