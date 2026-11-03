import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { salonData, FaqItem } from '../data/salonData.ts';

interface FaqSectionProps {
  lang: 'ar' | 'en';
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  // Open the first item by default for immediate discoverability
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#E7E3DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8F7D52]">
            {isAr ? 'الأسئلة المتكررة' : 'Frequently Asked Questions'}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1D1E] tracking-tight">
            {isAr ? 'إجابات موثقة حول الصالون' : 'Verified Visitor Inquiries'}
          </h2>

          <p className="text-sm sm:text-base text-[#4A4E51] leading-relaxed">
            {isAr
              ? 'تعتمد كافة الإجابات على الحقائق الرسمية ومواعيد العمل المؤكدة دون افتراض سياسات أو أسعار غير معلنة.'
              : 'All answers reflect confirmed operational facts without fabricated policies or speculative pricing.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {salonData.faqs.map((faq: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E7E3DC] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8F7D52]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#1B1D1E]">
                    {isAr ? faq.qAr : faq.qEn}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-[#8F7D52] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#4A4E51] leading-relaxed border-t border-[#F0ECE4] pt-4">
                    <p>{isAr ? faq.aAr : faq.aEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-10 p-6 bg-[#FFFFFF] border border-[#E7E3DC] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E7E3DC] flex items-center justify-center text-[#8F7D52] shrink-0">
              <HelpCircle className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#1B1D1E]">
                {isAr ? 'لديك استفسار آخر؟' : 'Have a specific inquiry?'}
              </div>
              <div className="text-xs text-[#595E62]">
                {isAr ? 'تواصل هاتفياً مباشرة مع فريق الصالون' : 'Speak directly with the salon team by phone'}
              </div>
            </div>
          </div>

          <a
            href={salonData.contact.phoneTel}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B1D1E] hover:bg-[#2C2F31] text-[#F8F7F4] text-xs font-bold rounded-md transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#C4B287]" aria-hidden="true" />
            <span>{isAr ? 'اتصل: 02 2401 6868' : 'Call 02 2401 6868'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
