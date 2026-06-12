// ── Paste this block into your aboutus.jsx ──────────────────────────────────
// Requirements: Tailwind CSS (with darkMode: 'class' in tailwind.config)
// ─────────────────────────────────────────────────────────────────────────────

import { Gauge } from "lucide-react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const AlertIcon = () => (
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
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const CogIcon = () => (
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
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const PlugIcon = () => (
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
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GitIcon = () => (
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
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <line x1="6" y1="9" x2="6" y2="21" />
  </svg>
);

// ── Problems data ─────────────────────────────────────────────────────────────
const problems = [
  {
    id: 1,
    icon: <AlertIcon />,
    title: "Inefficient internal workflows",
    description:
      "Manual handoffs, siloed tools, and repeat work are silently draining engineering bandwidth — we replace friction with automation.",
  },
  {
    id: 2,
    icon: <Gauge />,
    title: "Systems that can't scale",
    description:
      "An architecture that works at 1,000 users buckles at 100,000. We identify and resolve the constraints before they become outages.",
  },
  {
    id: 3,
    icon: <CogIcon />,
    title: "Poor software architecture",
    description:
      "Accumulated technical debt slows every new feature. We diagnose the root structure and refactor toward maintainability without rewriting everything.",
  },
  {
    id: 4,
    icon: <PlugIcon />,
    title: "Lack of automation",
    description:
      "Repetitive processes that could be automated are costing your team hours every week. We build intelligent pipelines that reclaim that time.",
  },
  {
    id: 5,
    icon: <GitIcon />,
    title: "Fragmented integrations",
    description:
      "Disconnected SaaS tools and brittle point-to-point APIs create data silos and incident risk. We design unified, resilient integration layers.",
  },
];

// ── Stat card (replaces "Let's talk") ────────────────────────────────────────
const StatCard = () => (
  <div
    className="
      flex flex-col justify-center gap-6
      rounded-2xl border border-dashed
      px-7 py-8
      border-gray-300 bg-gray-50
      dark:border-[#2a2a3a] dark:bg-[#13131a]
      transition-colors duration-300
    "
  >
    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-rose-500 dark:text-rose-400">
      By the numbers
    </p>

    <div className="flex flex-col gap-4">
      {[
        { value: "3×", label: "faster incident resolution on average" },
        { value: "60%", label: "reduction in manual engineering toil" },
        { value: "< 30 days", label: "to production on most engagements" },
      ].map(({ value, label }) => (
        <div key={value} className="flex items-baseline gap-3">
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {value}
          </span>
          <span className="text-[13px] leading-snug text-gray-500 dark:text-gray-400">
            {label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// ── Component ─────────────────────────────────────────────────────────────────
export default function EngineeringProblemsSection() {
  return (
    <section
      className="
        w-full bg-white dark:bg-[#0d0d12]
        text-gray-900 dark:text-white
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] uppercase text-rose-500 dark:text-rose-400">
            The Hard Problems
          </p>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-5">
            The engineering problems most teams ignore — until it&rsquo;s too
            late
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-[17px] leading-relaxed text-gray-500 dark:text-gray-400">
            We&rsquo;ve seen every flavour of systemic technical pain.
            Here&rsquo;s what we actually fix.
          </p>
        </div>

        {/* ── Grid ───────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="
                flex flex-col gap-5
                rounded-2xl border
                px-7 py-7
                bg-gray-50 border-gray-200
                dark:bg-[#13131a] dark:border-[#1e1e2e]
                transition-colors duration-300
              "
            >
              {/* Icon bubble — rose tint to match the design */}
              <div
                className="
                  w-11 h-11 rounded-xl flex items-center justify-center
                  bg-rose-100 text-rose-600
                  dark:bg-rose-950/60 dark:text-rose-400
                "
              >
                {problem.icon}
              </div>

              <h3 className="text-[17px] font-bold text-gray-900 dark:text-white leading-snug">
                {problem.title}
              </h3>

              <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400">
                {problem.description}
              </p>
            </div>
          ))}

          {/* 6th cell — stat card */}
          <StatCard />
        </div>
      </div>
    </section>
  );
}
