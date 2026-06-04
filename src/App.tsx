import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import ConsentBanner from "./components/ConsentBanner";
import { trackPageView } from "./analytics/analytics";
import Bio from "./pages/Bio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Record a page view on client-side navigation (no-op until consent + load).
    trackPageView(pathname + hash);

    if (hash) {
      // Wait a tick for the target page/section to render, then scroll to it.
      const id = decodeURIComponent(hash.slice(1));
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo(0, 0);
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  return (
    <div className="notfound">
      <div className="big">404</div>
      <p className="muted">
        <span className="prompt" />
        <span className="cmd">cd </span>
        that page does not exist.
      </p>
      <p>
        <Link to="/">&larr; back to bio</Link>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ConsentBanner />
    </Layout>
  );
}
