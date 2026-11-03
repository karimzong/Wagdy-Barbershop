/**
 * Wagdy Hair Saloon for Men — Business Data & Localization Dictionary
 * Centralized content source for easy owner review and maintenance.
 * Only verified facts from public business records and customer reviews.
 */

export interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  tagAr: string;
  tagEn: string;
}

export interface FaqItem {
  qAr: string;
  qEn: string;
  aAr: string;
  aEn: string;
}

export interface SalonData {
  identity: {
    nameEn: string;
    nameAr: string;
    taglineEn: string;
    taglineAr: string;
    ownerEn: string;
    ownerAr: string;
    businessTypeEn: string;
    businessTypeAr: string;
  };
  contact: {
    phoneDisplay: string;
    phoneTel: string;
    addressEn: string;
    addressAr: string;
    plusCode: string;
    googleMapsUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  rating: {
    score: number;
    maxScore: number;
    reviewCount: number;
    checkedDateEn: string;
    checkedDateAr: string;
    sourceEn: string;
    sourceAr: string;
  };
  schedule: {
    days: Array<{
      dayEn: string;
      dayAr: string;
      hoursEn: string;
      hoursAr: string;
      isClosed?: boolean;
    }>;
    holidayNoticeEn: string;
    holidayNoticeAr: string;
  };
  services: {
    disclaimerEn: string;
    disclaimerAr: string;
    items: ServiceItem[];
  };
  experienceThemes: Array<{
    titleEn: string;
    titleAr: string;
    descEn: string;
    descAr: string;
  }>;
  faqs: FaqItem[];
}

export const salonData: SalonData = {
  identity: {
    nameEn: 'Wagdy Hair Saloon for Men',
    nameAr: 'صالون وجدى للرجال',
    taglineEn: "Precision men's grooming & contemporary barbershop in Nasr City.",
    taglineAr: 'صالون الحلاقة والعناية الرجالية المتكاملة بالمنطقة الأولى بمدينة نصر.',
    ownerEn: 'Mr. Wagdy',
    ownerAr: 'الأستاذ وجدي',
    businessTypeEn: "Men's Barber & Hair Salon",
    businessTypeAr: 'صالون حلاقة وتصفيف شعر رجالي',
  },
  contact: {
    phoneDisplay: '02 2401 6868',
    phoneTel: 'tel:+20224016868',
    addressEn: '386P+93C, Al Senaa St, Al Mintaqah Al Oula, Nasr City, Cairo Governorate 4450151, Egypt',
    addressAr: '386P+93C، شارع الصناعة، المنطقة الأولى، مدينة نصر، محافظة القاهرة 4450151',
    plusCode: '386P+93C',
    googleMapsUrl: 'https://www.google.com/maps/place/Wagdy+Hair+Saloon+for+Men/@30.0609359,31.3351548,17z/data=!4m6!3m5!1s0x14583e68ee2327bb:0x266171c3d107b499!8m2!3d30.0609359!4d31.3351548!16s%2Fg%2F1pp2vb4sn',
    coordinates: {
      lat: 30.0609359,
      lng: 31.3351548,
    },
  },
  rating: {
    score: 4.7,
    maxScore: 5.0,
    reviewCount: 135,
    checkedDateEn: '2 November 2026',
    checkedDateAr: '2 نوفمبر 2026',
    sourceEn: 'Google Maps Public Listing',
    sourceAr: 'الملف التجاري على خرائط Google',
  },
  schedule: {
    days: [
      { dayEn: 'Monday', dayAr: 'الاثنين', hoursEn: 'Closed', hoursAr: 'مغلق (عطلة أسبوعية)', isClosed: true },
      { dayEn: 'Tuesday', dayAr: 'الثلاثاء', hoursEn: '11:00 AM – 11:00 PM', hoursAr: '11:00 ص – 11:00 م' },
      { dayEn: 'Wednesday', dayAr: 'الأربعاء', hoursEn: '11:00 AM – 11:00 PM', hoursAr: '11:00 ص – 11:00 م' },
      { dayEn: 'Thursday', dayAr: 'الخميس', hoursEn: '11:00 AM – 11:00 PM', hoursAr: '11:00 ص – 11:00 م' },
      { dayEn: 'Friday', dayAr: 'الجمعة', hoursEn: '11:00 AM – 11:00 PM', hoursAr: '11:00 ص – 11:00 م' },
      { dayEn: 'Saturday', dayAr: 'السبت', hoursEn: '11:00 AM – 11:00 PM', hoursAr: '11:00 ص – 11:00 م' },
      { dayEn: 'Sunday', dayAr: 'الأحد', hoursEn: '11:00 AM – 11:00 PM', hoursAr: '11:00 ص – 11:00 م' },
    ],
    holidayNoticeEn: 'Hours can change during Ramadan, Eid, and public holidays. Please call ahead if timing is important.',
    holidayNoticeAr: 'قد تتغير مواعيد العمل خلال شهر رمضان المبارك، وإجازات الأعياد، والعطلات الرسمية. يُرجى الاتصال مسبقاً للتأكيد.',
  },
  services: {
    disclaimerEn: 'Services below are reported in customer feedback and subject to confirmation. Call 02 2401 6868 for current services and pricing.',
    disclaimerAr: 'الخدمات التالية مستندة إلى تجارب الزوار في التقييمات العامة وتخضع لتأكيد الصالون. يرجى الاتصال على 0224016868 لمعرفة القائمة والأسعار المعتمدة.',
    items: [
      {
        id: 'haircut',
        titleEn: "Men's Haircut & Styling",
        titleAr: 'قص وتصفيف الشعر الرجالي',
        descEn: 'Classic and modern cuts tailored to your preferences, facial shape, and hair density.',
        descAr: 'قص احترافي وتصفيف متقن يراعي شكل الوجه وكثافة الشعر، بمظهر كلاسيكي أنيق أو عصري.',
        tagEn: 'Review-reported service',
        tagAr: 'مذكور في تقييمات العملاء',
      },
      {
        id: 'fade',
        titleEn: 'Zero Fade & Precision Taper',
        titleAr: 'تدريج دقيق (زيرو فيد)',
        descEn: 'Seamless graduation, sharp hairline detailing, and smooth skin-taper transitions.',
        descAr: 'تدريج متناسق ونظيف للجانبين والخلف مع تحديد دقيق لخطوط الشعر وتدرج انسيابي.',
        tagEn: 'Review-reported service',
        tagAr: 'مذكور في تقييمات العملاء',
      },
      {
        id: 'beard',
        titleEn: 'Beard Trimming & Outlining',
        titleAr: 'تشذيب وتحديد اللحية والشارب',
        descEn: 'Careful sculpting, symmetry alignment, and sharp razor definition with skin comfort.',
        descAr: 'تنسيق متناسق لشعر اللحية وتحديد الحواف بالموس بدقة واحترافية تحمي راحة البشرة.',
        tagEn: 'Review-reported service',
        tagAr: 'مذكور في تقييمات العملاء',
      },
      {
        id: 'skincare',
        titleEn: 'Facial Cleansing & Post-Shave Care',
        titleAr: 'عناية وتنظيف للبشرة',
        descEn: 'Invigorating skincare routine designed to cleanse pores and refresh tired facial skin.',
        descAr: 'جلسة عناية منعشة للبشرة بعد الحلاقة، تنقية للمسام وتخفيف لتهيج البشرة بعد التحديد.',
        tagEn: 'Review-reported service',
        tagAr: 'مذكور في تقييمات العملاء',
      },
      {
        id: 'massage',
        titleEn: 'Head & Shoulder Relief',
        titleAr: 'جلسة مساج وتدليك استرخائي',
        descEn: 'Targeted neck, head, and shoulder massage to unwind after your haircut.',
        descAr: 'تدليك مريح للرقبة وأعلى الكتفين لتخفيف التوتر واستكمال تجربة العناية براحة تامة.',
        tagEn: 'Review-reported service',
        tagAr: 'مذكور في تقييمات العملاء',
      },
    ],
  },
  experienceThemes: [
    {
      titleEn: 'Personal Attention & Consultation',
      titleAr: 'اهتمام شخصي واستماع دقيق',
      descEn: 'Customers frequently highlight the friendly, unhurried consultation before the cut begins, ensuring the result matches personal preference.',
      descAr: 'يشيد رواد الصالون بالتعامل الودود الراقي والحرص على فهم طلب العميل وتفاصيل القصة المرغوبة بدقة قبل البدء.',
    },
    {
      titleEn: 'Clean, Bright & Modern Space',
      titleAr: 'بيئة نظيفة ومريحة وعصرية',
      descEn: 'Bright interior featuring warm limestone surfaces, comfortable black barber chairs, geometric ceiling accents, and vibrant greenery.',
      descAr: 'تصميم مشرق يتميز بأرضيات وحوائط دافئة بلون الحجر الطبيعي، كراسي حلاقة سوداء مريحة، وسقف هندسي مودرن مع نباتات طبيعية تضفي لمسة حيوية.',
    },
    {
      titleEn: 'Focus on Precision & Detail',
      titleAr: 'دقة الصنعة والتشذيب المتوازن',
      descEn: 'Reviews praise the meticulous focus on neat edges, smooth fades, and patient beard symmetry.',
      descAr: 'إشادة متكررة بالحرص على التفاصيل الدقيقة، تدرج الشعر النظيف، وتحديد أطراف اللحية بخطوط مستقيمة ومتقنة.',
    },
  ],
  faqs: [
    {
      qEn: 'Where is the salon located in Nasr City?',
      qAr: 'أين يقع صالون وجدى في مدينة نصر؟',
      aEn: 'The salon is located on Al Senaa St, Al Mintaqah Al Oula (First District), Nasr City, Cairo (Plus Code: 386P+93C). You can open directions directly via Google Maps on this page.',
      aAr: 'يقع الصالون في شارع الصناعة، المنطقة الأولى، مدينة نصر، القاهرة (الرمز التعريفي: 386P+93C). يمكنك فتح مسار الاتجاهات مباشرة عبر خرائط Google من خلال الموقع.',
    },
    {
      qEn: 'How do I check wait times or schedule a visit?',
      qAr: 'كيف يمكنني الاستفسار عن المواعيد أو الانتظار؟',
      aEn: 'Please call the salon directly on 02 2401 6868 to inquire about current wait times, schedule your visit, or confirm stylist availability.',
      aAr: 'يُرجى الاتصال مباشرة برقم الصالون 0224016868 لمعرفة وقت الانتظار الحالي، وترتيب زيارتك، أو التأكد من تواجد الحلاق.',
    },
    {
      qEn: 'Why is the salon closed on Mondays?',
      qAr: 'لماذا يغلق الصالون أبوابه يوم الاثنين؟',
      aEn: 'Monday is the verified weekly rest day for the team. The salon operates Tuesday through Sunday from 11:00 AM until 11:00 PM.',
      aAr: 'يوم الاثنين هو يوم العطلة الأسبوعية المعتمدة للصالون. ويستقبلكم الصالون من الثلاثاء إلى الأحد من الساعة 11:00 صباحاً وحتى 11:00 مساءً.',
    },
    {
      qEn: 'Where can I find current prices and the full service list?',
      qAr: 'أين يمكنني معرفة الأسعار الحالية وقائمة الخدمات المعتمدة؟',
      aEn: 'To ensure accurate and up-to-date pricing without guesswork, please call 02 2401 6868. The team will be glad to give you exact details.',
      aAr: 'حرصاً على الشفافية وتجنب التقديرات غير المؤكدة، يرجى الاتصال على 0224016868 للاستفسار عن أسعار وقائمة الخدمات المتاحة حالياً.',
    },
    {
      qEn: 'Do hours change during Ramadan or holidays?',
      qAr: 'هل تتغير مواعيد العمل في رمضان والأعياد الرسمية؟',
      aEn: 'Yes, operating hours may adjust during the holy month of Ramadan, Eid al-Fitr, Eid al-Adha, and Egyptian public holidays. Calling ahead is strongly recommended.',
      aAr: 'نعم، قد تتغير أوقات العمل في شهر رمضان المبارك وأيام عيدي الفطر والأضحى والعطلات الرسمية. ننصح بالاتصال هاتفياً مسبقاً للتأكد.',
    },
  ],
};
