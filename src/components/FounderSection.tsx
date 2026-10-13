import React from 'react';
import { Award, HeartHandshake } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-16 sm:py-20 bg-[#FAF8F6] border-b border-[#E8EAED]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-[#E8EAED] p-8 sm:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7F1020] block mb-2">
              Leadership
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#25272A] tracking-tight mb-2">
              Meet Our Founder
            </h2>

            <div className="pt-2 pb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#B51224] tracking-tight">
                Mr. Faisal Ahamed
              </h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#55585D] mt-1">
                Founder, Zam Zam Medicals
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#3A3D42] leading-relaxed border-t border-[#E8EAED] pt-6">
              <p>
                Founded by Mr. Faisal Ahamed in 2016, Zam Zam Medicals was established with a clear mission: to provide neighbourhood families in Pallikaranai, Chennai with convenient, dependable access to genuine medicines and everyday healthcare essentials.
              </p>
              <p>
                Under his leadership, the pharmacy remains dedicated to approachable community service, transparent standards, and consistent care seven days a week.
              </p>
            </div>

            {/* Factual Highlights without image clutter */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="bg-[#FAF8F6] rounded-lg border border-[#E8EAED] p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-white border border-[#E8EAED] flex items-center justify-center text-[#B51224] shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#25272A] mb-0.5">
                    Established in 2016
                  </h4>
                  <p className="text-xs text-[#55585D] leading-normal">
                    Continuous community presence in Pallikaranai.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF8F6] rounded-lg border border-[#E8EAED] p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-white border border-[#E8EAED] flex items-center justify-center text-[#7F1020] shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#25272A] mb-0.5">
                    Community First
                  </h4>
                  <p className="text-xs text-[#55585D] leading-normal">
                    Committed to accessible and dependable healthcare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
