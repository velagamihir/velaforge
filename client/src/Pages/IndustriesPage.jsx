import {
  BriefcaseBusiness,
  Building,
  Building2,
  GraduationCap,
  Hospital,
  HospitalIcon,
  MapPin,
  Rocket,
  ShoppingCart,
  Store,
  Utensils,
  UtensilsCrossed,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Header from '../Components/Header';
const industryCards = [
  {
    icon: <Building2 />,
    title: 'Real Estate',
    desc: 'Property listings, virtual tours, and lead-capture platforms that convert.',
  },
  {
    icon: <HospitalIcon />,
    title: 'Healthcare',
    desc: 'HIPAA-conscious patient portals, appointment systems, and telehealth apps.',
  },
  {
    icon: <GraduationCap />,
    title: 'Education',
    desc: 'Learning management systems, course platforms, and institutional sites.',
  },
  {
    icon: <UtensilsCrossed />,
    title: 'Restaurants & Hospitality',
    desc: 'Online ordering, reservations, and branded guest experiences.',
  },
  {
    icon: <ShoppingCart />,
    title: 'E-Commerce',
    desc: 'High-performance storefronts optimized for discovery and conversions.',
  },
  {
    icon: <Rocket />,
    title: 'Startups',
    desc: 'MVPs, landing pages, and growth-ready architectures for fast-moving teams.',
  },
  {
    icon: <BriefcaseBusiness />,
    title: 'Professional Services',
    desc: 'Authority-building websites for law, finance, consulting, and more.',
  },
  {
    icon: <MapPin />,
    title: 'Local Businesses',
    desc: 'Local SEO-optimized sites that drive foot traffic and community trust.',
  },
];
const INDUSTRIES = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: Hospital,
    angle: -75,
    dist: 1.1,
  },
  {
    id: 'education',
    label: 'Education',
    icon: GraduationCap,
    angle: -28,
    dist: 1.1,
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    icon: ShoppingCart,

    angle: 18,
    dist: 1.05,
  },
  { id: 'localbiz', label: 'Local Biz', icon: Store, angle: 52, dist: 1.2 },
  {
    id: 'professional',
    label: 'Professional',
    icon: BriefcaseBusiness,
    angle: 108,
    dist: 0.95,
  },
  { id: 'startups', label: 'Startups', icon: Rocket, angle: 148, dist: 1.1 },
  {
    id: 'hospitality',
    label: 'Hospitality',
    icon: Utensils,
    angle: 195,
    dist: 0.95,
  },
  {
    id: 'realestate',
    label: 'Real Estate',
    icon: Building,
    angle: 242,
    dist: 1.05,
  },
];

function polar(angleDeg, dist, cx, cy, rx, ry) {
  const r = (angleDeg * Math.PI) / 180;
  return { x: cx + rx * dist * Math.cos(r), y: cy + ry * dist * Math.sin(r) };
}

export default function IndustriesSection() {
  const wrapRef = useRef(null);
  const [box, setBox] = useState({ w: 720, h: 340 });

  useEffect(() => {
    const ro = new ResizeObserver(([e]) => {
      const w = e.contentRect.width;
      setBox({ w, h: Math.max(240, w * 0.46) });
    });
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const { w, h } = box;
  const cx = w / 2,
    cy = h / 2;
  const rx = w * 0.46,
    ry = h * 0.46;
  const cardW = Math.max(82, Math.min(118, w * 0.15));
  const cardH = Math.max(64, Math.min(80, w * 0.12));
  const iconSize = Math.max(18, Math.min(26, w * 0.025));
  const labelSize = Math.max(11, Math.min(14, w * 0.014));
  const shapePoints = INDUSTRIES.map((ind) =>
    polar(ind.angle, 0.92, cx, cy, rx, ry)
  );
  const shapePath =
    shapePoints
      .map(
        (p, idx) =>
          `${idx === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`
      )
      .join(' ') + ' Z';

  return (
    <main className="bg-light-bg">
      <Header />
      <section
        aria-labelledby="industries-heading"
        className="dark:bg-surface mt-10 flex min-h-screen flex-col items-center bg-gradient-to-b from-[#E2EFF7] to-[#F0F4F8] px-6 pt-12 pb-10 dark:bg-none"
      >
        {/* Eyebrow pill */}
        <div className="dark:text-primary text-primary dark:bg-surface border-primary mb-6 rounded-full border bg-white/60 px-5 py-1.5 text-[0.7rem] font-semibold tracking-widest uppercase backdrop-blur-sm">
          Industries We Serve
        </div>

        {/* Headline */}
        <h2
          id="industries-heading"
          className="dark:text-text-light text-center text-[clamp(1.9rem,5vw,3.1rem)] leading-tight font-bold text-slate-900"
        >
          Digital Solutions Built for{' '}
          <span className="text-primary-light">Every Industry</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 max-w-md text-center text-[clamp(0.88rem,1.4vw,1rem)] leading-relaxed text-slate-500 dark:text-slate-400">
          We help organizations across diverse industries create fast, scalable,
          and conversion-focused digital experiences.
        </p>

        {/* CTA */}
        <a
          href="/contact"
          className="hover:bg-accent-dark focus-visible:outline-accent bg-accent mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-[0.95rem] font-bold text-white shadow-[0_4px_18px_rgba(184,92,0,0.28)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Contact Us <span aria-hidden="true">→</span>
        </a>

        {/* Spider diagram */}
        <div
          ref={wrapRef}
          className="mt-30 w-full max-w-190"
          role="img"
          aria-label={`Industries served: ${INDUSTRIES.map((i) => i.label).join(', ')}`}
        >
          <svg
            viewBox={`0 0 ${w} ${h}`}
            className="block w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <filter id="cs" x="-25%" y="-25%" width="150%" height="150%">
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="5"
                  floodColor="var(--color-primary)"
                  floodOpacity="0.12"
                />
              </filter>
            </defs>

            {/* Spokes */}
            {INDUSTRIES.map((ind) => {
              const p = polar(ind.angle, ind.dist, cx, cy, rx, ry);
              return (
                <line
                  key={ind.id + '-l'}
                  x1={cx}
                  y1={cy}
                  x2={p.x}
                  y2={p.y}
                  stroke="var(--color-primary)"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeDasharray="5 4"
                />
              );
            })}

            {/* Center */}
            <circle
              cx={cx}
              cy={cy}
              r={32}
              fill="var(--color-primary)"
              fillOpacity="0.12"
            />
            <circle cx={cx} cy={cy} r={22} fill="var(--color-primary)" />

            <text
              x={cx}
              y={cy + 5}
              textAnchor="middle"
              fill="var(--color-text-light)"
              fontSize={Math.max(10, cardW * 0.14)}
              fontWeight="700"
            >
              VF
            </text>

            {/* Cards */}
            {INDUSTRIES.map((ind) => {
              const p = polar(ind.angle, ind.dist, cx, cy, rx, ry);
              const x = p.x - cardW / 2;
              const y = p.y - cardH / 2;
              const iconY = p.y - 8;
              const labelY = p.y + 18;
              const IconComponent = ind.icon;

              return (
                <g key={ind.id}>
                  <rect
                    x={x}
                    y={y}
                    width={cardW}
                    height={cardH}
                    rx={16}
                    fill="white"
                    stroke="var(--color-primary)"
                    strokeOpacity="0.16"
                    strokeWidth="1"
                    filter="url(#cs)"
                    className="dark:fill-surface"
                  />

                  <g
                    transform={`translate(${p.x - iconSize / 2}, ${
                      iconY - iconSize / 2
                    })`}
                  >
                    <IconComponent
                      size={iconSize}
                      className="text-primary stroke-[1.5]"
                    />
                  </g>

                  <text
                    x={p.x}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={labelSize}
                    fontWeight="600"
                    fill="var(--color-text-light)"
                    className="fill-black dark:fill-white"
                  >
                    {ind.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </section>
      <div className="dark:bg-surface hidden items-center justify-center dark:flex">
        <div className="w-3/4 border border-gray-700"></div>
      </div>
      <section className="dark:bg-surface px-10 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
            Industries We Serve
          </h2>
          <p className="text-base text-gray-500">
            Specialized expertise across eight core verticals.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
          {industryCards.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col gap-3 rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl dark:bg-black"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl dark:bg-black dark:text-white">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#EDF3F8] px-10 py-20 dark:bg-linear-to-r dark:from-[#08111A] dark:to-[#030609]">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
            Built With Modern Technologies
          </h2>
          <p className="text-base text-gray-500">
            Production-grade tools selected for performance and longevity.
          </p>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { abbr: 'Re', name: 'React' },
              { abbr: 'N', name: 'Next.js' },
              { abbr: 'Tw', name: 'Tailwind CSS' },
              { abbr: 'No', name: 'Node.js' },
              { abbr: 'Ex', name: 'Express' },
              { abbr: 'Mo', name: 'MongoDB' },
              { abbr: 'Pg', name: 'PostgreSQL' },
              { abbr: 'Fi', name: 'Firebase' },
            ].map((tech, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-[#0D1B2A]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-xs font-bold text-white">
                  {tech.abbr}
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { abbr: 'Ve', name: 'Vercel' },
              { abbr: 'Aw', name: 'AWS' },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-[#0D1B2A]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-xs font-bold text-white">
                  {tech.abbr}
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
