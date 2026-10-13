import React from 'react';
import { Building2, MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const BusinessInfo: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E8EAED]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7F1020] block mb-2">
            Verified Details
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#25272A] tracking-tight mb-3">
            Business Information
          </h2>
          <p className="text-sm sm:text-base text-[#55585D]">
            Official business details for Zam Zam Medicals, Pallikaranai.
          </p>
        </div>

        {/* 4 Clean Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Business Name */}
          <div className="bg-[#FAF8F6] rounded-xl border border-[#E8EAED] p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E8EAED] flex items-center justify-center text-[#B51224] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#55585D] mb-1">
                Business Name
              </span>
              <h3 className="text-lg font-bold text-[#25272A]">
                {BUSINESS_CONFIG.name}
              </h3>
              <p className="text-xs text-[#55585D] mt-0.5">
                Estd. 2016 · Community Pharmacy
              </p>
            </div>
          </div>

          {/* Card 2: Contact Phone */}
          <div className="bg-[#FAF8F6] rounded-xl border border-[#E8EAED] p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E8EAED] flex items-center justify-center text-[#B51224] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#55585D] mb-1">
                Phone Number
              </span>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="text-lg font-bold text-[#B51224] hover:text-[#7F1020] transition-colors block"
              >
                {BUSINESS_CONFIG.phoneDisplay}
              </a>
              <p className="text-xs text-[#55585D] mt-0.5">
                Tap to call directly from your device
              </p>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="bg-[#FAF8F6] rounded-xl border border-[#E8EAED] p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E8EAED] flex items-center justify-center text-[#B51224] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#55585D] mb-1">
                Address
              </span>
              <p className="text-sm font-semibold text-[#25272A] leading-snug mb-2">
                {BUSINESS_CONFIG.address}
              </p>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B51224] hover:text-[#7F1020] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps &rarr;</span>
              </a>
            </div>
          </div>

          {/* Card 4: Opening Hours */}
          <div className="bg-[#FAF8F6] rounded-xl border border-[#E8EAED] p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E8EAED] flex items-center justify-center text-[#B51224] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#55585D] mb-1">
                Opening Hours
              </span>
              <p className="text-base font-bold text-[#25272A]">
                {BUSINESS_CONFIG.openingHours}
              </p>
              <p className="text-xs text-[#55585D] mt-0.5">
                Open Monday through Sunday
              </p>
            </div>
          </div>
        </div>

        {/* Clean Get Directions Action Bar */}
        <div className="bg-[#FAF8F6] rounded-xl border border-[#E8EAED] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-sm text-[#25272A] mb-0.5">
              Finding Our Pharmacy
            </h4>
            <p className="text-xs text-[#55585D]">
              Located on Parthasarathy Road, Balaji Nagar, Pallikaranai, Chennai.
            </p>
          </div>
          <a
            href={BUSINESS_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25272A] hover:bg-[#B51224] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shrink-0"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
};
