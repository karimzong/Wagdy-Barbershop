import React from 'react';
import { UserCheck, Sparkles, Compass, CheckCircle } from 'lucide-react';
import { salonData } from '../data/salonData.ts';

interface ExperienceSectionProps {
  lang: 'ar' | 'en';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const themeIcons = [UserCheck, Sparkles, Compass];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8F7D52]">
            {isAr ? 'تجربة وجدى' : 'The Wagdy Experience'}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1D1E] tracking-tight">
            {isAr ? 'محاور أشاد بها رواد الصالون' : 'Core Themes in Customer Feedback'}
          </h2>

          <p className="text-sm sm:text-base text-[#4A4E51] leading-relaxed">
            {isAr
              ? 'تجمع تقييمات رواد صالون وجدى على تميز أسلوب الاستقبال، وهدوء الأجواء، والحرص على فهم ذوق العميل، مما يجعل الزيارة تجربة مريحة وموثوقة لرجال وسكان مدينة نصر.'
              : 'Customer feedback consistently highlights courteous hospitality, a comfortable modern atmosphere, and close attention to personal style preferences.'}
          </p>
        </div>

        {/* 3 Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salonData.experienceThemes.map((theme, idx) => {
            const Icon = themeIcons[idx] || CheckCircle;

            return (
              <div
                key={idx}
                className="bg-[#FAF9F6] border border-[#E7E3DC] rounded-xl p-7 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-lg bg-[#FFFFFF] border border-[#E2DDD3] flex items-center justify-center text-[#8F7D52]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-bold text-[#1B1D1E]">
                    {isAr ? theme.titleAr : theme.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A4E51] leading-relaxed">
                    {isAr ? theme.descAr : theme.descEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFECE6] flex items-center gap-2 text-[11px] text-[#787D82]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8F7D52]" aria-hidden="true" />
                  <span>
                    {isAr ? 'مستخلص من آراء الزوار العامة' : 'Observed from public visitor reviews'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Note About Special Amenities */}
        <div className="mt-10 p-5 rounded-lg bg-[#F8F7F4] border border-[#E7E3DC] text-xs text-[#595E62] leading-relaxed">
          <p>
            <strong className="text-[#1B1D1E] font-semibold">
              {isAr ? 'ملاحظة حول الخدمات والضيافة: ' : 'Note regarding amenities: '}
            </strong>
            {isAr
              ? 'تستند هذه الفقرات إلى انطباعات ومراجعات عملاء الصالون وليست شهادات تجارية معلنة. أشار بعض الزوار في مراجعاتهم إلى تقديم مشروب ترحيبي أثناء الانتظار؛ ولا نعلن عن ذلك كخدمة تعاقدية مضمونة حتى يتم اعتماده رسمياً من إدارة الصالون.'
              : 'These points represent customer review sentiments rather than formal warranties. Certain visitor reviews mention a welcome beverage while waiting; this is not advertised as a guaranteed amenity pending formal owner confirmation.'}
          </p>
        </div>

      </div>
    </section>
  );
};
