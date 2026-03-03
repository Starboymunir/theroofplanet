"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Shield, Star, Clock } from "lucide-react";

export default function EstimatePage() {
  return (
    <main className="bg-white">
      {/* ── Hero Section ── */}
      <section className="relative pt-32 lg:pt-52 pb-16 bg-gradient-to-br from-[#0a1628] via-[#131f36] to-[#0a1628] overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#a78bfa]/8 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto w-[92%] xl:w-[88%] 2xl:w-[82%] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#a78bfa] font-bold text-sm uppercase tracking-widest mb-4">
              Instant Roof Estimate
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get Your{" "}
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
                Free Estimate
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Use our instant estimator to get a quick roof quote — no phone call needed.
              Just enter your address and get your estimate in minutes.
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm"
          >
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#7c3aed]" /> No Obligation
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#7c3aed]" /> Results in Minutes
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#7c3aed]" /> 100% Free
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Estimator Iframe Section ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto w-[92%] xl:w-[88%] 2xl:w-[82%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="w-full aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/10]">
              <iframe
                src="https://app.roofr.com/instant-estimator/0df6df83-26e0-4818-a69a-5e5b79cd6952/RoofPlanet"
                className="w-full h-full border-0"
                title="RoofPlanet Instant Roof Estimator"
                allow="geolocation"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Still Have Questions? ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-[92%] xl:w-[88%] 2xl:w-[82%] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Prefer to Talk to a{" "}
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
                Real Person?
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
              Our team is standing by to answer your questions and schedule a free on-site inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a
                href="tel:+18323706314"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] hover:from-[#a78bfa] hover:to-[#7c3aed] text-white font-bold px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg shadow-lg shadow-[#7c3aed]/25 hover:shadow-[#7c3aed]/40 transition-all duration-300 hover:scale-[1.03]"
              >
                <Phone className="w-5 h-5" />
                (832) 370-6314
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white font-bold px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-[1.03]"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
