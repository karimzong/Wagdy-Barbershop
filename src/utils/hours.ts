/**
 * Salon operating hours calculator for Wagdy Hair Saloon for Men
 * Cairo, Egypt (Africa/Cairo)
 * 
 * Verified Schedule:
 * - Monday: Closed
 * - Tuesday - Sunday: 11:00 AM - 11:00 PM (11:00 to 23:00)
 */

export interface CairoTimeParts {
  dayOfWeek: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  hour: number;      // 0 - 23
  minute: number;    // 0 - 59
}

export interface SalonStatus {
  isOpen: boolean;
  statusAr: string;
  statusEn: string;
  detailAr: string;
  detailEn: string;
}

/**
 * Parses a Date into Cairo local time components
 */
export function getCairoTimeParts(date: Date = new Date()): CairoTimeParts {
  // Using Intl.DateTimeFormat with Africa/Cairo ensures daylight saving / Egyptian timezone accuracy
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Cairo',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  let weekdayStr = '';
  let hour = 0;
  let minute = 0;

  for (const part of parts) {
    if (part.type === 'weekday') weekdayStr = part.value;
    if (part.type === 'hour') hour = parseInt(part.value, 10);
    if (part.type === 'minute') minute = parseInt(part.value, 10);
  }

  // Handle midnight 24 edge cases in some environments
  if (hour === 24) hour = 0;

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const dayOfWeek = weekdayMap[weekdayStr] ?? date.getUTCDay();

  return { dayOfWeek, hour, minute };
}

/**
 * Determines whether the salon is currently open based on Cairo local time.
 */
export function getSalonStatus(cairoPartsOrDate: CairoTimeParts | Date = new Date()): SalonStatus {
  const parts: CairoTimeParts =
    cairoPartsOrDate instanceof Date
      ? getCairoTimeParts(cairoPartsOrDate)
      : cairoPartsOrDate;

  const { dayOfWeek, hour, minute } = parts;
  const currentMinutes = hour * 60 + minute;
  const openMinutes = 11 * 60; // 11:00 AM
  const closeMinutes = 23 * 60; // 11:00 PM

  // Monday is day 1 (Closed)
  if (dayOfWeek === 1) {
    return {
      isOpen: false,
      statusAr: 'مغلق اليوم (الاثنين)',
      statusEn: 'Closed Today (Monday)',
      detailAr: 'يفتح غداً الثلاثاء في تمام الساعة 11:00 صباحاً',
      detailEn: 'Reopens Tuesday at 11:00 AM',
    };
  }

  // Tuesday through Sunday: 11:00 AM to 11:00 PM
  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    const remainingMinutes = closeMinutes - currentMinutes;
    const hoursLeft = Math.floor(remainingMinutes / 60);

    return {
      isOpen: true,
      statusAr: 'مفتوح الآن',
      statusEn: 'Open Now',
      detailAr: `يستقبلكم حتى 11:00 مساءً (${hoursLeft > 0 ? `متبقي حوالي ${hoursLeft} ساعة` : 'يغلق قريباً'})`,
      detailEn: `Welcoming you until 11:00 PM (${hoursLeft > 0 ? `~${hoursLeft}h remaining` : 'closing soon'})`,
    };
  }

  if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      statusAr: 'مغلق حالياً',
      statusEn: 'Currently Closed',
      detailAr: 'يفتح اليوم الساعة 11:00 صباحاً',
      detailEn: 'Opens today at 11:00 AM',
    };
  }

  // After 23:00
  const isTomorrowMonday = dayOfWeek === 0; // If today is Sunday, tomorrow is Monday (closed)
  return {
    isOpen: false,
    statusAr: 'مغلق الآن',
    statusEn: 'Currently Closed',
    detailAr: isTomorrowMonday
      ? 'مغلق غداً الاثنين (عطلة أسبوعية)'
      : 'يفتح غداً في تمام الساعة 11:00 صباحاً',
    detailEn: isTomorrowMonday
      ? 'Closed tomorrow (Monday weekly rest)'
      : 'Reopens tomorrow at 11:00 AM',
  };
}
