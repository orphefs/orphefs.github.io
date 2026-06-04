import { useEffect, useRef } from "react";
import { stack } from "../data/profile";

// Map known tools to a devicon slug; everything else uses the generic glyph.
// Icons are recolored to the theme green via CSS mask, so brand colors don't matter.
const DEVICON: Record<string, string> = {
  Python: "python/python-original",
  PyTorch: "pytorch/pytorch-original",
  TensorFlow: "tensorflow/tensorflow-original",
  FastAPI: "fastapi/fastapi-original",
  Docker: "docker/docker-original",
  "Kubernetes/EKS": "kubernetes/kubernetes-original",
  Kubernetes: "kubernetes/kubernetes-original",
  "AWS SageMaker": "amazonwebservices/amazonwebservices-original-wordmark",
  AWS: "amazonwebservices/amazonwebservices-original-wordmark",
  Lambda: "amazonwebservices/amazonwebservices-original-wordmark",
  EventBridge: "amazonwebservices/amazonwebservices-original-wordmark",
  Airflow: "apacheairflow/apacheairflow-original",
  Terraform: "terraform/terraform-original",
  "GitHub Actions": "githubactions/githubactions-original",
  MATLAB: "matlab/matlab-original",
  Linux: "linux/linux-original",
  Git: "git/git-original",
  "C++ (pybind)": "cplusplus/cplusplus-original",
};

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

// Generic "module/cube" glyph, used for tools without a devicon.
const FALLBACK =
  "data:image/svg+xml," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>" +
      "<path d='M12 2 21 7v10l-9 5-9-5V7z' fill='none' stroke='black' stroke-width='1.7' stroke-linejoin='round'/>" +
      "<path d='M12 2v20M3 7l9 5 9-5' fill='none' stroke='black' stroke-width='1.7' stroke-linejoin='round'/>" +
      "</svg>"
  );

function iconCss(name: string): string {
  const slug = DEVICON[name];
  return `url("${slug ? `${ICON_BASE}${slug}.svg` : FALLBACK}")`;
}

export default function StackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const played = useRef(false);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const play = () => {
      if (played.current) return;
      played.current = true;

      const icons = Array.from(root.querySelectorAll<HTMLElement>(".chip-ico"));
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce) {
        icons.forEach((el) => el.classList.add("shown"));
        return;
      }

      icons.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        const endY = rect.top + rect.height / 2;
        const startY = -44;

        const fly = document.createElement("span");
        fly.className = "fly";
        fly.style.left = `${rect.left + rect.width / 2}px`;

        const tail = document.createElement("span");
        tail.className = "fly-tail";
        const core = document.createElement("span");
        core.className = "fly-core";
        core.style.setProperty("--ico", getComputedStyle(el).getPropertyValue("--ico"));
        fly.append(tail, core);
        document.body.appendChild(fly);

        const anim = fly.animate(
          [
            { transform: `translate(-50%, ${startY}px) scaleY(1.4)`, opacity: 0 },
            { transform: `translate(-50%, ${startY + 26}px) scaleY(1.3)`, opacity: 1, offset: 0.08 },
            { transform: `translate(-50%, ${endY}px) scaleY(1)`, opacity: 1, offset: 0.9 },
            { transform: `translate(-50%, ${endY}px) scale(0.35)`, opacity: 0 },
          ],
          {
            duration: 780,
            delay: idx * 55,
            easing: "cubic-bezier(0.55, 0, 0.45, 1)",
            fill: "forwards",
          }
        );

        anim.onfinish = () => {
          fly.remove();
          el.classList.add("shown", "absorb");
          const chip = el.closest(".chip");
          if (chip) {
            chip.classList.add("absorbed");
            window.setTimeout(() => chip.classList.remove("absorbed"), 520);
          }
        };
      });
    };

    // Trigger on first pointer focus OR first time the section scrolls into view.
    const onEnter = () => play();
    root.addEventListener("pointerenter", onEnter);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) play();
      },
      { threshold: 0.35 }
    );
    io.observe(root);

    return () => {
      root.removeEventListener("pointerenter", onEnter);
      io.disconnect();
    };
  }, []);

  return (
    <section className="section" ref={sectionRef}>
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
                    <span
                      className="chip-ico"
                      aria-hidden
                      style={{ ["--ico" as string]: iconCss(i) } as React.CSSProperties}
                    />
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
