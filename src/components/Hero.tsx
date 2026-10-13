import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#E8EAED] py-14 sm:py-18 lg:py-22">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column (7 cols on lg) */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7F1020] block mb-3">
              Established 2016 · Pallikaranai, Chennai
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#25272A] tracking-tight mb-3 leading-tight">
              Zam Zam Medicals
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-[#7F1020] mb-5">
              Your Trusted Neighbourhood Pharmacy
            </p>

            <p className="text-base text-[#55585D] leading-relaxed mb-8 max-w-xl">
              Serving our community since 2016, Zam Zam Medicals is committed to providing convenient access to pharmacy and healthcare essentials.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="inline-flex items-center justify-center gap-2.5 bg-[#B51224] hover:bg-[#7F1020] text-white px-7 py-3 rounded-md font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#FAF8F6] text-[#25272A] border border-[#CCCCCC] px-7 py-3 rounded-md font-medium text-sm transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#B51224]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Flat Store Summary Card (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8F6] rounded-xl border border-[#E8EAED] p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8EAED]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#25272A]">
                  Store Summary
                </span>
                <span className="text-xs font-medium text-[#7F1020] bg-white px-2.5 py-1 rounded border border-[#E8EAED]">
                  Open Daily
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B51224] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#25272A] block">Working Hours</span>
                    <span className="text-[#55585D]">{BUSINESS_CONFIG.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B51224] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#25272A] block">Location</span>
                    <span className="text-[#55585D]">{BUSINESS_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#B51224] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#25272A] block">Quality Commitment</span>
                    <span className="text-[#55585D]">100% genuine pharmaceutical sourcing</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E8EAED]">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                  className="text-xs font-semibold text-[#B51224] hover:text-[#7F1020] block transition-colors"
                >
                  Direct Telephone: {BUSINESS_CONFIG.phoneDisplay} &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
