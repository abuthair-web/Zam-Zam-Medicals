import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E8EAED] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Name on Left: Zam Zam Medicals */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-[#25272A] hover:text-[#B51224] transition-colors"
          >
            Zam Zam Medicals
          </a>

          {/* Desktop Navigation Links & Call Us Button on Right */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7 text-sm font-medium text-[#25272A]">
              <a
                href="#"
                className="hover:text-[#B51224] transition-colors py-1"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-[#B51224] transition-colors py-1"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-[#B51224] transition-colors py-1"
              >
                Contact
              </a>
            </nav>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-2 bg-[#B51224] hover:bg-[#7F1020] text-white px-5 py-2.5 rounded-md font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-1.5 bg-[#B51224] text-white px-3.5 py-2 rounded-md text-xs font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#25272A] hover:bg-[#FAF8F6] rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8EAED] py-4 space-y-2 bg-white">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#25272A] hover:bg-[#FAF8F6] rounded-md transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#25272A] hover:bg-[#FAF8F6] rounded-md transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#25272A] hover:bg-[#FAF8F6] rounded-md transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
