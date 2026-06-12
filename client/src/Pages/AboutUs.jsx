// Assuming AppNavbar is imported elsewhere in your app
import {
  BrainIcon,
  CircleCheck,
  CodeIcon,
  LayersIcon,
  ServerIcon,
} from "lucide-react";
import VisionMissionSection from "../Components/AboutUsPage/VisionAndMission";
import EngineeringProblemsSection from "../Components/AboutUsPage/WhatWeSolve";
import WhyVelaForgeSection from "../Components/AboutUsPage/WhyUsSection";
import AppNavbar from "../Components/Header";
const AboutUs = () => {
  // Stats data updated to '10+' per your screenshot
  const stats = [
    {
      label: "Products shipped",
      value: "10+",
    },
    {
      label: "Uptime SLA",
      value: "99.9%",
    },
    {
      label: "Avg. response",
      value: "40ms",
    },
  ];
  //who we are section data
  const pillars = [
    {
      id: 1,
      text: "Founded by engineers who built at scale — we understand the infrastructure beneath the product.",
    },
    {
      id: 2,
      text: "Every system we design is built to evolve: modular, documented, and tested under real conditions.",
    },
    {
      id: 3,
      text: "We partner long-term, not project-to-project — our incentives align with your growth.",
    },
  ];
  //what we build section
  const services = [
    {
      id: 1,
      badge: "Product Engineering",
      icon: <LayersIcon />,
      title: "SaaS Platforms",
      description:
        "End-to-end SaaS product engineering — from multi-tenant architecture and billing systems to role-based access and analytics dashboards.",
    },
    {
      id: 2,
      badge: "Bespoke Solutions",
      icon: <CodeIcon />,
      title: "Custom Software",
      description:
        "Bespoke software built around your operations. We translate complex business logic into clean, maintainable, and extensible codebases.",
    },
    {
      id: 3,
      badge: "Infrastructure",
      icon: <ServerIcon />,
      title: "Scalable Backends",
      description:
        "High-throughput APIs, event-driven microservices, distributed databases, and infrastructure that holds up under real production load.",
    },
    {
      id: 4,
      badge: "AI / ML",
      icon: <BrainIcon />,
      title: "AI-Powered Tools",
      description:
        "LLM integrations, intelligent automation pipelines, and ML-backed features embedded directly into your product or internal tooling.",
    },
  ];

  return (
    <main className="min-h-screen">
      <AppNavbar />
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
        {/* Absolute Background Grid Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          {/* Main central deep glow */}
          <div className="w-[80vw] h-[80vw] max-w-200 max-h-200 rounded-full bg-indigo-500/20 dark:bg-indigo-500/10 blur-3xl opacity-100 transition-opacity duration-1000"></div>
          {/* Inner slightly brighter glow core */}
          <div className="absolute w-[40vw] h-[40vw] max-w-100 max-h-100 rounded-full bg-purple-500/15 blur-3xl opacity-100 transition-opacity duration-1000"></div>
        </div>

        {/* 4. MAIN CONTENT CONTAINER (Z-INDEX 20) */}
        <div className="relative z-20 max-w-4xl text-center">
          {/* Badge */}
          <span className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wide uppercase border rounded-full border-indigo-500/30 text-indigo-600 dark:text-indigo-400">
            Infrastructure for the future
          </span>

          {/* Heading */}
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl">
            We build software <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent capitalize">
              that scales with you.
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 dark:text-gray-400">
            VelaForge Tech crafts scalable SaaS platforms, custom software, and
            AI-powered systems — built for the demands of tomorrow's
            enterprises.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-4 font-bold text-white transition-transform transform bg-indigo-600 rounded-lg hover:scale-105 hover:bg-indigo-700">
              Work with us →
            </button>
            <button className="px-8 py-4 font-bold transition-colors bg-gray-200 rounded-lg text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
              Explore our products
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-20 border-t border-gray-200 dark:border-gray-800 pt-8">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl font-bold md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="
        w-full bg-white dark:bg-[#0d0d12]
        text-gray-900 dark:text-white
        transition-colors duration-300
      "
      >
        <div
          className="
          max-w-6xl mx-auto
          px-6 sm:px-10 lg:px-16
          py-20 lg:py-28
          grid grid-cols-1 lg:grid-cols-2
          gap-12 lg:gap-20
          items-center
        "
        >
          <div>
            <p
              className="
              mb-5
              text-[11px] font-semibold tracking-[0.2em] uppercase
              text-indigo-500 dark:text-indigo-400
            "
            >
              Who We Are
            </p>

            <h2
              className="
              mb-7
              text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight
              text-gray-900 dark:text-white
            "
            >
              Built by engineers.
              <br />
              Driven by craft.
            </h2>

            {/* Body copy */}
            <div
              className="
              space-y-5
              text-base sm:text-[15px] leading-relaxed
              text-gray-500 dark:text-gray-400
            "
            >
              <p>
                VelaForge Tech was born out of frustration with software that
                couldn&rsquo;t grow. We started as a team of infrastructure
                engineers who kept seeing the same patterns &mdash; systems that
                worked at MVP scale but crumbled under real-world load.
              </p>
              <p>
                Today we build the software layer that companies rely on &mdash;
                from early-stage SaaS products to enterprise-grade platforms
                processing millions of events per day.
              </p>
            </div>
          </div>

          {/* ── Right column — pillar cards ──────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="
                flex items-start gap-4
                rounded-2xl border
                px-6 py-5
                bg-gray-50 border-gray-200
                dark:bg-[#13131a] dark:border-[#1e1e2e]
                transition-colors duration-300
              "
              >
                {/* Circle-check icon */}
                <span className="text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0">
                  <CircleCheck />
                </span>

                {/* Card text */}
                <p
                  className="
                  text-[15px] leading-relaxed
                  text-gray-700 dark:text-gray-300
                "
                >
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="
        w-full bg-white dark:bg-[#0d0d12]
        text-gray-900 dark:text-white
        transition-colors duration-300
      "
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          {/* ── Section header ─────────────────────────────────────────────── */}
          <div className="text-center mb-14">
            {/* Eyebrow */}
            <p
              className="
              mb-4
              text-[11px] font-semibold tracking-[0.2em] uppercase
              text-indigo-500 dark:text-indigo-400
            "
            >
              What We Build
            </p>

            {/* Headline */}
            <h2
              className="
              text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight
              text-gray-900 dark:text-white
              max-w-2xl mx-auto
            "
            >
              Software for every layer of your stack
            </h2>
          </div>

          {/* ── Cards grid ─────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="
                flex flex-col gap-5
                rounded-2xl border
                px-7 py-7
                bg-gray-50 border-gray-200
                dark:bg-[#13131a] dark:border-[#1e1e2e]
                transition-colors duration-300
              "
              >
                {/* Badge */}
                <span
                  className="
                  self-start
                  rounded-full border px-3 py-1
                  text-[11px] font-mono tracking-wide
                  text-indigo-600 border-indigo-300 bg-indigo-50
                  dark:text-indigo-300 dark:border-indigo-800 dark:bg-indigo-950/40
                "
                >
                  {service.badge}
                </span>

                {/* Icon bubble */}
                <div
                  className="
                  w-11 h-11 rounded-xl flex items-center justify-center
                  bg-indigo-100 text-indigo-600
                  dark:bg-indigo-950 dark:text-indigo-400
                "
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                  text-xl font-bold
                  text-gray-900 dark:text-white
                "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                  text-[15px] leading-relaxed
                  text-gray-500 dark:text-gray-400
                "
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringProblemsSection />
      <WhyVelaForgeSection />
      <VisionMissionSection />
    </main>
  );
};

export default AboutUs;
