import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Bio from "./pages/Bio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
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
    </Layout>
  );
}
