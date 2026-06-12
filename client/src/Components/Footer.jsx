//icon imports
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
//logo import
import Logo from "../assets/images/Logos/logo.avif";
import WhiteLettersLogo from "../assets/images/Logos/WhiteLettersLogo.avif";
import { NAV_ITEMS } from "../data/NAV_ITEMS.js";
export default function Footer() {
  //quick links
  return (
    <footer className="dark:bg-bg-dark border-t border-gray-200 bg-white pt-8 pb-4 font-sans sm:pt-12 sm:pb-6 dark:border-none">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="mb-8 grid grid-cols-1 gap-10 sm:mb-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 lg:pr-4">
            <div className="mb-4 flex items-center gap-2.5">
              <img
                src={Logo}
                alt="logo of the company in the footer"
                width="200" // Add this (use your actual pixel width)
                height="80" // Add this (use your actual pixel height)
                className="block h-16 w-auto sm:h-20 dark:hidden"
              />
              <img
                src={WhiteLettersLogo}
                alt="Logo of the company in white letters for better visibility in dark mode"
                width="200" // Add this
                height="80" // Add this
                className="hidden h-16 w-auto sm:h-20 dark:block"
              />
            </div>
            <p className="mb-5 text-xs leading-relaxed text-gray-500 sm:text-sm">
              Forging ideas into digital reality. We transform your vision into
              powerful digital solutions.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: <FaLinkedinIn size={16} />,
                  href: "https://www.linkedin.com/in/velaforge-technologies-6844b5415/",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 text-gray-700 transition-colors duration-200 hover:border-indigo-600 hover:text-indigo-600 dark:border-gray-500 dark:text-gray-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services Wrapper */}
          <div className="col-span-1 grid grid-cols-2 gap-6 sm:col-span-2 sm:grid-cols-3 sm:gap-0 lg:col-span-2 lg:grid-cols-2 lg:gap-12">
            {/* Quick Links */}
            <div>
              <p className="mb-4 text-xs font-bold tracking-wide text-gray-900 uppercase sm:text-sm dark:text-white">
                Quick Links
              </p>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {NAV_ITEMS.map((link) => (
                  <li key={link}>
                    <a
                      href={link.link}
                      className="text-xs text-gray-600 transition-colors duration-200 hover:text-indigo-600 sm:text-sm dark:text-gray-400 dark:hover:text-indigo-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="mb-4 text-xs font-bold tracking-wide text-gray-900 uppercase sm:text-sm dark:text-white">
                Services
              </p>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {[
                  "Website Development",
                  "Web Applications",
                  "UI/UX Design",
                  "E-Commerce",
                  "Maintenance",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-xs text-gray-600 transition-colors duration-200 hover:text-indigo-600 sm:text-sm dark:text-gray-400 dark:hover:text-indigo-400"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <p className="mb-4 text-xs font-bold tracking-wide text-gray-900 uppercase sm:text-sm dark:text-white">
              Contact Info
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MdEmail
                  size={18}
                  className="mt-0.5 shrink-0 text-indigo-600"
                />
                <div className="min-w-0 flex-1">
                  <p className="mb-0.5 text-xs text-gray-600 dark:text-gray-500">
                    Email
                  </p>
                  <a
                    href="mailto:velaforgetech@gmail.com"
                    className="text-xs font-medium break-all text-gray-900 transition-colors duration-200 hover:text-indigo-600 sm:text-sm dark:text-gray-300 dark:hover:text-indigo-400"
                    target="_blank"
                  >
                    velaforgetech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <MdPhone
                  size={18}
                  className="mt-0.5 shrink-0 text-indigo-600"
                />
                <div>
                  <p className="mb-0.5 text-xs text-gray-600 dark:text-gray-500">
                    Phone
                  </p>
                  <span className="text-xs font-medium text-gray-900 sm:text-sm dark:text-gray-300">
                    +91 73825 48937
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <MdLocationOn
                  size={18}
                  className="mt-0.5 shrink-0 text-indigo-600"
                />
                <div>
                  <p className="mb-0.5 text-xs text-gray-600 dark:text-gray-500">
                    Location
                  </p>
                  <span className="text-xs font-bold text-gray-900 sm:text-sm dark:text-gray-300">
                    Remote & Worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-200 pt-4 text-center sm:pt-6">
          <p className="text-xs text-gray-600 sm:text-sm">
            © 2026 VelaForge Technologies. All rights reserved.{" "}
            <span className="text-indigo-600">
              Crafted with passion and innovation.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
