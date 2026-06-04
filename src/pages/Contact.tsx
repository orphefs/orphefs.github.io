import { profile, getEmail } from "../data/profile";

// Non-email links (safe to expose directly).
const channels = [
  { ic: "in", label: "LinkedIn", val: "in/kypris", href: profile.links.linkedin },
  { ic: "gh", label: "GitHub", val: "@orphefs", href: profile.links.github },
  { ic: "edu", label: "Google Scholar", val: "publications", href: profile.links.scholar },
  { ic: "md", label: "Medium", val: "@orphefs", href: profile.links.medium },
  { ic: "cm", label: "Codementor", val: "@okypris", href: profile.links.codementor },
];

export default function Contact() {
  // Build the mailto only on interaction so it never sits in the DOM/source.
  const openEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = String.fromCharCode(109, 97, 105, 108, 116, 111, 58) + getEmail(); // "mailto:"
  };

  return (
    <>
      <p className="kicker">echo $CONTACT</p>
      <h1 style={{ fontSize: "clamp(26px,4vw,38px)", margin: "0 0 10px" }}>
        Get in touch<span className="cursor" aria-hidden />
      </h1>
      <p className="muted" style={{ maxWidth: "60ch", marginTop: 0 }}>
        Open to conversations on ML platform engineering, computational electromagnetics, FEM
        simulation, sensing, and research-grade problems with real-world impact.
      </p>

      <div className="terminal-block" style={{ margin: "22px 0 30px" }}>
        <div className="line">
          <span className="prompt" />
          <span className="cmd">cat ~/.contact</span>
        </div>
        <div className="line muted">
          name&nbsp;&nbsp;&nbsp; = <span className="accent">"{profile.name}"</span>
        </div>
        <div className="line muted">
          role&nbsp;&nbsp;&nbsp; = <span className="accent">"{profile.role}"</span>
        </div>
        <div className="line muted">
          location = <span className="accent">"{profile.location}"</span>
        </div>
        <div className="line muted">
          email&nbsp;&nbsp;&nbsp;={" "}
          <a href="#" onClick={openEmail}>
            {getEmail()}
          </a>
        </div>
      </div>

      <div className="contact-grid">
        {/* Email card — assembled at runtime, mailto built on click */}
        <a className="contact-card" href="#" onClick={openEmail}>
          <span className="ic">[mail]</span>
          <span className="lbl">Email</span>
          <span className="val">{getEmail()}</span>
        </a>

        {channels.map((c) => (
          <a
            key={c.label}
            className="contact-card"
            href={c.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="ic">[{c.ic}]</span>
            <span className="lbl">{c.label}</span>
            <span className="val">{c.val}</span>
          </a>
        ))}
      </div>
    </>
  );
}
