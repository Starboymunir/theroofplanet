"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Heart,
  Target,
  Eye,
  Clock,
  Phone,
  MapPin,
  Zap,
} from "lucide-react";

/* ───────────────────────── data ───────────────────────── */

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2,500+", label: "Roofs Completed" },
  { value: "100%", label: "Satisfaction Guarantee" },
  { value: "24/7", label: "Emergency Service" },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "Honest pricing and transparent communication on every single project — no hidden fees, no surprises.",
  },
  {
    icon: Star,
    title: "Quality",
    desc: "Premium materials paired with expert craftsmanship ensure your roof stands strong for decades.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    desc: "Your satisfaction is our top priority. We listen, adapt, and deliver beyond expectations.",
  },
  {
    icon: CheckCircle,
    title: "Safety",
    desc: "Industry-leading safety protocols protect our crew and your property on every job site.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "We stay ahead with the latest roofing technologies and energy-efficient solutions.",
  },
  {
    icon: Clock,
    title: "Reliability",
    desc: "On time, every time. We respect your schedule and keep our promises without exception.",
  },
];

const milestones = [
  {
    year: "2009",
    title: "Founded in Houston, TX",
    desc: "RoofPlanet was born out of a simple idea — deliver honest, high-quality roofing to Houston homeowners.",
  },
  {
    year: "2012",
    title: "500 Projects Completed",
    desc: "In just three years we reached our first major milestone, earning the trust of hundreds of families.",
  },
  {
    year: "2015",
    title: "Full Exterior Services",
    desc: "We expanded beyond roofing into siding, gutters, and full exterior remodeling.",
  },
  {
    year: "2018",
    title: "Top Houston Roofer — HomeAdvisor",
    desc: "Recognized as one of Houston's best roofing contractors by HomeAdvisor and Angi.",
  },
  {
    year: "2021",
    title: "2,000+ Roofs Milestone",
    desc: "A testament to the relationships and reputation we've built across the Greater Houston area.",
  },
  {
    year: "2024",
    title: "Continuing Excellence",
    desc: "Still family-owned, still community-driven — continuing to raise the bar for Houston roofing.",
  },
];

/* ───────────────────────── helpers ───────────────────────── */

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ═══════════════════════ PAGE ═══════════════════════ */

export default function AboutPage() {
  /* inView refs for staggered sections */
  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-60px" });

  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ─────────── 1. HERO ─────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* bg image */}
        <Image
          src="https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Professional roofer working with nail gun"
          fill
          priority
          className="object-cover"
        />
        <div className="hero-overlay" />

        {/* content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6"
          >
            <Link href="/" className="hover:text-roof-amber transition">
              Home
            </Link>
            <span className="text-roof-amber">&gt;</span>
            <span className="text-white font-medium">About</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            Our <span className="gradient-text">Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6"
          >
            Since 2009, RoofPlanet has protected Houston homes with
            uncompromising craftsmanship, transparency, and heart.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="divider-gold mx-auto"
          />
        </div>
      </section>

      {/* ─────────── 2. MISSION / ABOUT ─────────── */}
      <Section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* left: image with decorative gold border accent */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/8134846/pexels-photo-8134846.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Beautiful modern house with new roof"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* decorative gold border frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-4 border-roof-amber/40 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-roof-amber rounded-tl-2xl" />
            </motion.div>

            {/* right: text + stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="text-roof-amber font-bold text-sm uppercase tracking-widest">
                About RoofPlanet
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-roof-navy mt-3 mb-6 leading-tight">
                Built on Trust,
                <br />
                Driven by <span className="gradient-text">Excellence</span>
              </h2>

              <p className="text-roof-gray leading-relaxed mb-4">
                Founded in 2009, RoofPlanet started as a family-owned roofing
                company with a single crew and a relentless commitment to doing
                things right. Based in Houston, TX, we&apos;ve grown into one of the
                region&apos;s most trusted exterior contractors — but we&apos;ve never lost
                the personal touch that got us here.
              </p>
              <p className="text-roof-gray leading-relaxed mb-8">
                Every project begins with a free, honest inspection and ends with a
                handshake and a warranty you can count on. We use only premium
                materials from top manufacturers and back every install with our
                100% satisfaction guarantee.
              </p>

              {/* 2×2 stat boxes */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-roof-warm rounded-xl p-5 text-center border border-gray-100 shadow-sm"
                  >
                    <div className="stat-number text-3xl md:text-4xl font-extrabold text-roof-amber">
                      {s.value}
                    </div>
                    <div className="text-sm text-roof-gray mt-1 font-medium">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ─────────── 3. OUR VALUES ─────────── */}
      <Section className="py-20 md:py-28 bg-roof-dark relative overflow-hidden">
        <div className="pattern-dots" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* heading */}
          <div className="text-center mb-14">
            <span className="text-roof-amber font-bold text-sm uppercase tracking-widest">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3">
              What Sets Us <span className="gradient-text">Apart</span>
            </h2>
          </div>

          {/* 3×2 grid */}
          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-dark rounded-2xl p-8 card-hover text-center"
              >
                {/* icon circle */}
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-roof-amber to-yellow-500 flex items-center justify-center shadow-lg">
                  <v.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────── 4. TIMELINE ─────────── */}
      <Section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* heading */}
          <div className="text-center mb-16">
            <span className="text-roof-amber font-bold text-sm uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-roof-navy mt-3">
              Company <span className="gradient-text">Milestones</span>
            </h2>
          </div>

          {/* vertical timeline */}
          <div ref={timelineRef} className="relative">
            {/* gold vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-roof-amber via-roof-amber/60 to-roof-amber/20 transform md:-translate-x-1/2" />

            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex items-start mb-12 last:mb-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* gold dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-roof-amber border-4 border-white shadow-md transform -translate-x-1/2 mt-2 z-10" />

                  {/* spacer for mobile */}
                  <div className="w-14 shrink-0 md:hidden" />

                  {/* card */}
                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <span className="inline-block text-roof-amber font-extrabold text-lg mb-1">
                      {m.year}
                    </span>
                    <div className="bg-roof-warm rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
                      <h3 className="text-lg font-bold text-roof-navy mb-2">
                        {m.title}
                      </h3>
                      <p className="text-roof-gray text-sm leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  {/* opposite spacer (desktop) */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ─────────── 5. CTA ─────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* bg image */}
        <Image
          src="https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Roofing work in progress"
          fill
          className="object-cover"
        />
        <div className="hero-overlay" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Ready to Work With Houston&apos;s{" "}
            <span className="gradient-text">Best?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Get a free, no-obligation roof inspection and transparent quote from
            the team that treats every home like their own.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
              Get My Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+17135551234"
              className="btn-outline inline-flex items-center gap-2 text-lg"
            >
              <Phone className="w-5 h-5" /> (713) 555-1234
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
