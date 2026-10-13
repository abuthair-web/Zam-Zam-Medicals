import React from 'react';
import { ShieldCheck, Users, Clock } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-[#E8EAED]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7F1020] block mb-2">
            Our Story & Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#25272A] tracking-tight mb-4">
            About Zam Zam Medicals
          </h2>
        </div>

        {/* Text Presentation Card */}
        <div className="bg-[#FAF8F6] rounded-xl border border-[#E8EAED] p-7 sm:p-9 mb-10">
          <div className="space-y-4 text-base sm:text-lg text-[#3A3D42] leading-relaxed">
            <p>
              Zam Zam Medicals is a neighbourhood pharmacy located in Pallikaranai, Chennai, serving the local community since 2016. We are committed to making medicines and everyday healthcare essentials conveniently accessible to our customers.
            </p>
            <p>
              With a focus on customer service, accessibility, and a welcoming pharmacy experience, we aim to be a dependable part of the local community.
            </p>
          </div>
        </div>

        {/* Clean 3-Column Value Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-[#E8EAED] p-5 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-md bg-[#FAF8F6] border border-[#E8EAED] flex items-center justify-center text-[#B51224] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-[#25272A] mb-1">Authentic Products</h3>
              <p className="text-xs text-[#55585D] leading-normal">
                100% genuine medicines sourced directly from registered distributors.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-[#E8EAED] p-5 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-md bg-[#FAF8F6] border border-[#E8EAED] flex items-center justify-center text-[#7F1020] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-[#25272A] mb-1">Customer Service</h3>
              <p className="text-xs text-[#55585D] leading-normal">
                Friendly, dependable, and approachable service for neighbourhood families.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-[#E8EAED] p-5 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-md bg-[#FAF8F6] border border-[#E8EAED] flex items-center justify-center text-[#25272A] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-[#25272A] mb-1">Daily Availability</h3>
              <p className="text-xs text-[#55585D] leading-normal">
                Open 7 days a week from 8:30 AM to 10:30 PM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
