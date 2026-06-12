// ── Paste this block into your aboutus.jsx ──────────────────────────────────
// Requirements: Tailwind CSS (with darkMode: 'class' in tailwind.config)
// ─────────────────────────────────────────────────────────────────────────────

import { Telescope } from "lucide-react";
const CompassIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

// ── Stats for Mission card ────────────────────────────────────────────────────
const stats = [
  { label: "Founded", value: "2019" },
  { label: "Team size", value: "38 engineers" },
  { label: "Active clients", value: "60+ globally" },
  { label: "Stack", value: "Full-spectrum" },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function VisionMissionSection() {
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
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
            Where we&rsquo;re headed.
            <br />
            What we do every day.
          </h2>
        </div>

        {/* ── Two cards ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* ── Vision card ──────────────────────────────────────────────── */}
          <div
            className="
              flex flex-col gap-6
              rounded-2xl border px-8 py-8
              bg-indigo-50 border-indigo-100
              dark:bg-[#0f0f1a] dark:border-[#1e1e35]
              transition-colors duration-300
            "
          >
            {/* Icon */}
            <div
              className="
                w-11 h-11 rounded-xl flex items-center justify-center
                bg-indigo-200 text-indigo-700
                dark:bg-indigo-900/60 dark:text-indigo-400
              "
            >
              <Telescope />
            </div>

            {/* Eyebrow */}
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-indigo-500 dark:text-indigo-400">
              Vision
            </p>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug text-gray-900 dark:text-white -mt-3">
              A world where software is never the bottleneck.
            </h3>

            {/* Body */}
            <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
              We envision a future where every team — regardless of size or
              resources — has access to the same calibre of engineering that
              powers the world&rsquo;s most reliable software infrastructure.
              Scalability shouldn&rsquo;t be a luxury.
            </p>

            {/* Divider */}
            <hr className="border-indigo-100 dark:border-[#1e1e35]" />

            {/* Pull quote */}
            <p className="text-[14px] italic leading-relaxed text-gray-400 dark:text-gray-500">
              &ldquo;We build for the version of your company that exists in
              five years — not just the one that exists today.&rdquo;
            </p>
          </div>

          {/* ── Mission card ─────────────────────────────────────────────── */}
          <div
            className="
              flex flex-col gap-6
              rounded-2xl border px-8 py-8
              bg-gray-50 border-gray-200
              dark:bg-[#13131a] dark:border-[#1e1e2e]
              transition-colors duration-300
            "
          >
            {/* Icon */}
            <div
              className="
                w-11 h-11 rounded-xl flex items-center justify-center
                bg-gray-200 text-gray-600
                dark:bg-[#1e1e2e] dark:text-gray-400
              "
            >
              <CompassIcon />
            </div>

            {/* Eyebrow */}
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-500">
              Mission
            </p>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug text-gray-900 dark:text-white -mt-3">
              Eliminate technical risk for ambitious teams.
            </h3>

            {/* Body */}
            <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
              Every day, we work to ship systems that reduce operational risk,
              accelerate product velocity, and give engineering teams confidence
              in their infrastructure. We do this through principled design,
              honest communication, and a relentless focus on long-term
              maintainability.
            </p>

            {/* Divider */}
            <hr className="border-gray-200 dark:border-[#1e1e2e]" />

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-8">
              {stats.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-400 dark:text-gray-600">
                    {label}
                  </span>
                  <span className="text-[17px] font-bold text-gray-900 dark:text-white">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
