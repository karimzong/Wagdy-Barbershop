import React from 'react';
import { Star, MapPin, Sparkles, PhoneCall, Calendar } from 'lucide-react';
import { salonData } from '../data/salonData.ts';

interface TrustStripProps {
  lang: 'ar' | 'en';
}

export const TrustStrip: React.FC<TrustStripProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const pillars = [
    {
      icon: MapPin,
      titleAr: 'موقع حيوي وميسر',
      titleEn: 'Nasr City Location',
      descAr: 'شارع الصناعة، المنطقة الأولى',
      descEn: 'Al Senaa St, 1st District',
    },
    {
      icon: Sparkles,
      titleAr: 'نظافة وعناية مستمرة',
      titleEn: 'Clean & Modern Environment',
      descAr: 'محطات مجهزة وديكور دافئ مشرق',
      descEn: 'Equipped stations & warm lighting',
    },
    {
      icon: PhoneCall,
      titleAr: 'تأكيد مباشر عبر الهاتف',
      titleEn: 'Direct Phone Inquiries',
      descAr: '02 2401 6868 لمعرفة الدور والأسعار',
      descEn: 'Call 02 2401 6868 for wait times',
    },
    {
      icon: Calendar,
      titleAr: 'مواعيد عمل منتظمة',
      titleEn: 'Consistent Weekly Schedule',
      descAr: 'الثلاثاء إلى الأحد (الاثنين عطلة)',
      descEn: 'Tue–Sun: 11 AM – 11 PM (Mon off)',
    },
  ];

  return (
    <section className="bg-[#FFFFFF] border-b border-[#E7E3DC] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Google Sourced Rating Bar */}
        <div className="pb-6 mb-6 border-b border-[#F0ECE4] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FFFBEB] border border-[#FDE68A] rounded-md text-[#92400E]">
              <div className="flex text-[#D97706]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D97706] text-[#D97706]" aria-hidden="true" />
                ))}
              </div>
              <span className="font-bold text-sm font-mono tabular-nums">4.7 / 5.0</span>
            </div>

            <div className="text-xs text-[#4A4E51]">
              <span className="font-bold text-[#1B1D1E]">
                {isAr ? '135 مراجعة على خرائط Google' : '135 reviews on Google Maps'}
              </span>
              <span className="mx-2 text-[#CBD0D4]">·</span>
              <span className="text-[#6B7280]">
                {isAr
                  ? 'تم التحقق من التقييم العام في 2 نوفمبر 2026'
                  : 'Listing rating checked on 2 November 2026'}
              </span>
            </div>
          </div>

          <a
            href={salonData.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#8F7D52] hover:text-[#72633E] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>{isAr ? 'عرض الملف التجاري في الخرائط' : 'View Google Maps Listing'}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#FAF8F5] border border-[#E7E3DC] flex items-center justify-center shrink-0 text-[#8F7D52]">
                  <IconComponent className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="space-y-0.5">
                  <h2 className="text-sm font-bold text-[#1B1D1E]">
                    {isAr ? item.titleAr : item.titleEn}
                  </h2>
                  <p className="text-xs text-[#595E62]">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
