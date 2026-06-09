import { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    year: '2024',
    label: '24',
    title: 'The Beginning',
    desc: 'Started as a passion project, building websites for local businesses',
  },
  {
    year: '2024',
    label: '24',
    title: 'Team Expansion',
    desc: 'Grew from solo developer to a talented team of creators',
  },
  {
    year: '2025',
    label: '25',
    title: 'First Major Project',
    desc: "Delivered a complex web application that transformed a client's business",
  },
  {
    year: '2026',
    label: '26',
    title: 'VelaForge Today',
    desc: 'Leading software development company with 10+ successful projects',
  },
];

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

function MilestoneCard({ item, index }) {
  const [ref, visible] = useFadeIn();
  const isLast = index === milestones.length - 1;

  return (
    <div
      ref={ref}
      className="flex gap-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(24px)',
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      {/* Timeline spine */}
      <div className="flex shrink-0 flex-col items-center">
        <div className="bg-primary mb-5 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white shadow-md shadow-black/10 transition-all duration-500 hover:scale-110 dark:shadow-black/40">
          {item.label}
        </div>

        {!isLast && (
          <div className="from-primary/60 to-primary/10 mt-1 min-h-10 w-px flex-1 bg-linear-to-b" />
        )}
      </div>

      {/* Card */}
      <div
        className={`mb-5 flex-1 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-white/10 dark:bg-[#0d1117]`}
      >
        <span className="text-primary text-xs font-semibold tracking-wider uppercase">
          {item.year}
        </span>

        <h4 className="mt-0.5 mb-1 text-sm font-bold text-gray-900 dark:text-white">
          {item.title}
        </h4>

        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function OurStory() {
  const [headRef, headVisible] = useFadeIn();
  const [copyRef, copyVisible] = useFadeIn();

  return (
    <section className="bg-white px-5 py-24 sm:px-10 dark:bg-[#111932]">
      {/* Heading */}
      <div
        ref={headRef}
        className="mx-auto mb-20 max-w-xl text-center"
        style={{
          opacity: headVisible ? 1 : 0,
          transform: headVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Our Story
        </h2>

        <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
          From a passion for technology to transforming businesses through
          innovation
        </p>
      </div>

      {/* Body */}
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-14 lg:flex-row lg:gap-20">
        {/* Left content */}
        <div
          ref={copyRef}
          className="lg:w-5/12"
          style={{
            opacity: copyVisible ? 1 : 0,
            transform: copyVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s',
          }}
        >
          <h3 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">
            Building Digital Excellence
          </h3>

          <p className="mb-4 text-sm leading-7 text-gray-500 dark:text-gray-400">
            VelaForge Technologies was born from a belief that every business
            deserves exceptional digital experiences.
          </p>

          <p className="mb-4 text-sm leading-7 text-gray-500 dark:text-gray-400">
            From simple websites to complex systems, our journey is driven by
            curiosity and quality.
          </p>

          <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
            Today we build scalable digital products that shape modern
            experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="w-full lg:w-7/12">
          {milestones.map((item, i) => (
            <MilestoneCard key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
