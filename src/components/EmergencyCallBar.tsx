'use client';

import { Phone, Zap } from 'lucide-react';

export default function EmergencyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
      <a
        href="tel:+18323706314"
        className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] text-white font-extrabold text-lg py-4 shadow-[0_-4px_20px_rgba(124,58,237,0.4)] active:scale-[0.98] transition-transform"
      >
        <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
        <Phone className="w-5 h-5" />
        EMERGENCY? CALL NOW
      </a>
    </div>
  );
}
