import { Award, Rocket, TrendingUp, Users } from 'lucide-react';
const features = [
  {
    title: 'Innovation First',
    desc: 'We stay ahead of the curve, using cutting-edge technologies to build future-proof solutions',
    icon: <Rocket />,
  },
  {
    title: 'Client-Centric',
    desc: 'Your success is our success. We work closely with you every step of the way',
    icon: <Users />,
  },
  {
    title: 'Quality Driven',
    desc: 'We take pride in delivering clean, maintainable code and pixel-perfect designs',
    icon: <Award />,
  },
  {
    title: 'Growth Focused',
    desc: 'We build scalable solutions that grow with your business needs',
    icon: <TrendingUp />,
  },
];

export default function Features() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-[#111932]">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-[#0d1117]"
          >
            {/* Icon */}
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-lg text-white shadow-sm">
              {f.icon}
            </div>

            {/* Title */}
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              {f.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
