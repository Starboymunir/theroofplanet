import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowRight, Shield, Star, ChevronRight } from 'lucide-react';

const services = [
  { name: 'Residential Roofing', href: '/services#residential' },
  { name: 'Commercial Roofing', href: '/services#commercial' },
  { name: 'Storm Damage Repair', href: '/services#storm' },
  { name: 'Insurance Claims', href: '/services#insurance' },
  { name: 'Siding & Gutters', href: '/services#siding' },
  { name: 'Roof Inspections', href: '/services#inspections' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Financing', href: '/financing' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1628] text-white overflow-hidden">
      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── CTA Banner ── */}
      <div className="relative">
        <div className="w-[92%] xl:w-[88%] 2xl:w-[82%] mx-auto py-16 sm:py-20 text-center">
          {/* Decorative stars */}
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#7c3aed] text-[#7c3aed]" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Ready to{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#c4b5fd] to-[#7c3aed] bg-clip-text text-transparent">
              Transform Your Roof?
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
            Get a free, no-obligation quote from Houston&apos;s most trusted roofing professionals.
            Serving the Greater Houston area since 2009.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#7c3aed]/20 hover:shadow-[#7c3aed]/40 hover:scale-[1.03] transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+18323706314"
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-[#7c3aed]/60 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/5 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent" />
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="relative w-[92%] xl:w-[88%] 2xl:w-[82%] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-5 group">
              <Image
                src="/roofplanet-full_horizontal_logo-pixel.webp"
                alt="RoofPlanet"
                width={160}
                height={45}
                className="h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Houston&apos;s trusted roofing experts since 2009. Superior craftsmanship, honest pricing, and results that last a lifetime.
            </p>
            {/* Contact icons row */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+18323706314"
                aria-label="Call us"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7c3aed]/20 hover:border-[#7c3aed]/40 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-[#7c3aed]" />
              </a>
              <a
                href="mailto:info@theroofplanet.com"
                aria-label="Email us"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7c3aed]/20 hover:border-[#7c3aed]/40 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-[#7c3aed]" />
              </a>
              <a
                href="https://maps.google.com/?q=123+Main+St+Houston+TX+77001"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on map"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7c3aed]/20 hover:border-[#7c3aed]/40 transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-[#7c3aed]" />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Our Services</h3>
            <div className="w-10 h-0.5 bg-[#7c3aed] rounded-full mb-6" />
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-[#7c3aed] transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 text-[#7c3aed]/50 group-hover:text-[#7c3aed] group-hover:translate-x-0.5 transition-all duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Company</h3>
            <div className="w-10 h-0.5 bg-[#7c3aed] rounded-full mb-6" />
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-[#7c3aed] transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 text-[#7c3aed]/50 group-hover:text-[#7c3aed] group-hover:translate-x-0.5 transition-all duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Contact Info</h3>
            <div className="w-10 h-0.5 bg-[#7c3aed] rounded-full mb-6" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-9 h-9 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#7c3aed]" />
                </div>
                <span className="text-gray-400 leading-relaxed">
                  123 Main St<br />Houston, TX 77001
                </span>
              </li>
              <li>
                <a href="tel:+18323706314" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#7c3aed]/20 group-hover:border-[#7c3aed]/40 transition-all duration-300">
                    <Phone className="w-4 h-4 text-[#7c3aed]" />
                  </div>
                  <span className="text-gray-400 group-hover:text-[#7c3aed] transition-colors">
                    (832) 370-6314
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@theroofplanet.com" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#7c3aed]/20 group-hover:border-[#7c3aed]/40 transition-all duration-300">
                    <Mail className="w-4 h-4 text-[#7c3aed]" />
                  </div>
                  <span className="text-gray-400 group-hover:text-[#7c3aed] transition-colors">
                    info@theroofplanet.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-9 h-9 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#7c3aed]" />
                </div>
                <span className="text-gray-400 leading-relaxed">
                  Mon – Sat: 7AM – 7PM<br />
                  <span className="text-gray-500 text-sm">Sun: Emergency Only</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent" />

      {/* ── Bottom Bar ── */}
      <div className="relative w-[92%] xl:w-[88%] 2xl:w-[82%] mx-auto py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500">
            &copy; 2025 RoofPlanet. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-4 h-4 text-[#7c3aed]" />
            <span>Licensed &amp; Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
