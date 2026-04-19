'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/financing', label: 'Financing' },
  { href: '/contact', label: 'Contact' },
];

const mobileMenuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  exit: { opacity: 0, x: 40, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 40);
  });

  // Fallback scroll listener for SSR / initial paint
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* ── Slim Top Accent Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-roof-dark/95 backdrop-blur-sm border-b border-white/5">
        <div className="w-[92%] xl:w-[88%] 2xl:w-[82%] mx-auto flex justify-between items-center h-9 text-xs tracking-wide">
          <div className="flex items-center gap-5">
            <a
              href="tel:+18323706314"
              className="flex items-center gap-1.5 text-[#a78bfa] hover:text-white transition-colors font-semibold"
            >
              <Phone className="w-3 h-3" />
              (832) 370-6314
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a
              href="mailto:info@theroofplanet.com"
              className="hidden sm:inline text-gray-300 hover:text-[#a78bfa] transition-colors"
            >
              info@theroofplanet.com
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-gray-400">
            <span>Proudly Serving Texas</span>
            <span>|</span>
            <span className="text-[#a78bfa]/80">Licensed &amp; Insured</span>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.nav
        className={`fixed top-9 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-roof-dark/90 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="w-[92%] xl:w-[88%] 2xl:w-[82%] mx-auto">
          {/* ── Desktop: Logo left, nav + CTA right ── */}
          <div className="hidden lg:flex items-center justify-between py-3">
            {/* Large Logo — left */}
            <Link href="/" className="group shrink-0">
              <Image
                src="/roofplanet-logo-5.png"
                alt="RoofPlanet"
                width={500}
                height={200}
                className="h-[140px] xl:h-[160px] w-auto object-contain group-hover:opacity-90 transition-opacity"
                priority
              />
            </Link>

            {/* Nav + CTA — right */}
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] group-hover:w-3/4 transition-all duration-300 ease-out rounded-full" />
                </Link>
              ))}
              <span className="w-px h-5 bg-white/20 mx-2" />
              <a
                href="tel:+18323706314"
                className="flex items-center gap-1.5 text-[#a78bfa] hover:text-white text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                (832) 370-6314
              </a>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] hover:from-[#a78bfa] hover:to-[#7c3aed] text-white font-bold text-sm py-2.5 px-6 rounded-full shadow-lg shadow-[#7c3aed]/25 hover:shadow-[#7c3aed]/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ml-2"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ── Mobile / Tablet: Logo left, hamburger right ── */}
          <div className="flex lg:hidden justify-between items-center h-[80px]">
            <Link href="/" className="group flex items-center" onClick={() => setIsOpen(false)}>
              <Image
                src="/roofplanet-logo-5.png"
                alt="RoofPlanet"
                width={250}
                height={90}
                className="h-[80px] w-auto object-contain group-hover:opacity-90 transition-opacity"
                priority
              />
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="/estimate"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white font-bold text-xs py-2 px-4 rounded-full shadow-lg shadow-[#7c3aed]/25"
              >
                Free Quote
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-white" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 text-white" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Full-Screen Overlay Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-roof-dark/98 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Close Button */}
            <motion.button
              className="absolute top-14 right-4 sm:right-6 z-10 w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>

            {/* Menu Content */}
            <motion.div
              className="relative flex flex-col justify-center items-center h-full px-8"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Nav Links */}
              {navLinks.map((link, i) => (
                <motion.div key={link.href} variants={mobileItemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-center text-3xl sm:text-4xl font-bold text-white/90 hover:text-[#a78bfa] py-4 transition-colors"
                  >
                    {link.label}
                    {i < navLinks.length - 1 && (
                      <span className="block w-12 h-px bg-white/10 mx-auto mt-4" />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA Buttons */}
              <motion.div variants={mobileItemVariants} className="mt-10 w-full max-w-xs space-y-4 px-4">
                <Link
                  href="/estimate"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-[#7c3aed]/30"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+18323706314"
                  className="flex items-center justify-center gap-2 w-full border-2 border-[#7c3aed]/50 text-[#a78bfa] hover:bg-[#7c3aed]/10 font-semibold text-lg py-4 rounded-full transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (832) 370-6314
                </a>
              </motion.div>

              {/* Bottom info */}
              <motion.p
                variants={mobileItemVariants}
                className="mt-8 text-gray-500 text-sm text-center"
              >
                Proudly Serving Texas &bull; Licensed &amp; Insured
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
