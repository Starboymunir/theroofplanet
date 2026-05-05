import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — RoofPlanet',
  description: 'Privacy policy for RoofPlanet. Learn how we collect, use, and protect your information.',
};

const sections = [
  {
    title: 'Information We Collect',
    content: 'When you contact us or request an estimate through our website, we may collect:',
    list: [
      'Your name, email address, and phone number',
      'Your property address',
      'Details about your roofing or exterior project',
      'Information you voluntarily provide in messages',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: 'We use your personal information solely to:',
    list: [
      'Respond to your inquiries and provide estimates',
      'Schedule and perform roofing services',
      'Communicate about your project',
      'Send important updates about our services',
    ],
  },
  {
    title: 'Information Sharing',
    content: 'We do not sell, trade, or rent your personal information to third parties. We may share information only with trusted service providers who help us operate our business, such as insurance companies when processing your claims on your behalf.',
  },
  {
    title: 'Data Security',
    content: 'We implement reasonable security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: 'Cookies',
    content: 'Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect certain features of our website.',
  },
  {
    title: 'Your Rights',
    content: 'You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us at admin@theroofplanet.com.',
  },
  {
    title: 'Changes to This Policy',
    content: 'We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden pt-32 lg:pt-44">
        <Image
          src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Home exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-roof-amber">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your privacy matters to us. Here&apos;s how we handle your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-roof-amber to-roof-gold flex items-center justify-center shadow-md">
              <Shield className="w-6 h-6 text-roof-dark" />
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
            <p className="text-roof-gray mb-4">If you have questions about this privacy policy:</p>
            <div className="space-y-2 text-sm">
              <p><span className="font-bold text-roof-charcoal">Phone:</span> <a href="tel:+18323706314" className="text-roof-amber font-semibold hover:underline">(832) 370-6314</a></p>
              <p><span className="font-bold text-roof-charcoal">Email:</span> <a href="mailto:admin@theroofplanet.com" className="text-roof-amber font-semibold hover:underline">admin@theroofplanet.com</a></p>
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
