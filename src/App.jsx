import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { SITE, AUTHOR, CATEGORIES } from './config.js';
import Home from './pages/Home.jsx';
import Post from './pages/Post.jsx';
import About from './pages/About.jsx';

export default function App() {
  return (
    <>
      <header className="nav">
        <Link to="/" className="brand">{SITE.name}</Link>
        <nav>
          {Object.entries(CATEGORIES).map(([key, c]) => (
            <NavLink key={key} to={`/category/${key}`} style={{ '--c': c.color }}>
              {c.label}
            </NavLink>
          ))}
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main className="wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:cat" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<p>Page not found. <Link to="/">Go home</Link></p>} />
        </Routes>
      </main>
      <footer className="foot">
        © {new Date().getFullYear()} {AUTHOR.name}. <Link to="/about">About me</Link>
      </footer>
    </>
  );
}
