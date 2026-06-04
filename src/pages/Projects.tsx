import { useMemo, useState } from "react";
import { projects, type Project } from "../data/projects";

const DOMAINS = ["all", "ML Platform", "EM / FEM", "Computer Vision", "Geospatial ML"] as const;

function Card({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="proj-card" id={`proj-${p.key}`}>
      <div className="proj-thumb">
        <span className="domain-tag">{p.domain}</span>
        <img src={p.image} alt={p.title} loading="lazy" />
      </div>
      <div className="proj-body">
        <h3>{p.title}</h3>
        <div className="proj-org">
          {p.org} <span className="dotsep">·</span> {p.period}
        </div>
        <div className="proj-blurb">{p.blurb}</div>

        {open && (
          <div className="proj-detail">
            {p.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {p.links.length > 0 && (
              <div className="proj-links">
                {p.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                    {l.label} &rarr;
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="proj-tags">
          {p.tags.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>

        <button className="expand-btn" onClick={() => setOpen((v) => !v)}>
          {open ? "[-] collapse" : "[+] read more"}
        </button>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof DOMAINS)[number]>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.domain === filter)),
    [filter]
  );

  return (
    <>
      <p className="kicker">ls -la ~/projects</p>
      <h1 style={{ fontSize: "clamp(26px,4vw,38px)", margin: "0 0 10px" }}>
        Selected work<span className="cursor" aria-hidden />
      </h1>
      <p className="muted" style={{ maxWidth: "62ch", marginTop: 0 }}>
        A curated slice across ML platform engineering and computational electromagnetics — from
        productionized ML pipelines to FEM-driven magnetic sensing.
      </p>

      <div className="filter-bar">
        {DOMAINS.map((d) => (
          <button
            key={d}
            className={`filter-btn${filter === d ? " active" : ""}`}
            onClick={() => setFilter(d)}
          >
            {d === "all" ? "* all" : d}
            <span className="faint">
              {" "}
              {d === "all"
                ? `(${projects.length})`
                : `(${projects.filter((p) => p.domain === d).length})`}
            </span>
          </button>
        ))}
      </div>

      <div className="proj-grid">
        {visible.map((p) => (
          <Card key={p.key} p={p} />
        ))}
      </div>
    </>
  );
}
