import React from 'react';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { salonData } from '../data/salonData.ts';

interface FooterProps {
  lang: 'ar' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-[#17181A] text-[#E0DCD3] border-t border-[#2A2C2E] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2A2C2E]">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-2xl font-extrabold tracking-wider text-[#FFFFFF] font-serif uppercase">
                WAGDY
              </span>
              <div className="text-sm font-bold text-[#C4B287]">
                {salonData.identity.nameAr}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A8A49C] leading-relaxed max-w-sm">
              {isAr
                ? 'صالون حلاقة وتصفيف شعر رجالي في المنطقة الأولى بمدينة نصر. وجهة موثوقة للقص والتدريج وتحديد اللحية والعناية بالبشرة بأجواء عصرية مريحة.'
                : "Men's barbershop in the First District of Nasr City. A trusted neighborhood destination for haircuts, zero fades, beard sculpting, and facial grooming in a comfortable contemporary space."}
            </p>

            <div className="pt-2">
              <span className="text-[11px] text-[#7A7770]">
                {isAr ? 'الإدارة: ' : 'Owner: '}
                <strong className="text-[#C4B287] font-semibold">{isAr ? salonData.identity.ownerAr : salonData.identity.ownerEn}</strong>
              </span>
            </div>
          </div>

          {/* Contact & Address Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C4B287]">
              {isAr ? 'التواصل والموقع' : 'Contact & Location'}
            </h3>

            <div className="space-y-2.5 text-xs text-[#C7C3BB]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C4B287] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-[#7A7770] text-[11px]">{isAr ? 'الهاتف الأرضي المعتمد:' : 'Verified Landline:'}</div>
                  <a
                    href={salonData.contact.phoneTel}
                    className="font-mono font-bold text-sm text-[#FFFFFF] hover:text-[#C4B287] transition-colors"
                  >
                    {salonData.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#C4B287] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-[#7A7770] text-[11px]">{isAr ? 'العنوان:' : 'Address:'}</div>
                  <p className="leading-snug">
                    {isAr ? salonData.contact.addressAr : salonData.contact.addressEn}
                  </p>
                  <span className="font-mono text-[10px] text-[#8F7D52] block mt-0.5">
                    Plus Code: {salonData.contact.plusCode}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Schedule & Directions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C4B287]">
              {isAr ? 'ساعات العمل' : 'Opening Hours'}
            </h3>

            <div className="space-y-1.5 text-xs text-[#C7C3BB]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C4B287]" aria-hidden="true" />
                <span>{isAr ? 'الثلاثاء – الأحد:' : 'Tue – Sun:'}</span>
                <span className="font-mono text-[#FFFFFF]">11:00 AM – 11:00 PM</span>
              </div>
              <div className="text-[#E07A5F] text-[11px] ps-5">
                {isAr ? 'الاثنين: عطلة أسبوعية' : 'Monday: Closed'}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={salonData.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#25282B] hover:bg-[#32363A] text-[#F8F7F4] text-xs font-semibold rounded-md border border-[#3C4044] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C4B287]" aria-hidden="true" />
                <span>{isAr ? 'الاتجاهات في الخرائط' : 'Google Maps Route'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Attribution Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7770]">
          <p>
            © {new Date().getFullYear()} {salonData.identity.nameEn} — {salonData.identity.nameAr}.
          </p>

          <p className="text-[11px] text-center sm:text-end">
            {isAr
              ? 'تصميم رقمي معتمد على البيانات العامة الموثقة وسجل المراجعات لصالون وجدى بمدينة نصر.'
              : 'Digital brand showcase developed from verified public records and customer feedback.'}
          </p>
        </div>

      </div>
    </footer>
  );
};
