'use client';

import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, Mail, MapPin, Clock, Zap, Shield, Star,
  ChevronRight, ChevronDown, ChevronUp, ArrowRight, CheckCircle,
  Wrench, Building2, CloudLightning, FileCheck, PanelTop, SquareStack
} from 'lucide-react';

const serviceOptions = [
  { icon: Wrench, label: 'Roof Repair', desc: 'Fix leaks & damage' },
  { icon: Building2, label: 'Roof Replacement', desc: 'Full roof install' },
  { icon: CloudLightning, label: 'Storm Damage', desc: 'Emergency response' },
  { icon: FileCheck, label: 'Insurance Claim', desc: 'We handle it all' },
  { icon: PanelTop, label: 'Siding', desc: 'Exterior upgrades' },
  { icon: SquareStack, label: 'Windows & Gutters', desc: 'Complete solutions' },
];

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '(832) 370-6314', href: 'tel:+18323706314', accent: true },
  { icon: Mail, label: 'Email', value: 'info@theroofplanet.com', href: 'mailto:info@theroofplanet.com', accent: false },
  { icon: MapPin, label: 'Service Area', value: 'Greater Houston, TX & surrounding counties', href: '', accent: false },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri 8am–6pm · Sat 9am–1pm', href: '', accent: false },
];

const faqs = [
  {
    q: 'How long does a roof replacement take?',
    a: 'Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of your roof. We\'ll provide a specific timeline during your consultation.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes! We offer multiple financing options including 0% APR for qualified buyers, low-rate extended plans, and insurance claim assistance with zero out-of-pocket options.',
  },
  {
    q: 'Will you help with my insurance claim?',
    a: 'Absolutely. We handle all communication with your insurance company, from initial documentation to adjuster meetings. Most of our insurance claims are approved.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the entire Greater Houston metropolitan area, including The Woodlands, Katy, Sugar Land, Pearland, Spring, Cypress, League City, and surrounding communities.',
  },
  {
    q: 'Do you offer emergency services?',
    a: 'Yes, we provide 24/7 emergency response for storm damage and active leaks. Call us anytime at (832) 370-6314 for immediate assistance.',
  },
];

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '', message: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          service: selectedService,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Beautiful home exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-roof-amber">Contact</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-6"
          >
            Ready for a free estimate? Have questions? We&apos;re here to help — fast response, zero pressure, expert guidance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="divider-gold mx-auto"
          />
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="relative z-20 -mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, i) => {
              const Inner = (
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 card-hover text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-roof-amber to-roof-gold flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <item.icon className="w-7 h-7 text-roof-dark" />
                  </div>
                  <h3 className="font-bold text-roof-charcoal text-sm uppercase tracking-wide mb-1">{item.label}</h3>
                  <p className={`text-sm ${item.accent ? 'text-roof-amber font-bold text-base' : 'text-roof-gray'}`}>{item.value}</p>
                </div>
              );
              return (
                <FadeIn key={item.label} delay={i * 0.1}>
                  {item.href ? <a href={item.href} className="block">{Inner}</a> : Inner}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-roof-amber font-bold text-sm uppercase tracking-widest">Free Estimate</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-roof-charcoal mt-3">
                Request Your Free <span className="gradient-text">Roof Inspection</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                          <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-extrabold text-roof-charcoal mb-3">Thank You!</h3>
                        <p className="text-roof-gray text-lg max-w-md mx-auto">We&apos;ll get back to you within 24 hours with your free estimate. Check your inbox!</p>
                      </motion.div>
                    ) : (
                      <motion.div key="form" initial={{ opacity: 1 }}>
                        {/* Step indicator */}
                        <div className="flex items-center justify-center gap-2 mb-10">
                          {[
                            { num: 1, label: 'Service' },
                            { num: 2, label: 'Details' },
                            { num: 3, label: 'Message' },
                          ].map((s, idx) => (
                            <div key={s.num} className="flex items-center gap-2">
                              <div className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                  step >= s.num
                                    ? 'bg-gradient-to-br from-roof-amber to-roof-gold text-roof-dark shadow-lg'
                                    : 'bg-gray-200 text-gray-500'
                                }`}>
                                  {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
                                </div>
                                <span className={`text-xs mt-1 font-semibold ${step >= s.num ? 'text-roof-amber' : 'text-gray-400'}`}>{s.label}</span>
                              </div>
                              {idx < 2 && <div className={`w-16 h-0.5 mb-5 transition-all duration-300 ${step > s.num ? 'bg-gradient-to-r from-roof-amber to-roof-gold' : 'bg-gray-200'}`} />}
                            </div>
                          ))}
                        </div>

                        <form onSubmit={handleSubmit}>
                          {/* Step 1 */}
                          {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                              <h3 className="text-xl font-bold text-roof-charcoal mb-2">What do you need help with?</h3>
                              <p className="text-roof-gray text-sm mb-6">Select the service you&apos;re interested in</p>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {serviceOptions.map((opt) => (
                                  <button
                                    key={opt.label}
                                    type="button"
                                    onClick={() => setSelectedService(opt.label)}
                                    className={`flex flex-col items-center gap-2 p-5 rounded-2xl border-2 text-center transition-all duration-300 ${
                                      selectedService === opt.label
                                        ? 'border-roof-amber bg-gradient-to-b from-roof-amber/10 to-roof-gold/5 shadow-md'
                                        : 'border-gray-200 bg-white hover:border-roof-amber/40 hover:shadow-sm'
                                    }`}
                                  >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                                      selectedService === opt.label
                                        ? 'bg-gradient-to-br from-roof-amber to-roof-gold shadow-md'
                                        : 'bg-gray-100'
                                    }`}>
                                      <opt.icon className={`w-6 h-6 ${selectedService === opt.label ? 'text-roof-dark' : 'text-roof-gray'}`} />
                                    </div>
                                    <span className={`font-bold text-sm ${selectedService === opt.label ? 'text-roof-charcoal' : 'text-roof-gray'}`}>
                                      {opt.label}
                                    </span>
                                    <span className="text-xs text-gray-400">{opt.desc}</span>
                                  </button>
                                ))}
                              </div>
                              <button
                                type="button"
                                onClick={() => selectedService && setStep(2)}
                                disabled={!selectedService}
                                className="mt-8 w-full btn-primary justify-center py-4 text-base disabled:opacity-40 disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-400"
                              >
                                <span>Continue</span> <ArrowRight className="w-5 h-5" />
                              </button>
                            </motion.div>
                          )}

                          {/* Step 2 */}
                          {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                              <h3 className="text-xl font-bold text-roof-charcoal mb-2">Your Contact Information</h3>
                              <p className="text-roof-gray text-sm mb-6">We&apos;ll use this to send your free estimate</p>
                              <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div>
                                    <label className="block text-sm font-bold text-roof-charcoal mb-2">Full Name *</label>
                                    <input
                                      type="text"
                                      required
                                      value={formData.name}
                                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                                      className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-roof-amber focus:ring-4 focus:ring-roof-amber/10 outline-none transition bg-white"
                                      placeholder="John Smith"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-bold text-roof-charcoal mb-2">Phone *</label>
                                    <input
                                      type="tel"
                                      required
                                      value={formData.phone}
                                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                      className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-roof-amber focus:ring-4 focus:ring-roof-amber/10 outline-none transition bg-white"
                                      placeholder="(832) 555-0123"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="block text-sm font-bold text-roof-charcoal mb-2">Email *</label>
                                  <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-roof-amber focus:ring-4 focus:ring-roof-amber/10 outline-none transition bg-white"
                                    placeholder="john@example.com"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-bold text-roof-charcoal mb-2">Property Address</label>
                                  <input
                                    type="text"
                                    value={formData.address}
                                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                                    className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-roof-amber focus:ring-4 focus:ring-roof-amber/10 outline-none transition bg-white"
                                    placeholder="123 Main St, Houston, TX"
                                  />
                                </div>
                              </div>
                              <div className="flex gap-3 mt-8">
                                <button type="button" onClick={() => setStep(1)} className="px-6 py-3.5 rounded-xl border-2 border-gray-300 text-roof-charcoal font-bold hover:bg-gray-100 transition">
                                  Back
                                </button>
                                <button
                                  type="button"
                                  onClick={() => formData.name && formData.phone && formData.email && setStep(3)}
                                  className="flex-1 btn-primary justify-center py-3.5"
                                >
                                  <span>Continue</span> <ArrowRight className="w-5 h-5" />
                                </button>
                              </div>
                            </motion.div>
                          )}

                          {/* Step 3 */}
                          {step === 3 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                              <h3 className="text-xl font-bold text-roof-charcoal mb-2">Almost Done!</h3>
                              <p className="text-roof-gray text-sm mb-6">Review your details and add any additional info</p>
                              <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 mb-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                  <div><span className="text-gray-400">Service:</span> <span className="font-bold text-roof-charcoal ml-1">{selectedService}</span></div>
                                  <div><span className="text-gray-400">Name:</span> <span className="font-bold text-roof-charcoal ml-1">{formData.name}</span></div>
                                  <div><span className="text-gray-400">Phone:</span> <span className="font-bold text-roof-charcoal ml-1">{formData.phone}</span></div>
                                  <div><span className="text-gray-400">Email:</span> <span className="font-bold text-roof-charcoal ml-1">{formData.email}</span></div>
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-bold text-roof-charcoal mb-2">Additional Details (optional)</label>
                                <textarea
                                  value={formData.message}
                                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                                  rows={4}
                                  className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-roof-amber focus:ring-4 focus:ring-roof-amber/10 outline-none transition resize-none bg-white"
                                  placeholder="Describe your project, timeline, or any specific concerns..."
                                />
                              </div>
                              {submitError && (
                                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                                  {submitError}
                                </div>
                              )}
                              <div className="flex gap-3 mt-8">
                                <button type="button" onClick={() => setStep(2)} className="px-6 py-3.5 rounded-xl border-2 border-gray-300 text-roof-charcoal font-bold hover:bg-gray-100 transition" disabled={isSubmitting}>
                                  Back
                                </button>
                                <button type="submit" disabled={isSubmitting} className="flex-1 btn-primary justify-center py-3.5 text-base shadow-xl disabled:opacity-60 disabled:cursor-not-allowed">
                                  {isSubmitting ? (
                                    <><span className="w-5 h-5 border-2 border-roof-dark/30 border-t-roof-dark rounded-full animate-spin" /> <span>Sending...</span></>
                                  ) : (
                                    <><span>Submit Request</span> <ArrowRight className="w-5 h-5" /></>
                                  )}
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeIn delay={0.2}>
                <div className="bg-roof-dark rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 pattern-dots opacity-20" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-roof-amber to-roof-gold flex items-center justify-center mb-5 shadow-lg">
                      <Shield className="w-7 h-7 text-roof-dark" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
                    <ul className="space-y-3">
                      {['Licensed & Insured', '15+ Years Experience', 'Free Inspections', '5-Star Google Rating', '24/7 Emergency Service'].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-roof-amber flex-shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-gradient-to-br from-roof-amber to-roof-gold rounded-3xl p-8 text-roof-dark">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-roof-dark text-roof-dark" />
                    ))}
                  </div>
                  <p className="font-bold text-lg mb-2">&quot;Incredible work!&quot;</p>
                  <p className="text-sm text-roof-dark/80 mb-4">&quot;RoofPlanet replaced our entire roof in 2 days. Professional, clean, and the price was fair. Highly recommend!&quot;</p>
                  <p className="font-bold text-sm">— Sarah M., Houston TX</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-red-500" />
                    <h3 className="text-lg font-bold text-red-700">Emergency?</h3>
                  </div>
                  <p className="text-sm text-red-600/80 mb-4">Storm damage or active leak? We&apos;re available 24/7 for emergency response.</p>
                  <a href="tel:+18323706314" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition text-sm shadow-lg">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-roof-amber font-bold text-sm uppercase tracking-widest">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-roof-charcoal mt-3">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden card-hover">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-roof-charcoal pr-4">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-roof-amber flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-roof-gray flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-roof-gray text-sm leading-relaxed border-t border-gray-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern home at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Let&apos;s Protect Your <span className="gradient-text">Investment</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Your home deserves the best. Get your free inspection today and experience the RoofPlanet difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18323706314" className="btn-primary text-lg px-10 py-4">
                <Phone className="w-5 h-5" /> <span>Call (832) 370-6314</span>
              </a>
              <Link href="/services" className="btn-outline text-lg px-10 py-4">
                <span>Explore Services</span> <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
