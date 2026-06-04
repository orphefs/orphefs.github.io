import { useEffect, useState } from "react";

// Keyword summary (the visible trigger).
const KEYWORDS = [
  "MLOps",
  "LLMOps",
  "Agentic AI",
  "MCP servers",
  "multi-tenant ML",
  "AWS",
  "Airflow",
  "Kubernetes/EKS",
  "Terraform / IaC",
  "CI/CD",
  "observability",
  "zero-downtime deploys",
];

// Full detail revealed on hover.
const DETAILS = [
  {
    h: "End-to-end MLOps platform ownership",
    d: "async/batch inference on AWS (SageMaker, Lambda, EventBridge, S3), orchestrated by Airflow + Kubernetes/EKS, Terraform-managed infrastructure, GitHub Actions / Tekton CI/CD.",
  },
  {
    h: "LLMOps & Agentic AI",
    d: "production MCP server design, tool-routing, agent orchestration, and OAuth OBO for user-scoped permissions across the agent surface — wiring foundation models into enterprise systems safely.",
  },
  {
    h: "Secure multi-tenant ML systems",
    d: "Vault-backed secret management, tenant isolation, and audit trails for ML over rights-restricted or regulated data.",
  },
  {
    h: "Platform engineering depth",
    d: "observability, model versioning, reproducibility, zero-downtime deploys, IaC.",
  },
];

const BIN = "01";

// Animate text from scrambled 1s/0s into the final string over ~1s.
function useDecrypt(text: string, play: boolean) {
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!play) {
      setOut(text);
      return;
    }
    const duration = 1000;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const revealed = p * text.length;
      let s = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " " || ch === "\n") s += ch;
        else if (i < revealed - 2) s += ch; // settled
        else s += BIN[(Math.random() * 2) | 0]; // still scrambling
      }
      setOut(s);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setOut(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, text]);
  return out;
}

function DetailLine({ h, d, play }: { h: string; d: string; play: boolean }) {
  const dd = useDecrypt(d, play);
  return (
    <div className="reveal-item">
      <div className="reveal-h">{h}</div>
      <div className="reveal-d">{dd}</div>
    </div>
  );
}

export default function PlatformSummary() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="reveal-wrap"
      tabIndex={0}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      aria-describedby="platform-detail"
    >
      <div className="chips reveal-chips">
        {KEYWORDS.map((k) => (
          <span className="chip" key={k}>
            {k}
          </span>
        ))}
        <span className="reveal-hint">hover ▸</span>
      </div>

      <div
        id="platform-detail"
        role="tooltip"
        className={`reveal-popup${open ? " open" : ""}`}
      >
        <div className="reveal-popup-head">
          <span className="accent">orfeas@kypris:~$</span> decrypt --what-i-bring
        </div>
        {DETAILS.map((x) => (
          <DetailLine key={x.h} h={x.h} d={x.d} play={open} />
        ))}
      </div>
    </div>
  );
}
