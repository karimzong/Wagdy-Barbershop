import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Copy, Check, AlertCircle, ExternalLink } from 'lucide-react';
import { salonData } from '../data/salonData.ts';
import { getCairoTimeParts } from '../utils/hours.ts';

interface VisitSectionProps {
  lang: 'ar' | 'en';
}

export const VisitSection: React.FC<VisitSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [copied, setCopied] = useState(false);
  
  // Calculate today's day of week in Cairo (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const cairoTime = getCairoTimeParts();
  const currentCairoDay = cairoTime.dayOfWeek;

  // Map dayOfWeek index to salonData.schedule.days index:
  // salonData days: [0: Monday, 1: Tuesday, 2: Wednesday, 3: Thursday, 4: Friday, 5: Saturday, 6: Sunday]
  const dayIndexMap: Record<number, number> = {
    1: 0, // Mon
    2: 1, // Tue
    3: 2, // Wed
    4: 3, // Thu
    5: 4, // Fri
    6: 5, // Sat
    0: 6, // Sun
  };
  const activeDayIndex = dayIndexMap[currentCairoDay] ?? 0;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(
        isAr ? salonData.contact.addressAr : salonData.contact.addressEn
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="visit" className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="schedule" className="max-w-3xl mb-12 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8F7D52]">
            {isAr ? 'الموقع وساعات العمل' : 'Location & Hours'}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1D1E] tracking-tight">
            {isAr ? 'تفضل بزيارتنا في مدينة نصر' : 'Visit Wagdy Hair Saloon'}
          </h2>

          <p className="text-sm sm:text-base text-[#4A4E51] leading-relaxed">
            {isAr
              ? 'موقع متميز بالمنطقة الأولى يسهل الوصول إليه من مختلف شوارع مدينة نصر وشرق القاهرة، مع مواعيد عمل مرنة تستمر حتى الحادية عشرة مساءً.'
              : 'Conveniently situated in the First District of Nasr City with easy access and evening hours running until 11:00 PM.'}
          </p>
        </div>

        {/* 2-Column Split: Schedule & Contact Details + Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Weekly Schedule & Contact Info (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="p-5 bg-[#FAF9F6] border border-[#E7E3DC] rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-md bg-[#FFFFFF] border border-[#E7E3DC] flex items-center justify-center text-[#8F7D52]">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-medium text-[#787D82]">
                    {isAr ? 'هاتف أرضي مباشر' : 'Direct Landline'}
                  </span>
                </div>
                <div>
                  <div className="text-xs text-[#595E62]">{isAr ? 'للحجز والاستفسار' : 'Bookings & Inquiries'}</div>
                  <a
                    href={salonData.contact.phoneTel}
                    className="text-lg font-bold text-[#1B1D1E] hover:text-[#8F7D52] transition-colors font-mono tabular-nums inline-block mt-0.5"
                  >
                    {salonData.contact.phoneDisplay}
                  </a>
                </div>
                <a
                  href={salonData.contact.phoneTel}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8F7D52] hover:underline"
                >
                  <span>{isAr ? 'اتصل الآن' : 'Call now'}</span>
                  <span aria-hidden="true">{isAr ? '←' : '→'}</span>
                </a>
              </div>

              {/* Address Card */}
              <div className="p-5 bg-[#FAF9F6] border border-[#E7E3DC] rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-md bg-[#FFFFFF] border border-[#E7E3DC] flex items-center justify-center text-[#8F7D52]">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-mono text-[#8F7D52] font-semibold">
                    {salonData.contact.plusCode}
                  </span>
                </div>
                <div>
                  <div className="text-xs text-[#595E62]">{isAr ? 'العنوان المعتمد' : 'Verified Address'}</div>
                  <p className="text-xs font-bold text-[#1B1D1E] mt-0.5 leading-snug">
                    {isAr ? salonData.contact.addressAr : salonData.contact.addressEn}
                  </p>
                </div>
                <button
                  onClick={handleCopyAddress}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8F7D52] hover:text-[#72633E] focus:outline-none"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2E7D32]" aria-hidden="true" />
                      <span className="text-[#2E7D32]">{isAr ? 'تم نسخ العنوان' : 'Address copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{isAr ? 'نسخ العنوان' : 'Copy address'}</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Confirmed Weekly Hours Table */}
            <div className="bg-[#FAF9F6] border border-[#E7E3DC] rounded-xl overflow-hidden">
              <div className="p-4 bg-[#FFFFFF] border-b border-[#E7E3DC] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#8F7D52]" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-[#1B1D1E]">
                    {isAr ? 'جدول مواعيد العمل الأسبوعية (بتوقيت القاهرة)' : 'Weekly Operating Hours (Cairo Time)'}
                  </h3>
                </div>
                <span className="text-[11px] text-[#787D82]">
                  {isAr ? 'محدث وموثق' : 'Verified Schedule'}
                </span>
              </div>

              <div className="divide-y divide-[#EFECE6]">
                {salonData.schedule.days.map((item, idx) => {
                  const isToday = idx === activeDayIndex;

                  return (
                    <div
                      key={idx}
                      className={`px-5 py-3.5 flex items-center justify-between text-xs sm:text-sm transition-colors ${
                        isToday ? 'bg-[#F2EFE8] font-semibold text-[#1B1D1E]' : 'text-[#4A4E51]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && (
                          <span className="w-2 h-2 rounded-full bg-[#8F7D52]" title={isAr ? 'اليوم' : 'Today'} />
                        )}
                        <span>{isAr ? item.dayAr : item.dayEn}</span>
                        {isToday && (
                          <span className="text-[11px] font-bold text-[#8F7D52]">
                            {isAr ? '(اليوم)' : '(Today)'}
                          </span>
                        )}
                      </div>

                      <div className="tabular-nums">
                        {item.isClosed ? (
                          <span className="text-[#B91C1C] font-semibold">
                            {isAr ? item.hoursAr : item.hoursEn}
                          </span>
                        ) : (
                          <span>{isAr ? item.hoursAr : item.hoursEn}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Holiday and Ramadan Advisory */}
              <div className="p-4 bg-[#FFFFFF] border-t border-[#E7E3DC] flex items-start gap-2.5 text-xs text-[#595E62]">
                <AlertCircle className="w-4 h-4 text-[#8F7D52] shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  <strong className="text-[#1B1D1E] font-semibold">
                    {isAr ? 'تنبيه العطلات والمواسم: ' : 'Holiday & Ramadan notice: '}
                  </strong>
                  {isAr ? salonData.schedule.holidayNoticeAr : salonData.schedule.holidayNoticeEn}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Destination Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAF9F6] border border-[#E7E3DC] rounded-xl overflow-hidden shadow-xs">
              
              {/* Map Preview Graphic & Coordinate Lockup */}
              <div className="relative aspect-[4/3] bg-[#EAE7DF] overflow-hidden flex flex-col justify-between p-6">
                
                {/* Visual street grid background pattern */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#8F7D52 1px, transparent 1px), radial-gradient(#8F7D52 1px, #EAE7DF 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px',
                  }}
                  aria-hidden="true"
                />

                {/* Top Badge: Google Maps Public Listing */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#FFFFFF] border border-[#D5D0C7] rounded text-[11px] font-bold text-[#1B1D1E] shadow-2xs">
                    {isAr ? 'موقع النشاط على الخرائط' : 'Google Maps Listing'}
                  </span>
                  <span className="font-mono text-[11px] text-[#595E62] bg-[#FFFFFF]/80 px-2 py-0.5 rounded">
                    30.0609° N, 31.3351° E
                  </span>
                </div>

                {/* Center Pin Callout */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#1B1D1E] text-[#F8F7F4] flex items-center justify-center shadow-md animate-bounce duration-1000">
                    <MapPin className="w-6 h-6 text-[#C4B287]" />
                  </div>
                  <div className="bg-[#FFFFFF] px-3.5 py-1.5 rounded-md border border-[#D5D0C7] shadow-sm">
                    <div className="text-xs font-bold text-[#1B1D1E]">
                      {isAr ? 'صالون وجدى للرجال' : 'Wagdy Hair Saloon'}
                    </div>
                    <div className="text-[10px] text-[#63686C]">
                      {isAr ? 'شارع الصناعة، المنطقة الأولى' : 'Al Senaa St, 1st District'}
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Nasr City landmark cue */}
                <div className="relative z-10 text-[11px] text-[#595E62] text-center bg-[#FFFFFF]/90 py-1.5 px-3 rounded border border-[#E2DDD3]">
                  {isAr
                    ? 'الرمز الجغرافي: 386P+93C · مدينة نصر، القاهرة'
                    : 'Plus Code: 386P+93C · Nasr City, Cairo'}
                </div>

              </div>

              {/* Action Area Below Map */}
              <div className="p-5 bg-[#FFFFFF] space-y-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#1B1D1E]">
                    {isAr ? 'الوصول المباشر عبر الهاتف والملاحة' : 'Direct Navigation & Driving Route'}
                  </h4>
                  <p className="text-xs text-[#595E62]">
                    {isAr
                      ? 'اضغط أدناه لفتح موقع الصالون في تطبيق خرائط Google والحصول على خط السير المباشر من موقعك الحالي.'
                      : 'Open directly in Google Maps for real-time traffic, driving directions, and pedestrian routes.'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <a
                    href={salonData.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#1B1D1E] hover:bg-[#2C2F31] text-[#F8F7F4] text-xs sm:text-sm font-bold rounded-md transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#C4B287]" aria-hidden="true" />
                    <span>{isAr ? 'فتح المسار في الخرائط' : 'Get Directions'}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                  </a>

                  <a
                    href={salonData.contact.phoneTel}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#FAF8F5] hover:bg-[#EFECE6] border border-[#D5D0C7] text-[#1B1D1E] text-xs sm:text-sm font-bold rounded-md transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#8F7D52]" aria-hidden="true" />
                    <span>{isAr ? 'اتصال' : 'Call'}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
