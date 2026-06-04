import { profile, stack } from "../data/profile";
import { publications, patents, timeline, education } from "../data/research";
import PlatformSummary from "../components/PlatformSummary";

export default function Bio() {
  return (
    <>
      {/* hero */}
      <section className="hero">
        <div>
          <p className="kicker">whoami</p>
          <h1>
            {profile.name}
            <span className="cursor" aria-hidden />
          </h1>
          <div className="role">{profile.role}</div>
          <p className="tagline">{profile.tagline}</p>
          <div className="meta-line">
            <span>
              <span className="accent">loc:</span> {profile.location}
            </span>
            <span>
              <span className="accent">focus:</span> ML platforms · MLOps · audio/music ML
            </span>
            <span>
              <span className="accent">status:</span> @ Universal Music Group
            </span>
          </div>
        </div>
        <img className="avatar" src="/images/orf.jpeg" alt="Orfeas Kypris" />
      </section>

      {/* about */}
      <section className="section">
        <h2>
          <span className="hash">$</span> cat about.md <span className="ln">// summary</span>
        </h2>
        <div className="window">
          <div className="window-head">
            <span className="fn">about.md</span>
            <span className="faint">— markdown</span>
          </div>
          <div className="window-body">
            <p>
              I'm a <span className="accent">Senior ML Platform Engineer</span>. My day-to-day is
              designing and productionizing ML platforms — pipelines, containerized microservices,
              CI/CD, and deployment — currently building music &amp; audio ML applications at{" "}
              <a href="https://www.universalmusic.com/" target="_blank" rel="noreferrer">
                Universal Music Group
              </a>
              .
            </p>
            <p>
              What I bring to that work is a <span className="cyan">physics and computational-modeling
              foundation</span>. My earlier career was in research: during my PhD I built physics-based
              models of magnetic Barkhausen noise and ran finite-element simulations in{" "}
              <a href="https://www.comsol.com/" target="_blank" rel="noreferrer">
                COMSOL
              </a>{" "}
              to recover mechanical stress as a function of depth in ferromagnetic structures — work
              that became the{" "}
              <a
                href="https://www.researchgate.net/publication/322567501_Quantitative_estimation_of_nonmonotonic_residual_stress_depth-profiles_using_an_extended_Kypris-Jiles_model_of_the_magnetic_Barkhausen_noise_spectrum"
                target="_blank"
                rel="noreferrer"
              >
                Kypris–Jiles model
              </a>{" "}
              — and as a postdoc I developed magnetic structural-health-monitoring sensors at{" "}
              <a href="https://www.cs.ox.ac.uk/research/cyberphysical/" target="_blank" rel="noreferrer">
                Oxford
              </a>
              . I no longer work in
              electromagnetics day-to-day, but that grounding in first-principles physics, numerical
              modeling, and signal processing is the lens I still bring to hard engineering problems.
            </p>
            <p>
              Along the way I've co-authored <span className="amber">two patents</span>, published in
              top-tier IEEE venues, led engineering teams, and shipped production software for indoor
              localization, robotic welding, computer vision, and geospatial ML. I gravitate toward
              research-grade problems with real social and environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* what I bring — hover to decrypt */}
      <section className="section">
        <h2>
          <span className="hash">$</span> whatis ml-platform-work{" "}
          <span className="ln">// hover to decrypt</span>
        </h2>
        <PlatformSummary />
      </section>

      {/* stack */}
      <section className="section">
        <h2>
          <span className="hash">$</span> ls ~/stack <span className="ln">// tools &amp; methods</span>
        </h2>
        <div className="window">
          <div className="window-body stack-grid">
            {stack.map((g) => (
              <div className="stack-row" key={g.group}>
                <div className="label">{g.group}/</div>
                <div className="chips">
                  {g.items.map((i) => (
                    <span className="chip" key={i}>
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="section">
        <h2>
          <span className="hash">$</span> git log --oneline <span className="ln">// trajectory</span>
        </h2>
        <div className="window">
          <div className="window-body timeline">
            {timeline.map((t, i) => (
              <div className="tl-row" key={i}>
                <div className="tl-when">{t.when}</div>
                <div>
                  <div className="tl-what">{t.what}</div>
                  <div className="tl-where">
                    @{" "}
                    {t.url ? (
                      <a href={t.url} target="_blank" rel="noreferrer">
                        {t.where}
                      </a>
                    ) : (
                      t.where
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* academia */}
      <section className="section">
        <h2>
          <span className="hash">$</span> cat academia.md{" "}
          <span className="ln">// education &amp; research lineage</span>
        </h2>
        <div className="window">
          <div className="window-body">
            {education.map((e) => (
              <div className="edu" key={e.institution}>
                <div className="edu-deg">
                  {e.degree} <span className="muted">·</span>{" "}
                  <span className="cyan">{e.field}</span>
                </div>
                <div className="edu-inst">
                  <a href={e.institutionUrl} target="_blank" rel="noreferrer">
                    {e.institution}
                  </a>{" "}
                  <span className="faint">· {e.years}</span>
                </div>
                <div className="edu-adv">
                  advisor:{" "}
                  <a href={e.advisor.url} target="_blank" rel="noreferrer">
                    {e.advisor.name}
                  </a>
                </div>
              </div>
            ))}

            <div className="genealogy">
              <div className="reveal-popup-head" style={{ marginBottom: 8 }}>
                <span className="accent">$</span> git log --advisor --graph
              </div>
              <p>
                My doctoral advisor,{" "}
                <a
                  href="https://www.ece.iastate.edu/profiles/david-c-jiles/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Prof. David C. Jiles
                </a>
                , is the co-originator (with D. L. Atherton, 1984) of the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Jiles%E2%80%93Atherton_model"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jiles–Atherton model
                </a>{" "}
                — the standard physics-based description of ferromagnetic hysteresis, derived from
                domain-wall pinning and a mean-field anhysteretic curve. My thesis carried that
                magnetics lineage into the frequency domain as the{" "}
                <a
                  href="https://www.researchgate.net/publication/322567501_Quantitative_estimation_of_nonmonotonic_residual_stress_depth-profiles_using_an_extended_Kypris-Jiles_model_of_the_magnetic_Barkhausen_noise_spectrum"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kypris–Jiles model
                </a>{" "}
                of the Barkhausen noise spectrum — situating my work within a continuous line of
                magnetic-materials modeling that traces back through Jiles and Atherton.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* patents */}
      <section className="section">
        <h2>
          <span className="hash">$</span> cat patents.txt <span className="ln">// granted / filed</span>
        </h2>
        <div className="window">
          <div className="window-body">
            {patents.map((p) => (
              <div className="patent" key={p.id}>
                <div className="t">
                  <a href={p.url} target="_blank" rel="noreferrer">
                    {p.title}
                  </a>
                </div>
                <span className="id">{p.id}</span>{" "}
                <span className="role">[{p.role}]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* publications */}
      <section className="section">
        <h2>
          <span className="hash">$</span> cat publications.bib <span className="ln">// selected</span>
        </h2>
        <div className="window">
          <div className="window-body">
            {publications.map((p, i) => (
              <div className="pub" key={i}>
                <div className="t">
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noreferrer">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </div>
                <div className="a">{p.authors}</div>
                <div className="v">
                  {p.venue} · <span className="y">{p.year}</span>
                </div>
              </div>
            ))}
            <p className="faint" style={{ marginTop: 16, marginBottom: 0 }}>
              Full list on{" "}
              <a href={profile.links.scholar} target="_blank" rel="noreferrer">
                Google Scholar
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
