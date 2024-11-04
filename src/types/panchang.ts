export interface Tithi {
  name: string;
  paksha: 'Shukla' | 'Krishna';
  number: number;
  endTime: string;
}

export interface Nakshatra {
  name: string;
  number: number;
  endTime: string;
  ruler: string;
  deity: string;
}

export interface Yoga {
  name: string;
  number: number;
  endTime: string;
}

export interface Karana {
  name: string;
  number: number;
  endTime: string;
}

export interface AstroTiming {
  time: string;
  timezone: string;
}

export interface PanchangData {
  date: string;
  tithi: Tithi;
  nakshatra: Nakshatra;
  yoga: Yoga;
  karana: Karana;
  sunrise: AstroTiming;
  sunset: AstroTiming;
  moonrise: AstroTiming;
  moonset: AstroTiming;
  rahuKaal: {
    start: AstroTiming;
    end: AstroTiming;
  };
}