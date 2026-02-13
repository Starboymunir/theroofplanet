import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — RoofPlanet',
  description: 'Terms of service for RoofPlanet roofing and exterior services in Houston, TX.',
};

const sections = [
  {
    title: 'Agreement to Terms',
    content: 'By accessing and using the RoofPlanet website (theroofplanet.com) and our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.',
  },
  {
    title: 'Services',
    content: 'RoofPlanet provides roofing, siding, window, gutter, and related exterior services in the Greater Houston, TX area. All work is performed by licensed and insured professionals. Specific service terms, warranties, and pricing are detailed in individual project agreements.',
  },
  {
    title: 'Estimates & Pricing',
    content: 'All estimates provided through our website or in person are non-binding and subject to change based on final inspection and project scope. Final pricing will be confirmed in a written service agreement before work begins. We strive for transparent, upfront pricing with no hidden fees.',
  },
  {
    title: 'Insurance Claims',
    content: 'While we assist with insurance claims, we do not guarantee approval or specific settlement amounts. Claims are ultimately determined by your insurance provider. We will work diligently on your behalf to document damage and communicate with adjusters.',
  },
  {
    title: 'Warranties',
    content: 'Warranty coverage varies by project type, materials used, and scope of work. Specific warranty terms are outlined in your individual service agreement. Material warranties are provided by the manufacturer and are separate from our workmanship warranty.',
  },
  {
    title: 'Limitation of Liability',
    content: 'RoofPlanet shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the amount paid for the specific services in question.',
  },
  {
    title: 'Website Use',
    content: 'You agree not to use our website in ways that are unlawful or harmful:',
    list: [
      'Use our website for any unlawful purpose',
      'Submit false or misleading information',
      'Attempt to interfere with the proper operation of the website',
      'Copy or reproduce content without permission',
    ],
  },
  {
    title: 'Intellectual Property',
    content: 'All content on the RoofPlanet website, including text, graphics, logos, and images, is the property of RoofPlanet and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.',
  },
  {
    title: 'Governing Law',
    content: 'These terms shall be governed by and construed in accordance with the laws of the State of Texas. Any disputes arising from these terms shall be resolved in the courts of Harris County, Texas.',
  },
  {
    title: 'Changes to Terms',
    content: 'We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the modified terms.',
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-roof-amber">Terms of Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-roof-amber to-roof-gold flex items-center justify-center shadow-md">
              <FileText className="w-6 h-6 text-roof-dark" />
            </div>
            <div>
              <p className="text-sm text-roof-gray">Last updated</p>
              <p className="font-bold text-roof-charcoal">February 2026</p>
            </div>
          </div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-extrabold text-roof-charcoal mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-roof-dark text-roof-amber text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  {section.title}
                </h2>
                <p className="text-roof-gray leading-relaxed mb-3">{section.content}</p>
                {section.list && (
                  <ul className="space-y-2 ml-11">
                    {section.list.map((item, j) => (
                      <li key={j} className="text-roof-gray flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-roof-amber mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-14 p-8 rounded-2xl bg-gray-50 border border-gray-200">
            <h2 className="text-xl font-extrabold text-roof-charcoal mb-4">Contact Us</h2>
            <p className="text-roof-gray mb-4">Questions about these terms?</p>
            <div className="space-y-2 text-sm">
              <p><span className="font-bold text-roof-charcoal">Phone:</span> <a href="tel:+18323706314" className="text-roof-amber font-semibold hover:underline">(832) 370-6314</a></p>
              <p><span className="font-bold text-roof-charcoal">Email:</span> <a href="mailto:info@theroofplanet.com" className="text-roof-amber font-semibold hover:underline">info@theroofplanet.com</a></p>
              <p><span className="font-bold text-roof-charcoal">Service Area:</span> <span className="text-roof-gray">Greater Houston, TX</span></p>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/" className="inline-flex items-center gap-2 text-roof-amber font-bold hover:text-roof-gold transition">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
