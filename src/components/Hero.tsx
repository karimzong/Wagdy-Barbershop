import React, { useState, useEffect } from 'react';
import { Phone, Navigation, Clock, Star, ShieldCheck } from 'lucide-react';
import { salonData } from '../data/salonData.ts';
import { getSalonStatus, SalonStatus } from '../utils/hours.ts';

interface HeroProps {
  lang: 'ar' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [status, setStatus] = useState<SalonStatus>(() => getSalonStatus());

  useEffect(() => {
    // Update live status every minute
    const interval = setInterval(() => {
      setStatus(getSalonStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E7E3DC] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid: Editorial Brand Story + Authentic Interior Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Content Column (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Cairo Status & District Tag */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#4A4E51]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFFF] border border-[#E7E3DC] rounded-md shadow-2xs font-semibold">
                <span
                  className={`w-2 h-2 rounded-full ${
                    status.isOpen ? 'bg-[#2E7D32]' : 'bg-[#C62828]'
                  }`}
                  aria-hidden="true"
                />
                <span className="text-[#1B1D1E]">{isAr ? status.statusAr : status.statusEn}</span>
                <span className="text-[#787D82] text-[11px]">· {isAr ? status.detailAr : status.detailEn}</span>
              </span>

              <span className="text-[#787D82] hidden sm:inline" aria-hidden="true">·</span>
              
              <span className="text-[#595E62]">
                {isAr ? 'المنطقة الأولى، مدينة نصر، القاهرة' : 'First District, Nasr City, Cairo'}
              </span>
            </div>

            {/* Arabic-first Primary Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1D1E] tracking-tight leading-[1.25]">
                {isAr ? (
                  <>
                    عناية وحلاقة رجالية راقية
                    <br />
                    <span className="text-[#8F7D52] font-serif">بأيدي محترفة وبيئة مريحة</span>
                  </>
                ) : (
                  <>
                    Refined Barbering & Grooming
                    <br />
                    <span className="text-[#8F7D52] font-serif">In the Heart of Nasr City</span>
                  </>
                )}
              </h1>
              
              {/* Supporting sentence strictly based on verified facts */}
              <p className="text-base sm:text-lg text-[#4A4E51] leading-relaxed max-w-2xl">
                {isAr
                  ? 'صالون وجدى للرجال يرحب بكم في شارع الصناعة بمدينة نصر، بتقديم قصات وتدريجات متقنة، وتحديد متناسق للحية، وعناية بالبشرة في أجواء عصرية ومشرقة.'
                  : 'Wagdy Hair Saloon for Men welcomes you on Al Senaa St, Nasr City, delivering precision haircuts, clean zero fades, tailored beard detailing, and facial care in a bright, modern setting.'}
              </p>
            </div>

            {/* Verified Public Rating Preview Banner */}
            <a
              href={salonData.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 p-3 bg-[#FFFFFF] border border-[#E7E3DC] rounded-lg hover:border-[#C4B287] transition-colors group text-xs text-[#2A2D2F] w-full sm:w-auto"
            >
              <div className="flex items-center gap-1.5 text-[#D97706] font-bold text-sm">
                <Star className="w-4 h-4 fill-[#D97706] text-[#D97706]" aria-hidden="true" />
                <span className="font-mono tabular-nums">{salonData.rating.score}</span>
              </div>
              <span className="text-[#B5B9BC] hidden sm:inline" aria-hidden="true">/</span>
              <span className="text-[#3A3D40]">
                {isAr
                  ? `بناءً على ${salonData.rating.reviewCount} مراجعة على خرائط Google`
                  : `Based on ${salonData.rating.reviewCount} reviews on Google Maps`}
              </span>
              <span className="text-[#8F7D52] font-semibold group-hover:underline inline-flex items-center gap-1 ms-auto sm:ms-0">
                {isAr ? 'عرض التقييمات ←' : 'View listing →'}
              </span>
            </a>

            {/* Conversion CTAs: Working Phone Call + Directions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              {/* Primary: Call to Book */}
              <a
                href={salonData.contact.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1B1D1E] hover:bg-[#2C2F31] text-[#F8F7F4] font-bold text-sm sm:text-base rounded-md transition-all shadow-md active:scale-98"
              >
                <Phone className="w-5 h-5 text-[#C4B287]" aria-hidden="true" />
                <span>{isAr ? 'اتصل للحجز: 02 2401 6868' : 'Call to Book: 02 2401 6868'}</span>
              </a>

              {/* Secondary: Directions to Maps */}
              <a
                href={salonData.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFFFFF] hover:bg-[#EFECE6] border border-[#D5D0C7] text-[#1B1D1E] font-semibold text-sm sm:text-base rounded-md transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#8F7D52]" aria-hidden="true" />
                <span>{isAr ? 'الاتجاهات في خرائط Google' : 'Directions in Google Maps'}</span>
              </a>
            </div>

            {/* Reassurance Notes */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#63686C] pt-1">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8F7D52]" aria-hidden="true" />
                <span>{isAr ? 'الثلاثاء – الأحد: 11:00 ص – 11:00 م (الاثنين مغلق)' : 'Tue – Sun: 11:00 AM – 11:00 PM (Mon Closed)'}</span>
              </span>
              <span className="text-[#CBD0D4]" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8F7D52]" aria-hidden="true" />
                <span>{isAr ? 'بيانات معتمدة وموثقة من السجل التجاري' : 'Verified public business details'}</span>
              </span>
            </div>

          </div>

          {/* Genuine Interior Photo Column (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-xl overflow-hidden border border-[#DCD7CE] bg-[#FFFFFF] shadow-lg">
              
              {/* Salon Image */}
              <div className="relative aspect-[9/14] sm:aspect-[4/5] lg:aspect-[9/13] w-full overflow-hidden bg-[#202224]">
                <img
                  src="/assets/aistudio/wagdy_salon_visual_reference_69918021.jpg"
                  alt={
                    isAr
                      ? 'التصميم الداخلي لصالون وجدى للرجال بمدينة نصر: كراسي حلاقة سوداء، سقف هندسي عصري، جدران بلون الحجر الدافئ، ونباتات خضراء'
                      : 'Interior of Wagdy Hair Saloon for Men in Nasr City: modern black barber chairs, geometric ceiling accents, warm limestone walls, and plants'
                  }
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Refined subtle bottom overlay to ensure text contrast for the authentic photo caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121314]/85 via-transparent to-transparent pointer-events-none" />

                {/* In-photo Authentic Label */}
                <div className="absolute bottom-4 left-4 right-4 text-[#F8F7F4] text-xs space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#D5C7A3]">
                    <span>{isAr ? 'المساحة الداخلية الفعلية للصالون' : 'Verified Interior View'}</span>
                    <span className="font-mono text-[10px] tracking-wide">NASR CITY</span>
                  </div>
                  <p className="text-[12px] text-[#E0DCD3] line-clamp-2 leading-relaxed">
                    {isAr
                      ? 'محطات حلاقة مجهزة، مرايا واسعة، سقف خشبي بتصميم هندسي وإضاءة مريحة تضمن عناية فائقة.'
                      : 'Equipped barber stations, wide illuminated mirrors, modern geometric wood ceiling, and warm limestone finishes.'}
                  </p>
                </div>
              </div>

              {/* Photo Verification Footnote */}
              <div className="px-4 py-3 bg-[#FAF8F5] border-t border-[#E7E3DC] flex items-center justify-between text-xs text-[#595E62]">
                <span className="font-medium">
                  {isAr ? 'صالون وجدى للرجال · القاهرة' : 'Wagdy Hair Saloon · Cairo'}
                </span>
                <span className="text-[#8F7D52] font-semibold text-[11px]">
                  {isAr ? 'توثيق رسمي' : 'Authentic Reference'}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
