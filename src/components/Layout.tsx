import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { profile } from "../data/profile";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="app">
      <header className="topbar">
        <div className="container topbar-inner">
          <span className="dots" aria-hidden>
            <span className="dot r" />
            <span className="dot y" />
            <span className="dot g" />
          </span>
          <Link to="/" className="brand" onClick={close}>
            <b>orfeas</b>@kypris:~
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "[x]" : "[≡]"}
          </button>
          <nav className={`nav${open ? " open" : ""}`}>
            <NavLink to="/" end onClick={close}>
              bio
            </NavLink>
            <NavLink to="/projects" onClick={close}>
              projects
            </NavLink>
            <NavLink to="/contact" onClick={close}>
              contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">{children}</div>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="comment">
            {profile.name} — {profile.role} · {profile.subRole}
          </span>
          <span className="faint">
            built with react + vite · © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}
