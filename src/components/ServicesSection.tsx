import React from 'react';
import { Scissors, Sparkles, UserCheck, Droplets, HeartPulse, Phone } from 'lucide-react';
import { salonData, ServiceItem } from '../data/salonData.ts';

interface ServicesSectionProps {
  lang: 'ar' | 'en';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const iconMap: Record<string, React.ElementType> = {
    haircut: Scissors,
    fade: Sparkles,
    beard: UserCheck,
    skincare: Droplets,
    massage: HeartPulse,
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[#F8F7F4] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8F7D52]">
            {isAr ? 'عناية متكاملة للرجال' : 'Grooming & Barbering'}
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1D1E] tracking-tight">
            {isAr ? 'خدمات مذكورة في تقييمات العملاء' : 'Review-Reported Services'}
          </h2>

          <p className="text-sm sm:text-base text-[#4A4E51] leading-relaxed">
            {isAr
              ? 'تعتمد هذه القائمة على تجارب زوار الصالون الموثقة في المراجعات العامة. حرصاً على الشفافية والدقة، يُرجى الاتصال المباشر للاستفسار عن قائمة الخدمات الحالية والأسعار المعتمدة من الصالون.'
              : 'This list reflects services highlighted in verified public customer feedback. For exact current offerings and up-to-date pricing, please contact the salon directly.'}
          </p>

          {/* Official Call Notice Banner */}
          <div className="p-4 bg-[#FFFFFF] border border-[#E2DDD3] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-[#1B1D1E]">
                {isAr ? 'الأسعار وقائمة الخدمات الرسمية' : 'Current Services & Pricing'}
              </span>
              <p className="text-xs text-[#595E62]">
                {isAr
                  ? 'اتصل على 02 2401 6868 لمعرفة الأسعار الحالية ومدة الانتظار وتوافر المواعيد.'
                  : 'Call 02 2401 6868 to confirm current pricing, wait times, and availability.'}
              </p>
            </div>

            <a
              href={salonData.contact.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B1D1E] hover:bg-[#2C2F31] text-[#F8F7F4] text-xs font-bold rounded-md shrink-0 transition-colors shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#C4B287]" aria-hidden="true" />
              <span>{isAr ? 'اتصل للاستفسار' : 'Call to Inquire'}</span>
            </a>
          </div>
        </div>

        {/* Editorial Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salonData.services.items.map((service: ServiceItem, index: number) => {
            const Icon = iconMap[service.id] || Scissors;

            return (
              <div
                key={service.id}
                className="bg-[#FFFFFF] border border-[#E7E3DC] rounded-xl p-6 flex flex-col justify-between hover:border-[#C4B287] transition-all hover:shadow-sm group"
              >
                <div className="space-y-4">
                  
                  {/* Top line with Icon and Reference Label */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E7E3DC] flex items-center justify-center text-[#8F7D52] group-hover:bg-[#1B1D1E] group-hover:text-[#F8F7F4] group-hover:border-[#1B1D1E] transition-colors">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>

                    <span className="text-[11px] font-medium text-[#787D82]">
                      {isAr ? service.tagAr : service.tagEn}
                    </span>
                  </div>

                  {/* Service Title */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-[#8F7D52] font-semibold">
                      0{index + 1}.
                    </div>
                    <h3 className="text-lg font-bold text-[#1B1D1E] group-hover:text-[#8F7D52] transition-colors">
                      {isAr ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4E51] leading-relaxed">
                      {isAr ? service.descAr : service.descEn}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-[#F0ECE4] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#666B6E]">
                    {isAr ? 'تأكيد السعر بالهاتف' : 'Call to confirm price'}
                  </span>

                  <a
                    href={salonData.contact.phoneTel}
                    className="text-xs font-bold text-[#1B1D1E] group-hover:text-[#8F7D52] inline-flex items-center gap-1.5 transition-colors focus-visible:ring-1 focus-visible:ring-[#8F7D52] rounded"
                    aria-label={`${isAr ? 'اتصل للاستفسار عن' : 'Call for'} ${isAr ? service.titleAr : service.titleEn}`}
                  >
                    <span>{isAr ? 'اتصل للطلب' : 'Call to book'}</span>
                    <span aria-hidden="true">{isAr ? '←' : '→'}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
