//component imports
import AppNavbar from '../Components/Header';
import Features from '../Components/HomePage/Features';
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
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';
import Footer from '../Components/Footer';
import OurStory from '../Components/HomePage/MileStones';

const Home = () => {
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

  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote:
        'VelaForge transformed our vision into reality. Their attention to detail and technical expertise exceeded our expectations. The web application they built has become the backbone of our business operations.',
      name: 'Sarah Chen',
      role: 'CEO, TechStart Inc.',
      initials: 'SC',
      color: 'bg-gray-700',
      featured: false,
    },
  ];

  return (
    <main className="dark:bg-surface select-none">
      <AppNavbar />

      {/* ── HERO ── */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative flex min-h-[calc(100vh-60px)] items-center overflow-hidden bg-[#eef2fb] dark:bg-[#111932]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(99,102,241,0.10) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT COLUMN */}
            <div className="flex flex-col items-start">
              <div className="border-primary bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
                <span
                  className="bg-accent-dark h-2 w-2 animate-pulse rounded-full"
                  aria-hidden="true"
                />
                Now accepting new projects
              </div>

              <h1
                id="hero-heading"
                className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.08] dark:text-white"
              >
                Forging Ideas Into{' '}
                <span className="from-accent-dark to-primary bg-linear-to-r bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>

              <p className="mb-10 max-w-xl text-base leading-relaxed text-black sm:text-lg dark:text-white">
                VelaForge Technologies specializes in transforming your vision
                into powerful digital solutions. From elegant websites to
                complex web applications, we craft experiences that drive
                results.
              </p>

              {/* CTA buttons */}
              <div className="mb-12 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="bg-accent dark:shadow-accent-dark/50 hover:bg-accent-dark inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98] dark:shadow-lg"
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
              </div>

              <div className="mb-10 w-full max-w-xl border-t border-gray-200 dark:border-white/10" />
              {/* Stats */}
              <dl className="flex flex-wrap gap-x-8 gap-y-6">
                {[
                  { value: '10+', label: 'Projects Delivered' },
                  { value: '5+', label: 'Happy Clients' },
                  { value: '99%', label: 'Satisfaction Rate' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd>
                      <span className="bg-primary block bg-clip-text text-3xl font-extrabold text-transparent">
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

            {/* RIGHT COLUMN — hidden on small, shown on lg */}
            <div className="relative mx-auto hidden w-full max-w-xl overflow-hidden rounded-2xl border border-white/60 shadow-[0_20px_60px_rgba(99,102,241,0.18)] lg:block dark:border-white/10">
              <img
                src={DashboardImage}
                alt="Analytics dashboard showing web performance metrics"
                width={700}
                height={450}
                className="block h-auto w-full"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <OurStory />
      <Features />

      {/* ── SERVICES ── */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="rounded-4xl bg-white py-16 sm:py-20 lg:py-28 dark:bg-gray-950"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="services-heading"
              className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
            >
              What We Do
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg dark:text-gray-400">
              Comprehensive digital solutions tailored to transform your
              business and elevate your online presence
            </p>
          </div>

          {/* ✅ 1 col mobile → 2 col sm → 4 col lg */}
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map(({ icon: Icon, title, description, features }) => (
              <li
                key={title}
                className="group hover:bg-primary/10 hover:border-primary flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-2 hover:border hover:shadow-xl dark:border-white/10 dark:bg-gray-900"
              >
                <div className="bg-primary mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-md transition-all group-hover:scale-110">
                  <Icon
                    className="h-6 w-6 group-hover:scale-120"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                </div>
                <div className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                  {title}
                </div>
                <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {description}
                </p>
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

      {/* ── TESTIMONIALS ── */}
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="dark:bg-bg-dark bg-white py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="testimonials-heading"
              className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
            >
              What Our Clients Say
            </h2>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-gray-300">
              Don't just take our word for it—hear from businesses we've helped
              transform
            </p>
          </div>
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

                <div
                  className="mb-4 flex items-center gap-0.5"
                  role="img"
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

                <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  "{t.quote}"
                </blockquote>

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
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-gray-600 dark:text-gray-400'
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

      {/* ── TECH STACK ── */}
      <section className="dark:bg-bg-dark bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-black md:text-4xl dark:text-white">
            Technologies We Work With
          </h2>
          <p className="mt-3 text-base text-gray-700 sm:text-lg dark:text-[#7F8DA2]">
            Leveraging cutting-edge technologies to build powerful, scalable
            solutions
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="group hover:border-primary flex flex-col items-center rounded-xl border border-gray-200 bg-white p-4 text-center transition duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-6 dark:border dark:border-gray-600 dark:bg-[#1E293B]"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-14 w-14 items-center justify-center rounded-xl sm:h-18 sm:w-18">
                  <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-md font-bold text-white sm:h-9 sm:w-9">
                    {tech.name[0]}
                  </div>
                </div>
                <div className="mt-3 text-xs font-semibold text-gray-900 sm:mt-4 sm:text-sm dark:text-white">
                  {tech.name}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-gray-600 sm:text-base dark:text-[#7F8DA2]">
            And many more technologies tailored to your project needs
          </p>

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

      {/* ── CTA BANNER ── */}
      <section className="dark:bg-bg-dark relative flex w-full items-center justify-center overflow-hidden px-3 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600" />
        <div
          className="absolute inset-0 rounded-3xl opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative z-10 w-full max-w-4xl px-2 text-center text-white sm:px-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs backdrop-blur-md sm:mb-6 sm:px-4 sm:text-sm">
            <Sparkles size={16} />
            <span>Lets Build Together</span>
          </div>

          <h1 className="mb-4 text-2xl leading-tight font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Ready to Build Something Amazing?
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-xs text-white/80 sm:mb-8 sm:text-sm md:text-base">
            Transform your ideas into reality with VelaForge Technologies. Let's
            discuss your project and create a digital solution that exceeds your
            expectations.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-2 sm:mb-10 sm:gap-3 md:gap-4 lg:flex-row">
            <button className="w-full rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 sm:w-auto sm:px-6 sm:py-3 md:text-base">
              Contact Us Now →
            </button>
            <button className="w-full rounded-lg border border-white/40 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3 md:text-base">
              Schedule a Call
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3 sm:gap-6 lg:gap-8">
            <div>
              <div className="text-lg font-semibold sm:text-2xl">24/7</div>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                Support Available
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold sm:text-2xl">100%</div>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                Client Satisfaction
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold sm:text-2xl">Fast</div>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                Delivery Times
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
export default Home;
