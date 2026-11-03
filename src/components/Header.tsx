import React, { useState } from 'react';
import { Phone, MapPin, Globe, Menu, X } from 'lucide-react';
import { salonData } from '../data/salonData.ts';

interface HeaderProps {
  lang: 'ar' | 'en';
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = lang === 'ar';

  const navLinks = [
    { href: '#services', labelAr: 'الخدمات', labelEn: 'Services' },
    { href: '#experience', labelAr: 'عن الصالون', labelEn: 'About' },
    { href: '#schedule', labelAr: 'المواعيد', labelEn: 'Hours' },
    { href: '#visit', labelAr: 'الموقع والزيارة', labelEn: 'Visit' },
    { href: '#faq', labelAr: 'الأسئلة الشائعة', labelEn: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#E7E3DC] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Zone 1: Wordmark */}
          <a
            href="#"
            className="flex flex-col shrink-0 group focus:outline-none"
            aria-label={isAr ? 'صالون وجدى للرجال - الصفحة الرئيسية' : 'Wagdy Hair Saloon - Homepage'}
          >
            <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#1B1D1E] font-serif uppercase">
              WAGDY
            </span>
            <span className="text-xs font-semibold text-[#8F7D52] tracking-wide -mt-1">
              {salonData.identity.nameAr}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#4A4E51]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap hover:text-[#1B1D1E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#8F7D52] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Language toggle + Primary Call CTA) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#1B1D1E] bg-[#EFECE6] hover:bg-[#E5E0D8] rounded-md transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#8F7D52]"
              aria-label={isAr ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-[#8F7D52]" aria-hidden="true" />
              <span>{isAr ? 'English' : 'العربية'}</span>
            </button>

            {/* Primary CTA: Call to Book */}
            <a
              href={salonData.contact.phoneTel}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#1B1D1E] hover:bg-[#2C2F31] text-[#F8F7F4] text-xs sm:text-sm font-bold rounded-md transition-all shadow-sm active:scale-95 whitespace-nowrap"
              aria-label={isAr ? 'اتصل لحجز موعد: 02 2401 6868' : 'Call to book: 02 2401 6868'}
            >
              <Phone className="w-4 h-4 text-[#C4B287]" aria-hidden="true" />
              <span>{isAr ? 'اتصل للحجز' : 'Call to book'}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-[#1B1D1E] hover:bg-[#EFECE6] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8F7D52]"
              aria-expanded={mobileMenuOpen}
              aria-label={isAr ? 'فتح القائمة الرئيسية' : 'Toggle navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E7E3DC] bg-[#F8F7F4] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#1B1D1E] hover:bg-[#EFECE6] rounded-md transition-colors"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-[#E7E3DC] flex flex-col gap-2">
            <a
              href={salonData.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#EFECE6] hover:bg-[#E5E0D8] text-[#1B1D1E] text-sm font-bold rounded-md transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#8F7D52]" aria-hidden="true" />
              <span>{isAr ? 'فتح الاتجاهات في الخرائط' : 'Get Directions in Maps'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
