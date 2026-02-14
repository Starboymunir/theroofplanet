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
  Home,
  Building,
  CloudLightning,
  FileText,
  Paintbrush,
  Wrench,
  Phone,
  ChevronRight,
  Layers,
  Eye,
} from "lucide-react";

/* ──────────────────────────── animation helpers ──────────────────────────── */
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
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

function StaggerItem({ children, index = 0, className = "" }: { children: React.ReactNode; index?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────── data ──────────────────────────── */
const mainServices = [
  {
    id: "residential",
    title: "Residential Roofing",
    icon: Home,
    description:
      "Your home deserves the best protection. We deliver premium residential roofing solutions that combine lasting durability with stunning curb appeal — all backed by industry-leading warranties and meticulous craftsmanship.",
    image: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: [
      "New roof installation",
      "Roof replacement",
      "Roof repair",
      "Attic ventilation",
      "Skylight installation",
    ],
    imageLeft: true,
  },
  {
    id: "commercial",
    title: "Commercial Roofing",
    icon: Building,
    description:
      "From warehouses to office complexes, our commercial roofing team delivers large-scale solutions engineered for performance. We minimise downtime and maximise the lifespan of your investment.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: [
      "Flat roofing systems",
      "TPO membrane",
      "Built-up roofing",
      "Metal roofing",
      "Maintenance programs",
    ],
    imageLeft: false,
  },
  {
    id: "storm",
    title: "Storm Damage Repair",
    icon: CloudLightning,
    description:
      "When severe weather strikes, every minute counts. Our rapid-response team is available 24/7 to secure your property, prevent further damage, and restore your roof to perfect condition.",
    image: "https://images.pexels.com/photos/1914833/pexels-photo-1914833.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: [
      "Emergency tarping",
      "Wind damage repair",
      "Hail damage repair",
      "Fallen debris removal",
      "Insurance documentation",
    ],
    imageLeft: true,
  },
  {
    id: "insurance",
    title: "Insurance Claims Assistance",
    icon: FileText,
    description:
      "Navigating insurance claims can be overwhelming. We handle every step — from the initial damage assessment through claim negotiation — so you can focus on what matters most.",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: [
      "Free damage assessment",
      "Insurance claim filing",
      "Adjuster meeting coordination",
      "Full documentation",
      "Claim negotiation help",
    ],
    imageLeft: false,
  },
];

const additionalServices = [
  {
    title: "Siding & Gutters",
    icon: Layers,
    description:
      "Protect your home's exterior with premium siding installations and seamless gutter systems that channel water away from your foundation.",
  },
  {
    title: "Roof Inspections",
    icon: Eye,
    description:
      "Comprehensive 21-point inspections that catch small problems before they become expensive repairs. Detailed reports included.",
  },
  {
    title: "Exterior Painting",
    icon: Paintbrush,
    description:
      "Refresh and protect your property with professional-grade exterior painting that withstands the elements and elevates curb appeal.",
  },
];

const processSteps = [
  { num: 1, title: "Free Inspection", desc: "We visit your property, assess the roof, and identify every issue." },
  { num: 2, title: "Detailed Estimate", desc: "A transparent, line-by-line quote with materials and timeline." },
  { num: 3, title: "Material Selection", desc: "Choose from premium options with our expert guidance." },
  { num: 4, title: "Expert Installation", desc: "Our certified crew completes the work with precision." },
  { num: 5, title: "Final Walkthrough", desc: "Together we inspect every detail to ensure perfection." },
];

const warrantyItems = [
  { title: "25-Year Manufacturer Warranty", icon: Shield },
  { title: "10-Year Workmanship Warranty", icon: Star },
  { title: "Transferable Coverage", icon: ArrowRight },
  { title: "24/7 Emergency Support", icon: Phone },
];

/* ══════════════════════════════════════════════════════════════════════════ */
/*                              PAGE COMPONENT                              */
/* ══════════════════════════════════════════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <>
      {/* ────────────────────────── 1. HERO ────────────────────────── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/7788269/pexels-photo-7788269.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Professional roofing services"
          fill
          priority
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0 z-10" />
        <div className="pattern-dots absolute inset-0 z-10 opacity-30" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          {/* breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-roof-gold transition flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-roof-gold font-medium">Services</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Our <span className="gradient-text">Professional Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Comprehensive roofing and exterior solutions designed to protect your property,
            enhance its value, and give you lasting peace of mind.
          </p>
          <div className="divider-gold mx-auto" />
        </motion.div>
      </section>

      {/* ────────────────────── 2. MAIN SERVICES ────────────────────── */}
      {mainServices.map((svc, idx) => {
        const isImageLeft = svc.imageLeft;
        return (
          <Section
            key={svc.id}
            className={`py-20 md:py-28 ${idx % 2 === 0 ? "bg-white" : "bg-roof-cream"}`}
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* IMAGE */}
                <div className={`${!isImageLeft ? "lg:order-2" : ""}`}>
                  <StaggerItem index={0}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      {/* gold accent border */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-roof-amber/40 via-roof-gold/20 to-transparent rounded-2xl blur-sm -z-10" />
                      <div className="card-image-zoom rounded-2xl overflow-hidden border-2 border-roof-amber/20">
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          width={800}
                          height={600}
                          className="w-full h-[350px] md:h-[420px] object-cover"
                        />
                      </div>
                      {/* floating badge */}
                      <div className="absolute bottom-4 left-4 glass-dark px-4 py-2 rounded-full flex items-center gap-2 text-white text-sm font-semibold">
                        <svc.icon className="w-4 h-4 text-roof-gold" />
                        {svc.title}
                      </div>
                    </div>
                  </StaggerItem>
                </div>

                {/* CONTENT */}
                <div className={`${!isImageLeft ? "lg:order-1" : ""}`}>
                  <StaggerItem index={1}>
                    <div className="inline-flex items-center gap-2 bg-roof-amber/10 text-roof-amber font-semibold text-sm px-4 py-2 rounded-full mb-4">
                      <svc.icon className="w-4 h-4" /> Featured Service
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-roof-navy mb-4">
                      {svc.title}
                    </h2>
                    <p className="text-roof-gray leading-relaxed mb-6 text-lg">
                      {svc.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {svc.features.map((f, fi) => (
                        <motion.li
                          key={f}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + fi * 0.08 }}
                          className="flex items-center gap-3 text-roof-navy font-medium"
                        >
                          <CheckCircle className="w-5 h-5 text-roof-amber flex-shrink-0" />
                          {f}
                        </motion.li>
                      ))}
                    </ul>

                    <Link href="/contact" className="btn-primary">
                      Get a Free Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </StaggerItem>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* ────────────────── 3. ADDITIONAL SERVICES ────────────────── */}
      <Section className="py-20 md:py-28 bg-roof-navy relative overflow-hidden">
        <div className="pattern-dots absolute inset-0 opacity-20" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-roof-gold font-semibold text-sm uppercase tracking-wider">
              More Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
              Additional Services
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Beyond roofing, we offer a full suite of exterior services to keep your property in top shape.
            </p>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((svc, i) => (
              <StaggerItem key={svc.title} index={i} className="card-hover">
                <div className="glass-dark rounded-2xl p-8 h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-roof-amber to-roof-gold flex items-center justify-center mx-auto mb-6">
                    <svc.icon className="w-7 h-7 text-roof-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{svc.description}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </Section>

      {/* ────────────────────── 4. OUR PROCESS ────────────────────── */}
      <Section className="py-20 md:py-28 bg-roof-cream relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-roof-amber font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-roof-navy mt-2">
              Our Proven Process
            </h2>
            <p className="text-roof-gray mt-4 max-w-2xl mx-auto">
              From first call to final walkthrough — five simple steps to a perfect roof.
            </p>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          {/* horizontal timeline */}
          <div className="relative">
            {/* connecting line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-roof-amber/30 via-roof-amber to-roof-amber/30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
              {processSteps.map((step, i) => (
                <StaggerItem key={step.num} index={i} className="text-center relative">
                  {/* gold numbered circle */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-roof-amber to-roof-gold flex items-center justify-center mx-auto mb-5 shadow-lg relative z-10 border-4 border-roof-cream">
                    <span className="text-2xl font-extrabold text-roof-dark">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-roof-navy mb-2">{step.title}</h3>
                  <p className="text-roof-gray text-sm leading-relaxed">{step.desc}</p>
                </StaggerItem>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ────────────────────── 5. WARRANTY ────────────────────── */}
      <Section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-roof-amber via-roof-gold to-roof-amber p-[2px]">
            <div className="rounded-3xl bg-gradient-to-br from-roof-amber/95 to-roof-gold/90 px-8 py-14 md:px-14 text-center relative overflow-hidden">
              <div className="pattern-dots absolute inset-0 opacity-10" />
              <div className="relative z-10">
                <Shield className="w-14 h-14 text-roof-dark mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-extrabold text-roof-dark mb-3">
                  Industry-Leading Warranty Protection
                </h2>
                <p className="text-roof-dark/80 max-w-2xl mx-auto mb-10 text-lg">
                  We stand behind every project with comprehensive warranty coverage that gives you
                  total peace of mind for years to come.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {warrantyItems.map((item, i) => (
                    <StaggerItem key={item.title} index={i}>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                        <item.icon className="w-8 h-8 text-roof-dark mx-auto mb-3" />
                        <p className="font-bold text-roof-dark text-sm leading-snug">{item.title}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ────────────────────────── 6. CTA ────────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Get started with RoofPlanet"
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0 z-10" />
        <div className="pattern-dots absolute inset-0 z-10 opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation estimate. We&apos;ll inspect your property and provide a
            transparent quote within 24&nbsp;hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base">
              Schedule Free Inspection <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+18323706314"
              className="btn-outline text-base"
            >
              <Phone className="w-5 h-5" /> Call (832) 370-6314
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
