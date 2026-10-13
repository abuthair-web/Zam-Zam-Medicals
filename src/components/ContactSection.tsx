import React from 'react';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FAF8F6] border-b border-[#E8EAED]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7F1020] block mb-2">
            Visit or Call
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#25272A] tracking-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-[#55585D] leading-relaxed">
            We welcome you to call us directly for any medicine enquiry or visit our pharmacy in Pallikaranai.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Pharmacy Address Card */}
          <div className="bg-white p-6 rounded-xl border border-[#E8EAED] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F6] border border-[#E8EAED] flex items-center justify-center text-[#B51224] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#25272A] mb-2">Our Pharmacy</h3>
              <p className="text-sm text-[#55585D] leading-relaxed">
                {BUSINESS_CONFIG.address}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8EAED]">
              <span className="text-xs text-[#55585D]">Balaji Nagar · Pallikaranai</span>
            </div>
          </div>

          {/* Telephone Card */}
          <div className="bg-white p-6 rounded-xl border border-[#E8EAED] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F6] border border-[#E8EAED] flex items-center justify-center text-[#B51224] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#25272A] mb-2">Telephone</h3>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="text-lg font-bold text-[#B51224] hover:text-[#7F1020] transition-colors block mb-1"
              >
                {BUSINESS_CONFIG.phoneDisplay}
              </a>
              <p className="text-xs text-[#55585D]">
                Click or tap to call directly
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8EAED]">
              <span className="text-xs text-[#55585D]">Direct phone assistance</span>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-white p-6 rounded-xl border border-[#E8EAED] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F6] border border-[#E8EAED] flex items-center justify-center text-[#B51224] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#25272A] mb-2">Operating Hours</h3>
              <p className="text-base font-bold text-[#25272A] mb-1">
                {BUSINESS_CONFIG.openingHours}
              </p>
              <p className="text-xs text-[#55585D]">
                Monday through Sunday
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8EAED]">
              <span className="text-xs text-[#55585D]">Open 7 days a week</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={`tel:${BUSINESS_CONFIG.phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B51224] hover:bg-[#7F1020] text-white px-7 py-3 rounded-md font-medium text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us: {BUSINESS_CONFIG.phoneDisplay}</span>
          </a>

          <a
            href={BUSINESS_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#FAF8F6] text-[#25272A] border border-[#CCCCCC] px-7 py-3 rounded-md font-medium text-sm transition-colors"
          >
            <Navigation className="w-4 h-4 text-[#B51224]" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
};
