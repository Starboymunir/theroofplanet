'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { DollarSign, CheckCircle, ArrowRight, Shield, Clock, CreditCard, Phone, Star, BadgePercent, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const benefits = [
  { icon: DollarSign, title: 'No Money Down', desc: 'Start your project with zero upfront costs. Pay over time with affordable monthly payments.' },
  { icon: CreditCard, title: 'Low Monthly Payments', desc: 'Budget-friendly installments designed to fit your financial situation comfortably.' },
  { icon: Zap, title: 'Quick Approval', desc: 'Get approved in minutes with our streamlined digital application process.' },
  { icon: BadgePercent, title: 'Competitive Rates', desc: 'We partner with top lenders to offer you the best rates available in the market.' },
];

const plans = [
  {
    name: 'Basic Plan',
    term: '12 Months',
    rate: '0%',
    rateLabel: 'APR',
    limit: 'Up to $15,000',
    minCredit: '650+',
    features: ['No interest if paid in full', 'Low monthly payments', 'Quick online approval', 'No prepayment penalty', 'Same-as-cash option'],
    popular: false,
  },
  {
    name: 'Standard Plan',
    term: '36 Months',
    rate: '5.99%',
    rateLabel: 'APR',
    limit: 'Up to $35,000',
    minCredit: '620+',
    features: ['Fixed competitive rate', 'Predictable payments', 'Extended coverage period', 'No hidden fees', 'Transferable to new owner'],
    popular: true,
  },
  {
    name: 'Premium Plan',
    term: '60 Months',
    rate: '7.99%',
    rateLabel: 'APR',
    limit: 'Up to $75,000',
    minCredit: '600+',
    features: ['Maximum flexibility', 'Lowest monthly payment', 'Covers full projects', 'No collateral required', 'Early payoff discount'],
    popular: false,
  },
];

const steps = [
  { num: '01', title: 'Apply Online or Call', desc: 'Fill out our simple application in under 5 minutes, or call us and we\'ll walk you through it.' },
  { num: '02', title: 'Get Approved in Minutes', desc: 'Our lending partners provide fast decisions so you can move forward with confidence.' },
  { num: '03', title: 'Start Your Project', desc: 'Once approved, we schedule your project immediately. No waiting, no delays.' },
];

const faqs = [
  { q: 'What credit score do I need?', a: 'Our financing options accommodate a range of credit scores starting from 600+. The Basic Plan requires 650+, Standard requires 620+, and Premium requires 600+. We encourage everyone to apply as approval depends on multiple factors beyond just credit score.' },
  { q: 'How long does approval take?', a: 'Most applications receive a decision within minutes. In some cases, additional verification may be needed which can take up to 24 hours. We work with multiple lenders to maximize your chances of approval.' },
  { q: 'Can I pay off my loan early?', a: 'Absolutely! All of our financing plans come with no prepayment penalties. You can pay off your balance at any time without additional fees. The Premium Plan even offers an early payoff discount.' },
  { q: 'What documentation is needed?', a: 'You\'ll need a valid government-issued ID, proof of income (recent pay stubs or tax returns), and proof of homeownership. Our team will guide you through the documentation process.' },
  { q: 'Is there a down payment required?', a: 'No! All of our financing plans feature zero down payment. You can start your roofing project without any upfront costs. Your first payment typically begins 30 days after project completion.' },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function FinancingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-32">
        <Image
          src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
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
            <span className="text-roof-amber">Financing</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
          >
            Flexible <span className="gradient-text">Financing Options</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-6"
          >
            Quality roofing shouldn&apos;t break the bank. Explore our affordable payment plans designed to protect your home and your budget.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="divider-gold mx-auto"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="w-[92%] xl:w-[88%] 2xl:w-[82%] mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-roof-amber font-bold text-sm uppercase tracking-widest">Why Finance Your Roof?</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-roof-charcoal mt-3">
                Making Quality Roofing <span className="gradient-text">Affordable</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-gray-50 card-hover border border-gray-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-roof-amber to-roof-gold flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <b.icon className="w-8 h-8 text-roof-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-roof-charcoal mb-2">{b.title}</h3>
                  <p className="text-roof-gray text-sm leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 md:py-28 bg-roof-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="relative w-[92%] xl:w-[88%] 2xl:w-[82%] mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-roof-amber font-bold text-sm uppercase tracking-widest">Our Plans</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
                Choose Your <span className="gradient-text">Perfect Plan</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.15}>
                <div className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-roof-navy to-roof-slate border-2 border-roof-amber shadow-2xl scale-105 z-10'
                    : 'glass-dark hover:border-roof-amber/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-roof-amber to-roof-gold text-roof-dark text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3" /> MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.term}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-extrabold text-roof-amber">{plan.rate}</span>
                    <span className="text-gray-400 ml-2">{plan.rateLabel}</span>
                  </div>
                  <div className="text-sm text-gray-300 mb-2">{plan.limit}</div>
                  <div className="text-sm text-gray-400 mb-6">Min. Credit Score: {plan.minCredit}</div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6" />
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-roof-amber flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/estimate"
                    className={`block text-center font-bold py-3.5 px-6 rounded-full transition-all ${
                      plan.popular
                        ? 'btn-primary w-full justify-center'
                        : 'border-2 border-gray-600 text-white hover:border-roof-amber hover:text-roof-amber'
                    }`}
                  >
                    Apply Now <ArrowRight className="w-4 h-4 inline ml-1" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="w-[92%] xl:w-[88%] 2xl:w-[82%] mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-roof-amber font-bold text-sm uppercase tracking-widest">Simple Process</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-roof-charcoal mt-3">
                How It <span className="gradient-text">Works</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-roof-amber via-roof-gold to-roof-amber" />
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.15}>
                <div className="text-center relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-roof-amber to-roof-gold flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10">
                    <span className="text-2xl font-extrabold text-roof-dark">{s.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-roof-charcoal mb-3">{s.title}</h3>
                  <p className="text-roof-gray text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
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
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-roof-gray text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/8134846/pexels-photo-8134846.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern home"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-roof-amber/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Apply for financing today or give us a call. Our team is ready to help you find the perfect plan for your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/estimate" className="btn-primary text-lg px-10 py-4">
                <span>Apply Now</span> <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+18323706314" className="btn-outline text-lg px-10 py-4">
                <Phone className="w-5 h-5" /> <span>Call (832) 370-6314</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
