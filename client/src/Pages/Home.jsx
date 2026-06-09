//component imports
import Header from '../Components/Header';
import Features from '../Components/HomePage/Features';
import MileStones from '../Components/HomePage/MileStones';
//image imports
import DashboardImage from '../assets/images/homePage/photo-1551288049-bebda4e38f71.webp';
//svg imports
import DoubleQuotes from '../assets/SVGs/quote-33-double-close.svg';
//icons imports
import {
  Boxes,
  Code2,
  Globe,
  Palette,
  Search,
  ShoppingCart,
  Wrench,
  Zap,
} from 'lucide-react';
const Home = () => {
  //tech stack data for the technologies section
  const techStack = [
    { name: 'React', desc: 'Frontend' },
    { name: 'Next.js', desc: 'Framework' },
    { name: 'Vite', desc: 'Build Tool' },
    { name: 'TypeScript', desc: 'Language' },
    { name: 'JavaScript', desc: 'Language' },
    { name: 'Tailwind CSS', desc: 'Styling' },
    { name: 'Node.js', desc: 'Backend' },
    { name: 'Express.js', desc: 'Framework' },
    { name: 'MongoDB', desc: 'Database' },
    { name: 'PostgreSQL', desc: 'Database' },
    { name: 'Git', desc: 'Version Control' },
    { name: 'GitHub', desc: 'Platform' },
    { name: 'Figma', desc: 'Design' },
    { name: 'Wix Studio', desc: 'Platform' },
  ];
  //data for the services section
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description:
        'Stunning, responsive websites that captivate your audience and drive conversions',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    },
    {
      icon: Code2,
      title: 'Web Application Development',
      description:
        'Scalable, high-performance web applications built with modern technologies',
      features: ['Custom Solutions', 'API Integration', 'Cloud Ready'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Intuitive interfaces that provide exceptional user experiences',
      features: ['User Research', 'Wireframing', 'Prototyping'],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description:
        'Complete e-commerce platforms with secure payment integration',
      features: ['Payment Gateways', 'Inventory Management', 'Analytics'],
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      description:
        'Ongoing support and maintenance to keep your site running smoothly',
      features: ['24/7 Monitoring', 'Security Updates', 'Performance Checks'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your website and improve user experience',
      features: ['Core Web Vitals', 'CDN Setup', 'Caching Strategy'],
    },
    {
      icon: Search,
      title: 'SEO & Digital Presence',
      description:
        'Boost your online visibility and reach your target audience',
      features: ['On-Page SEO', 'Analytics Setup', 'Content Strategy'],
    },
    {
      icon: Boxes,
      title: 'Custom Software Solutions',
      description:
        'Tailored software solutions designed for your unique business needs',
      features: [
        'System Integration',
        'Workflow Automation',
        'Scalable Architecture',
      ],
    },
  ];
  //data for the testimonials section
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote:
        'VelaForge transformed our vision into reality. Their attention to detail and technical expertise exceeded our expectations. The web application they built has become the backbone of our business operations.',
      name: 'Sarah Chen',
      role: 'CEO, TechStart Inc.',
      initials: 'SC',
      color: 'bg-gray-400',
      featured: false,
    },
    {
      id: 2,
      rating: 5,
      quote:
        'Working with VelaForge was an absolute pleasure. They delivered our e-commerce platform on time and within budget. The site is beautiful, fast, and our sales have increased by 150% since launch.',
      name: 'Michael Rodriguez',
      role: 'Founder, Luxe Fashion',
      initials: 'MR',
      color: 'bg-gray-500',
      featured: false,
    },
    {
      id: 3,
      rating: 5,
      quote:
        'The team at VelaForge is exceptional. They took the time to understand our needs and delivered a solution that perfectly fits our workflow. Their ongoing support has been invaluable.',
      name: 'Emily Watson',
      role: 'Marketing Director, HealthHub',
      initials: 'EW',
      color: 'bg-rose-400',
      featured: true,
    },
    {
      id: 4,
      rating: 5,
      quote:
        'VelaForge built our financial analytics platform with cutting-edge technology. The code is clean, well-documented, and scalable. They truly understand modern software development.',
      name: 'David Park',
      role: 'CTO, FinanceFlow',
      initials: 'DP',
      color: 'bg-slate-500',
      featured: false,
    },
    {
      id: 5,
      rating: 5,
      quote:
        'Our portfolio website is a work of art. VelaForge perfectly captured our brand identity and created an immersive experience that showcases our work beautifully. Highly recommend!',
      name: 'Lisa Thompson',
      role: 'Owner, Design Studio',
      initials: 'LT',
      color: 'bg-amber-500',
      featured: false,
    },
    {
      id: 6,
      rating: 5,
      quote:
        'Professional, responsive, and results-driven. VelaForge delivered exactly what we needed and more. Their expertise in modern web technologies is evident in every aspect of our site.',
      name: 'James Wilson',
      role: 'Managing Partner, TechCorp',
      initials: 'JW',
      color: 'bg-gray-500',
      featured: false,
    },
  ];
  return (
    <main className="select-none">
      <Header />
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative flex min-h-[calc(100vh-60px)] items-center overflow-hidden bg-[#eef2fb] dark:bg-[#111932]"
      >
        {/* subtle dot-grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(99,102,241,0.10) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT COLUMN */}
            <div className="flex flex-col items-start">
              {/* Status badge */}
              <div className="border-primary bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
                <span
                  className="bg-primary h-2 w-2 animate-pulse rounded-full"
                  aria-hidden="true"
                />
                Now accepting new projects
              </div>

              {/* Heading */}
              <h1
                id="hero-heading"
                className="mb-6 text-5xl leading-[1.08] font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white"
              >
                Forging Ideas Into{' '}
                <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>

              {/* Description */}
              <p className="mb-10 max-w-135 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                VelaForge Technologies specializes in transforming your vision
                into powerful digital solutions. From elegant websites to
                complex web applications, we craft experiences that drive
                results.
              </p>

              {/* CTA buttons */}
              <div className="mb-12 flex flex-wrap items-center gap-4">
                {/* FIXED BUTTON 1 */}
                <a
                  href="#contact"
                  className="bg-primary focus-visible:ring-primary dark:shadow-primary/50 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98] dark:shadow-lg"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* FIXED BUTTON 2 */}
                <a
                  href="#projects"
                  className="focus-visible:ring-primary text-primary border-primary hover:bg-primary inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-all duration-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.84Z" />
                  </svg>
                  View Projects
                </a>
              </div>

              {/* Divider */}
              <div className="mb-10 w-full max-w-135 border-t border-gray-200 dark:border-white/10" />

              {/* Stats */}
              <dl className="flex flex-wrap gap-x-10 gap-y-6">
                {[
                  { value: '10+', label: 'Projects Delivered' },
                  { value: '5+', label: 'Happy Clients' },
                  { value: '99%', label: 'Satisfaction Rate' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd>
                      <span className="block bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent">
                        {value}
                      </span>
                      <span className="mt-1 block text-sm text-gray-500 dark:text-gray-400">
                        {label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* RIGHT COLUMN */}
            <div className="relative mx-auto w-full max-w-155 overflow-hidden rounded-2xl border border-white/60 shadow-[0_20px_60px_rgba(99,102,241,0.18)] lg:mx-0 dark:border-white/10">
              <img
                src={DashboardImage}
                alt="Analytics dashboard showing web performance metrics"
                width={620}
                height={420}
                className="block h-auto w-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>
      <MileStones />
      <Features />
      <section
        id="services"
        aria-labelledby="services-heading"
        className="bg-white py-20 sm:py-24 lg:py-28 dark:bg-gray-950"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2
              id="services-heading"
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
            >
              What We Do
            </h2>
            <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              Comprehensive digital solutions tailored to transform your
              business and elevate your online presence
            </p>
          </div>

          {/* Grid */}
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map(({ icon: Icon, title, description, features }) => (
              <li
                key={title}
                className="group hover:bg-primary/10 hover:border-primary flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-2 hover:border hover:shadow-xl dark:border-white/10 dark:bg-gray-900"
              >
                {/* Icon */}
                <div className="bg-primary mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-md transition-all group-hover:scale-110">
                  <Icon
                    className="h-6 w-6 group-hover:scale-120"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                  {title}
                </h3>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {description}
                </p>

                {/* Feature list */}
                <ul
                  className="mt-auto space-y-1.5"
                  aria-label={`${title} features`}
                >
                  {features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                      <span
                        className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full"
                        aria-hidden="true"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="dark:bg-bg-dark bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2
              id="testimonials-heading"
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
            >
              What Our Clients Say
            </h2>
            <p className="text-lg leading-relaxed text-indigo-400 dark:text-indigo-300">
              Don't just take our word for it—hear from businesses we've helped
              transform
            </p>
          </div>

          {/* Grid */}
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((t) => (
              <li
                key={t.id}
                className={`relative flex flex-col rounded-2xl border p-6 transition-shadow duration-200 hover:shadow-md ${
                  t.featured
                    ? 'border-indigo-200 bg-indigo-50/60 shadow-sm dark:border-indigo-700/50 dark:bg-indigo-950/40'
                    : 'border-gray-100 bg-white shadow-sm dark:border-white/10 dark:bg-gray-900'
                }`}
              >
                {/* Decorative quote mark */}
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-5 select-none"
                >
                  <img
                    src={DoubleQuotes}
                    alt=""
                    className="h-10 w-10 opacity-20 dark:opacity-50"
                    style={{
                      filter:
                        'invert(29%) sepia(99%) saturate(7496%) hue-rotate(204deg) brightness(96%) contrast(101%)',
                    }}
                  />
                </span>

                {/* Stars */}
                <div
                  className="mb-4 flex items-center gap-0.5"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-amber-400"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${t.color} text-sm font-bold text-white`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      {t.name}
                    </p>
                    <p
                      className={`text-xs ${
                        t.featured
                          ? 'text-indigo-500 dark:text-indigo-400'
                          : 'text-gray-400 dark:text-gray-500'
                      }`}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="dark:bg-bg-dark bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-black md:text-4xl dark:text-white">
            Technologies We Work With
          </h2>
          <p className="mt-3 text-lg text-gray-700 dark:text-[#7F8DA2]">
            Leveraging cutting-edge technologies to build powerful, scalable
            solutions
          </p>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="group hover:border-primary flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-2 hover:shadow-lg dark:border dark:border-gray-600 dark:bg-[#1E293B]"
              >
                {/* Icon Placeholder */}
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-18 w-18 items-center justify-center rounded-xl">
                  <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-md font-bold text-white">
                    {tech.name[0]}
                  </div>
                </div>

                <h3 className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-md mt-10 text-gray-400 dark:text-[#7F8DA2]">
            And many more technologies tailored to your project needs
          </p>

          {/* Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {['AWS', 'Docker', 'Redis', 'GraphQL', 'REST API', 'CI/CD'].map(
              (item, i) => (
                <span
                  key={i}
                  className="rounded-full border border-gray-300 bg-white px-4 py-1 text-sm text-gray-600 dark:border-gray-600 dark:bg-[#1E293B] dark:text-white"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
