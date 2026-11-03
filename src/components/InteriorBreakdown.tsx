import React from 'react';
import { Layers, Eye, SunMedium, Leaf } from 'lucide-react';

interface InteriorBreakdownProps {
  lang: 'ar' | 'en';
}

export const InteriorBreakdown: React.FC<InteriorBreakdownProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const designElements = [
    {
      icon: Layers,
      titleAr: 'سقف هندسي معاصر',
      titleEn: 'Geometric Coffered Ceiling',
      descAr: 'تصميم خشبي أسود مع إضاءة موجهة تمنح الحلاق رؤية دقيقة وتوفر للزائر إضاءة ناعمة غير مجهدة.',
      descEn: 'Architectural black timber grid with recessed downlighting engineered for precision barbering.',
    },
    {
      icon: Eye,
      titleAr: 'مرايا بانورامية مضيئة',
      titleEn: 'Expansive Illuminated Mirrors',
      descAr: 'محطات عمل واسعة تعكس إشراقة المكان وتمنحك متابعة تفاصيل التدريج والتحديد خطوة بخطوة.',
      descEn: 'Wide reflection counters enabling full visibility and comfortable interaction throughout the cut.',
    },
    {
      icon: SunMedium,
      titleAr: 'حجر جيري وألوان دافئة',
      titleEn: 'Warm Limestone & Stone Finishes',
      descAr: 'تدرجات العاج والحجر الدافئ تمنح المكان طابعاً هادئاً ومريحاً بعيداً عن صخب المدينة.',
      descEn: 'Ivory and travertine textures create an inviting, luminous backdrop that feels calm and established.',
    },
    {
      icon: Leaf,
      titleAr: 'لمسات نباتية حيوية',
      titleEn: 'Potted Botanical Accents',
      descAr: 'نباتات خضراء طبيعية موزعة بأناقة تضفي انتعاشاً وطاقة إيجابية على مساحة الانتظار والحلاقة.',
      descEn: 'Natural green plants thoughtfully placed to add freshness and an organic touch to the salon floor.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8F7D52]">
            {isAr ? 'بيئة المكان وتصميمه' : 'Space & Architecture'}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1D1E] tracking-tight">
            {isAr ? 'مستوحى من التفاصيل الحقيقية لصالون وجدى' : 'Curated Around the Authentic Space'}
          </h2>

          <p className="text-sm sm:text-base text-[#4A4E51] leading-relaxed">
            {isAr
              ? 'تعتمد هوية هذا الموقع على الملامح المعمارية والجمالية للمقر الفعلي للصالون في مدينة نصر، حيث تتناغم الخطوط الهندسية العصرية مع دفء الحجر الطبيعي.'
              : "The aesthetic identity of this digital experience draws directly from the salon's physical space in Nasr City, harmonizing contemporary geometry with warm stone textures."}
          </p>
        </div>

        {/* 4 Architectural Aspects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designElements.map((elem, idx) => {
            const Icon = elem.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E7E3DC] rounded-xl p-6 flex flex-col justify-between space-y-3 hover:border-[#8F7D52] transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E7E3DC] flex items-center justify-center text-[#8F7D52]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-base font-bold text-[#1B1D1E]">
                    {isAr ? elem.titleAr : elem.titleEn}
                  </h3>

                  <p className="text-xs text-[#595E62] leading-relaxed">
                    {isAr ? elem.descAr : elem.descEn}
                  </p>
                </div>

                <div className="pt-2 text-[11px] text-[#8F7D52] font-semibold">
                  {isAr ? `عنصر ديكور 0${idx + 1}` : `Interior Detail 0${idx + 1}`}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
