import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#25272A] text-white border-t border-[#1C1E20] py-12 sm:py-14 text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand & Description (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-bold text-xl text-white tracking-tight">
              Zam Zam Medicals
            </h3>
            <p className="text-xs text-[#E8EAED]/80 leading-relaxed max-w-sm">
              A trusted neighbourhood pharmacy serving Pallikaranai, Chennai since 2016. Dedicated to convenient access to genuine medicines and everyday healthcare essentials.
            </p>
            <div className="pt-1 text-xs text-[#E8EAED]/60">
              Established 2016 · Community Care
            </div>
          </div>

          {/* Quick Navigation Links (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#E8EAED]/60 mb-3">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2 text-xs text-[#E8EAED]/90">
              <a href="#" className="hover:text-[#B51224] transition-colors py-0.5">
                Home
              </a>
              <a href="#about" className="hover:text-[#B51224] transition-colors py-0.5">
                About
              </a>
              <a href="#contact" className="hover:text-[#B51224] transition-colors py-0.5">
                Contact
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="hover:text-[#B51224] transition-colors text-white font-medium inline-flex items-center gap-1.5 pt-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#B51224]" />
                <span>Call Us</span>
              </a>
            </nav>
          </div>

          {/* Address & Hours (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-2.5 text-xs text-[#E8EAED]/80">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#E8EAED]/60 mb-3">
              Address & Contact
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#B51224] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {BUSINESS_CONFIG.address}
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#B51224] shrink-0" />
              <span>
                Phone:{' '}
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                  className="font-medium text-white hover:text-[#B51224] underline transition-colors"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#E8EAED]/60 shrink-0" />
              <span>Hours: {BUSINESS_CONFIG.openingHours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright notice only */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8EAED]/60">
          <div>
            © {new Date().getFullYear()} Zam Zam Medicals. All rights reserved. Pallikaranai, Chennai.
          </div>
          <div>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Back to Top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
