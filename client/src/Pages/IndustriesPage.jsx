import {
  ArrowRight,
  BriefcaseBusiness,
  Building,
  Building2,
  GraduationCap,
  Hospital,
  HospitalIcon,
  Layers3,
  LifeBuoy,
  MapPin,
  Rocket,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Utensils,
  UtensilsCrossed,
  Zap,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
//components import
import Footer from '../Components/Footer';
import Header from '../Components/Header';
//questions for the faq

const faqItems = [
  {
    question: 'What industries do you work with?',
    answer:
      'We work across Real Estate, Healthcare, Education, Restaurants & Hospitality, E-Commerce, Startups, Professional Services, and many other sectors. Our process adapts to the needs of each industry.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer:
      "Absolutely. We perform a comprehensive audit of your current site's design, performance, accessibility, and SEO before creating a modernization strategy tailored to your goals.",
  },
  {
    question: 'Do you build custom web applications?',
    answer:
      'Yes. From SaaS platforms and internal dashboards to customer portals and workflow systems, we build custom web applications designed around your business requirements.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary depending on complexity. Smaller marketing websites often take 3-4 weeks, while larger web applications may require several months for design, development, testing, and deployment.',
  },
  {
    question: 'Do you provide maintenance after launch?',
    answer:
      'Yes. We offer ongoing maintenance, security updates, monitoring, performance optimization, content updates, and technical support after launch, for a period of 3 months.',
  },
  {
    question: 'Can you help improve website performance and SEO?',
    answer:
      'Yes. We optimize Core Web Vitals, technical SEO, page speed, accessibility, structured data, and overall user experience to improve visibility and conversions.',
  },
];
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

const features = [
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'Fast-loading websites optimized for Core Web Vitals.',
  },
  {
    icon: Search,
    title: 'SEO-First Development',
    description: 'Built for discoverability and organic growth.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Exceptional experiences on every device.',
  },
  {
    icon: Layers3,
    title: 'Scalable Architecture',
    description: 'Ready to grow alongside your business.',
  },
  {
    icon: Sparkles,
    title: 'Modern User Experience',
    description: 'Clean interfaces designed for engagement.',
  },
  {
    icon: LifeBuoy,
    title: 'Reliable Support',
    description: 'Long-term partnership beyond launch.',
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
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let frame;

    const animate = () => {
      setTick(performance.now() * 0.001);
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, []);
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

  return (
    <main className="bg-light-bg">
      <Header />
      <section
        aria-labelledby="industries-heading"
        className="dark:bg-surface mt-10 flex min-h-screen flex-col items-center bg-linear-to-b from-[#E2EFF7] to-[#F0F4F8] px-6 pt-12 pb-10 dark:bg-none"
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
          className="mt-30 w-full max-w-225"
          role="img"
          aria-label={`Industries served: ${INDUSTRIES.map((i) => i.label).join(', ')}`}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            setMouse({
              x: ((e.clientX - rect.left) / rect.width) * w,
              y: ((e.clientY - rect.top) / rect.height) * h,
            });
          }}
          onMouseLeave={() => {
            setMouse({ x: -9999, y: -9999 });
          }}
        >
          <svg
            viewBox={`0 0 ${w} ${h}`}
            className="block w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="spokeGradient">
                <stop offset="0%" stopColor="var(--color-primary-light)" />
                <stop offset="100%" stopColor="var(--color-primary)" />
              </linearGradient>

              <filter id="glow">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="8"
                  floodColor="#25bbed"
                  floodOpacity="0.25"
                />
              </filter>

              <filter id="cardShadow">
                <feDropShadow
                  dx="0"
                  dy="6"
                  stdDeviation="12"
                  floodColor="#000"
                  floodOpacity="0.08"
                />
              </filter>
            </defs>

            {/* animated rings */}

            <circle
              cx={cx}
              cy={cy}
              r={70 + Math.sin(tick * 2) * 4}
              fill="var(--color-primary)"
              fillOpacity="0.08"
            />

            <circle
              cx={cx}
              cy={cy}
              r={55 + Math.sin(tick * 2.5) * 3}
              fill="var(--color-primary)"
              fillOpacity="0.12"
            />

            {/* spokes */}

            {INDUSTRIES.map((ind, index) => {
              const base = polar(ind.angle, ind.dist, cx, cy, rx, ry);
              const orbitRadius = 8;

              const floatX = Math.cos(tick * 0.8 + index) * orbitRadius;

              const floatY = Math.sin(tick * 0.8 + index) * orbitRadius;

              const px = base.x + floatX;
              const py = base.y + floatY;

              const dx = px - mouse.x;
              const dy = py - mouse.y;

              const dist = Math.sqrt(dx * dx + dy * dy);

              let repelX = 0;
              let repelY = 0;

              if (dist < 130) {
                const t = Math.max(0, 1 - dist / 180);
                const force = t * t * t;
                repelX = (dx / dist) * force * 35;
                repelY = (dy / dist) * force * 35;
              }

              return (
                <line
                  key={ind.id}
                  x1={cx}
                  y1={cy}
                  x2={px + repelX}
                  y2={py + repelY}
                  stroke="url(#spokeGradient)"
                  strokeWidth="1.6"
                  strokeDasharray="6 5"
                  opacity="0.9"
                />
              );
            })}

            {/* center node */}

            <g filter="url(#glow)">
              <circle
                cx={cx}
                cy={cy}
                r={65}
                fill="var(--color-primary)"
                fillOpacity="0.12"
              />

              <circle
                cx={cx}
                cy={cy}
                r={48}
                fill="var(--color-primary)"
                fillOpacity="0.25"
              />

              <circle cx={cx} cy={cy} r={38} fill="var(--color-primary)" />

              <text
                x={cx}
                y={cy + 5}
                textAnchor="middle"
                fill="white"
                fontWeight="700"
                fontSize={Math.max(10, cardW * 0.15)}
              >
                VelaForge
              </text>
            </g>

            {/* industry cards */}

            {INDUSTRIES.map((ind, index) => {
              const base = polar(ind.angle, ind.dist, cx, cy, rx, ry);

              const floatX = Math.sin(tick * 1.4 + index * 0.7) * 6;

              const floatY = Math.cos(tick * 1.2 + index * 0.9) * 6;
              let px = base.x + floatX;
              let py = base.y + floatY;

              const dx = px - mouse.x;
              const dy = py - mouse.y;

              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 180 && distance > 0) {
                // smooth cubic falloff
                const t = Math.max(0, 1 - distance / 180);
                const force = t * t * t;

                // normalized direction away from cursor
                const nx = dx / distance;
                const ny = dy / distance;

                // tangential direction (adds natural orbital motion)
                const tx = -ny;
                const ty = nx;

                // primary repulsion
                px += nx * force * 55;
                py += ny * force * 55;

                // subtle sideways drift
                px += tx * force * 14;
                py += ty * force * 14;
              }

              const x = px - cardW / 2;
              const y = py - cardH / 2;

              const Icon = ind.icon;

              return (
                <g
                  key={ind.id}
                  style={{
                    transition: 'transform 120ms linear',
                  }}
                >
                  <rect
                    x={x}
                    y={y}
                    width={cardW}
                    height={cardH}
                    rx={18}
                    fill="rgba(255,255,255,0.78)"
                    stroke="rgba(24,117,187,0.15)"
                    strokeWidth="1"
                    filter="url(#cardShadow)"
                    className="dark:fill-[#0D1B2A]"
                  />

                  <rect
                    x={x}
                    y={y}
                    width={cardW}
                    height={cardH}
                    rx={18}
                    fill="none"
                    stroke="rgba(37,187,237,0.20)"
                  />

                  <g transform={`translate(${px - iconSize / 2}, ${py - 18})`}>
                    <Icon
                      size={iconSize}
                      className="text-primary"
                      strokeWidth={1.8}
                    />
                  </g>

                  <text
                    x={px}
                    y={py + 16}
                    textAnchor="middle"
                    fontWeight="600"
                    fontSize={labelSize}
                    className="fill-slate-800 dark:fill-white"
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
      <section
        aria-labelledby="why-choose-heading"
        className="bg-slate-100 py-24 dark:bg-black"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="why-choose-heading"
              className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white"
            >
              Why Businesses Choose VelaForge
            </h2>

            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              The principles that guide every project we ship.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  {/* Icon */}
                  <div
                    className="border-primary/15 bg-primary/10 flex h-16 w-16 items-center justify-center rounded-2xl border"
                    aria-hidden="true"
                  >
                    <Icon
                      size={28}
                      className="text-primary"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section
        aria-labelledby="faq-heading"
        className="dark:bg-surface bg-slate-100 py-24"
      >
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="text-center">
            <p
              id="faq-heading"
              className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white"
            >
              Frequently Asked Questions
            </p>
          </div>

          {/* FAQ List */}
          <div className="mt-14 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-200 dark:border-slate-800 dark:bg-slate-900"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-left">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </h3>

                  <svg
                    className="text-primary h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <div className="px-6 pb-6">
                  <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* CTA section */}
      <section
        aria-labelledby="cta-heading"
        className="dark:bg-surface bg-[#eef4f8] py-24"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-sky-50 px-8 py-20 text-center dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
            {/* Background Glow */}
            <div
              aria-hidden="true"
              className="bg-primary/10 absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              {/* Icon */}
              <div
                className="bg-primary shadow-primary/30 mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-lg"
                aria-hidden="true"
              >
                <Sparkles className="h-8 w-8 text-white" />
              </div>

              {/* Heading */}
              <h2
                id="cta-heading"
                className="mx-auto mt-10 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white"
              >
                Ready to Build Something
                <span className="text-primary block">Exceptional?</span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Let's create a digital experience tailored to your industry and
                business goals.
              </p>

              {/* CTA Button */}
              <div className="mt-10">
                <a
                  href="/contact"
                  className="bg-accent hover:bg-accent-dark focus:ring-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-slate-900"
                  aria-label="Contact VelaForge about your project"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
