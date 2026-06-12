// ── Paste this block into your aboutus.jsx ──────────────────────────────────
// Requirements: Tailwind CSS (with darkMode: 'class' in tailwind.config)
// The left headline is position:sticky so it scrolls with the cards.
// ─────────────────────────────────────────────────────────────────────────────

// ── Icons ─────────────────────────────────────────────────────────────────────
const BoxIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

const LayersIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
    <polyline points="2 15.5 12 22 22 15.5" />
    <polyline points="2 12 12 18.5 22 12" />
  </svg>
);

const ZapIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const TerminalIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// ── Cards data ────────────────────────────────────────────────────────────────
const features = [
  {
    id: 1,
    icon: <BoxIcon />,
    title: "Engineering excellence",
    description:
      "We hold our code to the same bar we'd set for production at a FAANG-scale company — reviewed, typed, tested, and documented.",
  },
  {
    id: 2,
    icon: <LayersIcon />,
    title: "Scalable architecture mindset",
    description:
      "Every system is designed with 10x current load in mind. We think in data flows, failure modes, and operational costs from the first whiteboard session.",
  },
  {
    id: 3,
    icon: <ZapIcon />,
    title: "Fast delivery cycles",
    description:
      "We ship working software in weeks, not quarters. Tight feedback loops, clear milestones, and zero tolerance for status-quo delays.",
  },
  {
    id: 4,
    icon: <TerminalIcon />,
    title: "Modern tech stack",
    description:
      "TypeScript, Go, Rust, Postgres, Kafka, Kubernetes — we choose tools by merit, not habit. And we keep our expertise current.",
  },
  {
    id: 5,
    icon: <ShieldIcon />,
    title: "Security by default",
    description:
      "Auth, encryption, audit trails, and OWASP compliance aren't afterthoughts. They're part of our definition of done from day zero.",
  },
  {
    id: 6,
    icon: <UsersIcon />,
    title: "Seamless collaboration",
    description:
      "Embedded in your processes — stand-ups, PR reviews, Slack, and shared roadmaps. We operate as your team, not a black-box vendor.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function WhyVelaForgeSection() {
  return (
    <section
      className="
        w-full bg-white dark:bg-[#0d0d12]
        text-gray-900 dark:text-white
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* ── LEFT — sticky headline ──────────────────────────────────── */}
          <div className="lg:w-[38%] lg:sticky lg:top-24 shrink-0">
            {/* Eyebrow */}
            <p className="mb-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-indigo-500 dark:text-indigo-400">
              Why VelaForge
            </p>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-widest text-gray-900 dark:text-white mb-7 capitalize">
              The difference is in the details.
            </h2>

            {/* Body */}
            <p className="text-base sm:text-[16px] leading-relaxed text-gray-500 dark:text-gray-400">
              Plenty of teams can write code. Fewer can build systems that hold
              up, adapt, and outlive the people who built them.
            </p>
          </div>

          {/* ── RIGHT — scrollable 2-col card grid ──────────────────────── */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="
                  flex flex-col gap-5
                  rounded-2xl border
                  px-6 py-6
                  bg-gray-50 border-gray-200
                  dark:bg-[#13131a] dark:border-[#1e1e2e]
                  transition-colors duration-300
                "
              >
                {/* Icon bubble */}
                <div
                  className="
                    w-10 h-10 rounded-xl flex items-center justify-center
                    bg-indigo-100 text-indigo-600
                    dark:bg-indigo-950 dark:text-indigo-400
                  "
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-bold text-gray-900 dark:text-white leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
