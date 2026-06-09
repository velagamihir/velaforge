import { useCallback, useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
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
    const stored = localStorage.getItem("vela-theme");
    if (stored) {
      setIsDark(stored === "dark");
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Apply theme to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("vela-theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* Skip-to-content link for keyboard / screen-reader users */}
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999
          rounded-md px-4 py-2 text-sm font-semibold
          bg-indigo-600 text-white
          outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600
        "
      >
        Skip to main content
      </a>

      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${
            isDark
              ? scrolled
                ? "bg-[#0d1117]/95 shadow-[0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md"
                : "bg-[#0d1117]"
              : scrolled
                ? "bg-white/95 shadow-[0_1px_0_0_rgba(0,0,0,0.08)] backdrop-blur-md"
                : "bg-white border-b border-gray-100"
          }
        `}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-15 items-center justify-between gap-6">
            {/* ── Logo ─────────────────────────────────────────── */}
            <a
              href="/"
              className="
                flex shrink-0 items-center gap-2.5
                rounded-md
                outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                focus-visible:ring-offset-transparent
              "
              aria-label="VelaForge – go to homepage"
            >
              {/* Logo mark */}
              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-lg bg-indigo-600 text-white
                  text-[13px] font-bold leading-none select-none
                "
                aria-hidden="true"
              >
                V
              </span>

              {/* Brand name */}
              <span
                className={`
                  text-[17px] font-semibold tracking-[-0.01em]
                  transition-colors duration-200
                  ${isDark ? "text-indigo-400" : "text-indigo-600"}
                `}
              >
                VelaForge
              </span>
            </a>

            {/* ── Desktop nav ──────────────────────────────────── */}
            <nav
              aria-label="Primary navigation"
              className="hidden md:flex md:items-center md:gap-1"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`
                    relative px-3.5 py-1.5
                    text-sm font-medium tracking-wide
                    rounded-md
                    transition-colors duration-150
                    outline-none
                    focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                    focus-visible:ring-offset-transparent
                    ${
                      isDark
                        ? "text-gray-300 hover:text-white hover:bg-white/6"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    }
                  `}
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
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
                aria-pressed={isDark}
                className={`
                  flex h-9 w-9 items-center justify-center
                  rounded-md
                  transition-colors duration-150
                  outline-none
                  focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                  focus-visible:ring-offset-transparent
                  ${
                    isDark
                      ? "text-gray-400 hover:text-white hover:bg-white/6"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  }
                `}
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
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className={`
                  flex h-9 w-9 items-center justify-center
                  rounded-md md:hidden
                  transition-colors duration-150
                  outline-none
                  focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                  focus-visible:ring-offset-transparent
                  ${
                    isDark
                      ? "text-gray-400 hover:text-white hover:bg-white/6"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  }
                `}
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
          hidden={!menuOpen}
          className={`
            md:hidden
            border-t
            transition-all duration-200 ease-in-out
            ${
              isDark
                ? "bg-[#0d1117] border-white/6"
                : "bg-white border-gray-100"
            }
            ${menuOpen ? "block" : "hidden"}
          `}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-0.5"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className={`
                  block px-3 py-2.5
                  text-sm font-medium rounded-md
                  transition-colors duration-150
                  outline-none
                  focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset
                  ${
                    isDark
                      ? "text-gray-300 hover:text-white hover:bg-white/6"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }
                `}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
