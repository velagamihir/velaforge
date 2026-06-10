import { useCallback, useEffect, useRef, useState } from 'react';
//logo import
import Logo from '../assets/images/Logos/logo.avif';
import WhiteLettersLogo from '../assets/images/Logos/WhiteLettersLogo.avif';
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

// Sun icon for light mode
function SunIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

// Moon icon for dark mode
function MoonIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

// Hamburger / Close icon
function MenuIcon({ open, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Initialise theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('vela-theme');
    if (stored) {
      setIsDark(stored === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Apply theme to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('vela-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !menuButtonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <div className="w-full">
      <header
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
        className={`fixed inset-x-0 top-0 z-50 overflow-x-hidden transition-all duration-300 ease-in-out ${
          isDark
            ? scrolled
              ? 'bg-surface shadow-[0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md'
              : 'bg-[#0d1117]'
            : scrolled
              ? 'bg-white/95 shadow-[0_1px_0_0_rgba(0,0,0,0.08)] backdrop-blur-md'
              : 'border-b border-gray-100 bg-white'
        }`}
        role="banner"
      >
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between gap-2 sm:h-15 sm:gap-4 lg:gap-6">
            <a
              href="/"
              className="flex shrink-0 items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label="VelaForge - go to homepage"
            >
              {/* Logo mark */}
              <img
                src={isDark ? WhiteLettersLogo : Logo}
                alt="Company logo"
                width="150"
                height="56"
                className="h-8 w-auto max-w-30 sm:h-9 sm:max-w-37.5 lg:h-10 lg:max-w-none"
              />
            </a>
            {/* ── Desktop nav ──────────────────────────────────── */}
            <nav
              aria-label="Primary navigation"
              className="hidden md:flex md:items-center md:gap-0.5 lg:gap-1"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`relative rounded-md px-2.5 py-1.5 text-sm font-medium tracking-wide transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:px-3.5 ${
                    isDark
                      ? 'text-gray-300 hover:bg-white/6 hover:text-white'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* ── Right controls ───────────────────────────────── */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  isDark ? 'Switch to light mode' : 'Switch to dark mode'
                }
                aria-pressed={isDark}
                className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:h-9 sm:w-9 ${
                  isDark
                    ? 'text-gray-400 hover:bg-white/6 hover:text-white'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                } `}
              >
                {isDark ? (
                  <SunIcon className="h-4.5 w-4.5" />
                ) : (
                  <MoonIcon className="h-4.5 w-4.5" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                ref={menuButtonRef}
                type="button"
                onClick={toggleMenu}
                aria-label={
                  menuOpen ? 'Close navigation menu' : 'Open navigation menu'
                }
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:h-9 sm:w-9 md:hidden ${
                  isDark
                    ? 'text-gray-400 hover:bg-white/6 hover:text-white'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                } `}
              >
                <MenuIcon open={menuOpen} className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile menu ──────────────────────────────────────── */}
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          className={`w-full overflow-hidden border-t transition-all duration-300 ease-in-out md:hidden ${
            isDark ? 'border-white/6 bg-[#0d1117]' : 'border-gray-100 bg-white'
          } ${
            menuOpen
              ? 'max-h-96 opacity-100'
              : 'pointer-events-none max-h-0 opacity-0'
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col gap-0.5 px-3 py-3 sm:px-6"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className={`block rounded-md px-3 py-3 text-base font-medium transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset sm:text-sm ${
                  isDark
                    ? 'text-gray-300 hover:bg-white/6 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
