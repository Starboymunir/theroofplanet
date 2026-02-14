'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  CheckCircle2,
  Home,
  Building2,
  CloudLightning,
  FileCheck,
} from 'lucide-react';

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const heroSlides = [
  {
    image:
      'https://images.pexels.com/photos/8134846/pexels-photo-8134846.jpeg?auto=compress&cs=tinysrgb&w=1920',
    badge: "Houston's #1 Rated",
    title: 'Premium Roofing',
    highlight: 'Solutions',
    description:
      'Expert craftsmanship, honest pricing, and results that stand the test of time. Serving Houston since 2009.',
  },
  {
    image:
      'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1920',
    badge: '98% Claim Approval',
    title: 'Storm Damage',
    highlight: 'Experts',
    description:
      "Don't let storm damage wait. We handle the insurance process so you can focus on what matters.",
  },
  {
    image:
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920',
    badge: '25-Year Warranty',
    title: 'Built to Last',
    highlight: 'Quality',
    description:
      'Premium materials, certified installation teams, and warranties that give you peace of mind.',
  },
  {
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920',
    badge: 'Free Inspections',
    title: 'Protect Your',
    highlight: 'Investment',
    description:
      "Your home is your biggest investment. Trust Houston's most experienced roofing team to protect it.",
  },
];

const rotatingWords = ['Excellence', 'Durability', 'Protection', 'Trust'];

const statsData = [
  { label: 'Years Experience', value: 15, suffix: '+', icon: Clock },
  { label: 'Projects Completed', value: 2500, suffix: '+', icon: Home },
  { label: 'Client Satisfaction', value: 98, suffix: '%', icon: Star },
  { label: 'Emergency Response', value: 24, suffix: '/7', icon: Shield },
];

const servicesData = [
  {
    title: 'Residential Roofing',
    desc: 'Complete roof installation, replacement, and repair for homes of all sizes.',
    image:
      'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Home,
  },
  {
    title: 'Commercial Roofing',
    desc: 'Industrial-grade roofing solutions for businesses and commercial properties.',
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Building2,
  },
  {
    title: 'Storm Damage Repair',
    desc: 'Fast response for hail, wind, and storm damage with insurance claim assistance.',
    image:
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: CloudLightning,
  },
  {
    title: 'Insurance Claims',
    desc: 'Full-service insurance claim management with a 98% approval rate.',
    image:
      'https://images.pexels.com/photos/8134846/pexels-photo-8134846.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: FileCheck,
  },
];

const features = [
  { title: 'Licensed & Insured', desc: 'Full coverage for your peace of mind' },
  { title: 'Premium Materials', desc: 'Only top-tier products from trusted brands' },
  { title: '25-Year Warranty', desc: 'Industry-leading warranty coverage' },
  { title: 'Free Inspections', desc: 'No-obligation roof assessments' },
  { title: 'Financing Available', desc: 'Flexible payment plans for every budget' },
  { title: 'Local Experts', desc: 'Born and raised in Houston, TX' },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, Sugar Land',
    text: 'RoofPlanet transformed our home. The team was professional, punctual, and the quality exceeded our expectations. Our new roof looks absolutely stunning!',
    rating: 5,
    initials: 'SM',
  },
  {
    name: 'David Chen',
    role: 'Property Manager, Katy',
    text: "We've used RoofPlanet for multiple commercial properties. Their attention to detail and project management is unmatched. Highly recommended for any commercial roofing needs.",
    rating: 5,
    initials: 'DC',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Homeowner, The Woodlands',
    text: 'After the hailstorm, RoofPlanet handled everything — from inspection to insurance claim to installation. They made a stressful situation completely manageable.',
    rating: 5,
    initials: 'MR',
  },
  {
    name: 'James Thompson',
    role: 'Business Owner, Spring',
    text: 'Outstanding service from start to finish. The crew was respectful of our property and delivered exceptional results. The financing options made it easy!',
    rating: 5,
    initials: 'JT',
  },
];

const serviceAreas = [
  'Houston', 'Katy', 'Sugar Land', 'The Woodlands', 'Spring', 'Humble',
  'Pearland', 'League City', 'Cypress', 'Tomball', 'Missouri City', 'Richmond',
];

const galleryProjects = [
  {
    src: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Residential Re-Roofing',
    span: 'md:col-span-2 md:row-span-2',
    h: 'h-64 md:h-full',
  },
  {
    src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Modern Home Roof',
    span: '',
    h: 'h-64',
  },
  {
    src: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Luxury Shingle Install',
    span: '',
    h: 'h-64',
  },
  {
    src: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Storm Damage Repair',
    span: '',
    h: 'h-64',
  },
  {
    src: 'https://images.pexels.com/photos/1914833/pexels-photo-1914833.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Commercial Flat Roof',
    span: 'md:col-span-2',
    h: 'h-64',
  },
];

/* ═══════════════════════════════════════════
   COUNTER HOOK
   ═══════════════════════════════════════════ */

function useCounter(target: number, duration = 2200) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) {
        setCount(target);
        clearInterval(timer);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

/* ── StatCard — separate component so hooks are valid ── */
function StatCard({ stat, index }: { stat: (typeof statsData)[0]; index: number }) {
  const { count, ref } = useCounter(stat.value, 2500);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="text-center group"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 mb-4 group-hover:bg-[#7c3aed]/20 group-hover:border-[#7c3aed]/30 transition-all duration-300">
        <Icon className="w-6 h-6 text-[#7c3aed]" />
      </div>
      <div className="counter-number">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="text-gray-400 text-sm mt-2 font-medium tracking-wide">{stat.label}</p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideProgress, setSlideProgress] = useState(0);
  const SLIDE_DURATION = 6000;
  const [wordIndex, setWordIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setSlideProgress(0);
  }, []);

  /* hero auto-play */
  useEffect(() => {
    const tick = 50;
    const inc = 100 / (SLIDE_DURATION / tick);
    const id = setInterval(() => {
      setSlideProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + inc;
      });
    }, tick);
    return () => clearInterval(id);
  }, [nextSlide, SLIDE_DURATION]);

  /* rotating words */
  useEffect(() => {
    const id = setInterval(() => setWordIndex((p) => (p + 1) % rotatingWords.length), 3000);
    return () => clearInterval(id);
  }, []);

  /* testimonial auto-play */
  useEffect(() => {
    const id = setInterval(
      () => setCurrentTestimonial((p) => (p + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const goToSlide = (i: number) => {
    setCurrentSlide(i);
    setSlideProgress(0);
  };

  return (
    <main className="overflow-x-hidden">
      {/* ════════════════════════════════════════
          HERO CAROUSEL
          ════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Background slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a1628]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {/* Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-[#7c3aed]/20 border border-[#7c3aed]/30 backdrop-blur-sm rounded-full px-5 py-2 mb-6"
                >
                  <Star className="w-4 h-4 fill-[#a78bfa] text-[#a78bfa]" />
                  <span className="text-[#a78bfa] text-sm font-semibold tracking-wide">
                    {heroSlides[currentSlide].badge}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Headline */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${currentSlide}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] mb-6 text-white"
                >
                  {heroSlides[currentSlide].title}{' '}
                  <span className="bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
                    {heroSlides[currentSlide].highlight}
                  </span>
                </motion.h1>
              </AnimatePresence>

              {/* Rotating accent word */}
              <div className="h-10 mb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={wordIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg sm:text-xl text-[#a78bfa]/80 font-medium tracking-widest uppercase"
                  >
                    Delivering {rotatingWords[wordIndex]} Since 2009
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
              </AnimatePresence>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] hover:from-[#a78bfa] hover:to-[#7c3aed] text-roof-dark font-bold px-8 py-4 rounded-full text-lg shadow-2xl shadow-[#7c3aed]/30 hover:shadow-[#7c3aed]/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+18323706314"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#7c3aed]/60 text-white hover:text-[#a78bfa] font-bold px-8 py-4 rounded-full text-lg backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  (832) 370-6314
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide navigation */}
        <div className="absolute bottom-12 left-0 right-0 z-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`carousel-dot ${i === currentSlide ? 'active' : ''}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="text-white/40 text-sm font-medium tabular-nums">
                <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                <span>{String(heroSlides.length).padStart(2, '0')}</span>
              </div>
            </div>
            <div className="mt-4 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa]"
                style={{ width: `${slideProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-[#7c3aed] rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          COUNTING STATS
          ════════════════════════════════════════ */}
      <section className="relative bg-[#0a1628] py-16 sm:py-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7c3aed]/3 rounded-full blur-[100px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {statsData.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES
          ════════════════════════════════════════ */}
      <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0a1628 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#7c3aed] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a1628] mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Comprehensive roofing solutions backed by premium materials, expert craftsmanship, and
              unmatched warranties.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Link
                    href="/services"
                    className="group relative block h-[320px] sm:h-[360px] rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="mb-4 w-12 h-12 rounded-xl bg-[#7c3aed]/20 backdrop-blur-sm border border-[#7c3aed]/30 flex items-center justify-center group-hover:bg-[#7c3aed] group-hover:border-[#7c3aed] transition-all duration-300">
                        <Icon className="w-6 h-6 text-[#a78bfa] group-hover:text-roof-dark transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#a78bfa] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed max-w-md">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-[#a78bfa] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#7c3aed] hover:text-[#5b21b6] font-bold text-lg transition-colors group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY CHOOSE US
          ════════════════════════════════════════ */}
      <section className="relative bg-[#f8f6f0] py-24 sm:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Roofing experts at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-4 sm:right-8 bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-extrabold leading-none">15+</div>
                <div className="text-sm font-medium mt-1 opacity-90">
                  Years of<br />Excellence
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-[#7c3aed] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                Why Choose Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a1628] mb-6 leading-tight">
                Houston&apos;s Most{' '}
                <span className="bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] bg-clip-text text-transparent">
                  Trusted
                </span>{' '}
                Roofers
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                With over 15 years of experience and 2,500+ completed projects, we&apos;ve built our
                reputation on quality work, honest pricing, and exceptional customer service.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#7c3aed] mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#0a1628] text-sm">{feature.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#1a365d] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] group"
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS CAROUSEL
          ════════════════════════════════════════ */}
      <section className="relative bg-[#0a1628] py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c3aed]/5 rounded-full blur-[150px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#7c3aed] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              What Our{' '}
              <span className="bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#a78bfa] text-[#a78bfa]" />
                  ))}
                </div>

                <blockquote className="text-white/90 text-xl sm:text-2xl leading-relaxed mb-8 font-light italic">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#7c3aed]/20">
                    {testimonials[currentTestimonial].initials}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-[#7c3aed] text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`carousel-dot ${i === currentTestimonial ? 'active' : ''}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="carousel-btn absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-16"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
              }
              className="carousel-btn absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-16"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROJECT GALLERY
          ════════════════════════════════════════ */}
      <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#7c3aed] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a1628] mb-4">
              Recent{' '}
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Browse some of our recently completed roofing projects across the Greater Houston area.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryProjects.map((project, i) => (
              <motion.div
                key={project.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden ${project.span} ${project.h}`}
              >
                <Image
                  src={project.src}
                  alt={project.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white font-bold text-lg">{project.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICE AREAS
          ════════════════════════════════════════ */}
      <section className="relative bg-[#f8f6f0] py-24 sm:py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#7c3aed] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Coverage Area
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a1628] mb-4">
              Proudly Serving{' '}
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] bg-clip-text text-transparent">
                Greater Houston
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, i) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-6 py-3 bg-white hover:bg-gradient-to-r hover:from-[#7c3aed] hover:to-[#a78bfa] border border-[#0a1628]/10 hover:border-transparent rounded-full text-[#0a1628] hover:text-white font-medium transition-all duration-300 cursor-default shadow-sm"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FINAL CTA
          ════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Beautiful home with new roof"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a1628]/85 backdrop-blur-sm" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#a78bfa] text-[#a78bfa]" />
              ))}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
                Roofing Project?
              </span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Get a free, no-obligation estimate today. Join 2,500+ happy homeowners who trust
              RoofPlanet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] hover:from-[#a78bfa] hover:to-[#7c3aed] text-roof-dark font-bold px-10 py-5 rounded-full text-lg shadow-2xl shadow-[#7c3aed]/30 hover:shadow-[#7c3aed]/50 transition-all duration-300 hover:scale-[1.03]"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+18323706314"
                className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-[#7c3aed]/60 text-white font-bold px-10 py-5 rounded-full text-lg backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
