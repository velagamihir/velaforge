'use client';
import { IconMenu2, IconMoon, IconSun, IconX } from '@tabler/icons-react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { cn } from './../lib/utils';
//logo imports
import Logo from '../assets/images/Logos/logo.avif';
import WhiteLettersLogo from '../assets/images/Logos/WhiteLettersLogo.avif';
// ─── Hardcoded nav items ───────────────────────────────────────────────────────
const NAV_ITEMS = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '#about' },
  { name: 'Services', link: '/industries' },
  { name: 'Pricing', link: '#pricing' },
  { name: 'Contact', link: '/contact' },
];

// ─── Theme Toggle ─────────────────────────────────────────────────────────────
const ThemeToggle = ({ className, dark, setDark }) => {
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const isDark = stored ? stored === 'dark' : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Toggle dark mode"
      className={cn(
        'relative flex h-8 w-8 items-center justify-center rounded-full',
        'bg-gray-100 text-gray-700 hover:bg-gray-200',
        'dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700',
        'transition-colors duration-200',
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <IconSun size={16} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <IconMoon size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

// ─── Internal primitives (not exported) ───────────────────────────────────────
const NavBody = ({ children, className, visible }) => (
  <motion.div
    animate={{
      backdropFilter: visible ? 'blur(10px)' : 'none',
      boxShadow: visible
        ? '0 0 24px rgba(34,42,53,0.06),0 1px 1px rgba(0,0,0,0.05),0 0 0 1px rgba(34,42,53,0.04),0 0 4px rgba(34,42,53,0.08),0 16px 68px rgba(47,48,55,0.05),0 1px 0 rgba(255,255,255,0.1) inset'
        : 'none',
      width: visible ? '40%' : '100%',
      y: visible ? 20 : 0,
    }}
    transition={{ type: 'spring', stiffness: 200, damping: 50 }}
    style={{ minWidth: '800px' }}
    className={cn(
      'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent',
      visible && 'bg-white/80 dark:bg-neutral-950/80',
      className
    )}
  >
    {children}
  </motion.div>
);

const NavLinks = ({ onItemClick }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2"
    >
      {NAV_ITEMS.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

const MobileNav = ({ children, className, visible }) => (
  <motion.div
    animate={{
      backdropFilter: visible ? 'blur(10px)' : 'none',
      boxShadow: visible
        ? '0 0 24px rgba(34,42,53,0.06),0 1px 1px rgba(0,0,0,0.05),0 0 0 1px rgba(34,42,53,0.04),0 0 4px rgba(34,42,53,0.08),0 16px 68px rgba(47,48,55,0.05),0 1px 0 rgba(255,255,255,0.1) inset'
        : 'none',
      width: visible ? '90%' : '100%',
      paddingRight: visible ? '12px' : '0px',
      paddingLeft: visible ? '12px' : '0px',
      borderRadius: visible ? '20px' : '2rem',
      y: visible ? 20 : 0,
    }}
    transition={{ type: 'spring', stiffness: 200, damping: 50 }}
    className={cn(
      'relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden',
      visible && 'bg-white/80 dark:bg-neutral-950/80',
      className
    )}
  >
    {children}
  </motion.div>
);

// ─── Main export — the only thing you need to import ─────────────────────────
export const AppNavbar = () => {
  const [dark, setDark] = useState(false);
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => setVisible(latest > 100));

  return (
    <motion.div ref={ref} className="fixed inset-x-0 top-0 z-40 w-full">
      {/* ── Desktop ── */}
      <NavBody visible={visible}>
        {/* Logo */}
        <a
          href="#"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
        >
          <img
            src={!dark ? Logo : WhiteLettersLogo}
            alt="logo"
            width={75}
            height={50}
          />
        </a>

        {/* Nav links */}
        <NavLinks />

        {/* Right actions */}
        <div className="relative z-20 flex items-center gap-2">
          <ThemeToggle dark={dark} setDark={setDark} />
        </div>
      </NavBody>

      {/* ── Mobile ── */}
      <MobileNav visible={visible}>
        <div className="flex w-full flex-row items-center justify-between px-2">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img
              src={!dark ? Logo : WhiteLettersLogo}
              alt="logo"
              width={100}
              height={50}
            />
            <span className="font-medium text-black dark:text-white"></span>
          </a>

          {/* Right: theme toggle + hamburger */}
          <div className="flex items-center gap-2">
            <ThemeToggle dark={dark} setDark={setDark} />
            {mobileOpen ? (
              <IconX
                className="cursor-pointer text-black dark:text-white"
                onClick={() => setMobileOpen(false)}
              />
            ) : (
              <IconMenu2
                className="cursor-pointer text-black dark:text-white"
                onClick={() => setMobileOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start gap-4 rounded-2xl bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_16px_68px_rgba(47,48,55,0.05)] dark:bg-neutral-950"
            >
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-sm font-medium text-neutral-700 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </MobileNav>
    </motion.div>
  );
};

export default AppNavbar;
