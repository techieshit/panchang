import { format } from 'date-fns';
// import { zonedTimeToUtc } from 'date-fns-tz';
import type { PanchangData } from '../types/panchang';

const API_BASE_URL = 'https://api.example.com/panchang'; // Replace with actual API URL

interface Location {
  latitude: number;
  longitude: number;
  timezone: string;
}

export async function getPanchangData(date: Date, location: Location): Promise<PanchangData> {
  try {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const response = await fetch(`${API_BASE_URL}/daily`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: formattedDate,
        latitude: location.latitude,
        longitude: location.longitude,
        timezone: location.timezone,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch panchang data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching panchang data:', error);
    // Return mock data for development
    return getMockPanchangData(date, location.timezone);
  }
}

function getMockPanchangData(date: Date, timezone: string): PanchangData {
  // const zonedDate = zonedTimeToUtc(date, timezone);
  
  return {
    date: format(zonedDate, 'yyyy-MM-dd'),
    tithi: {
      name: 'Dwitiya',
      paksha: 'Shukla',
      number: 2,
      endTime: '2024-03-20T15:45:00Z',
    },
    nakshatra: {
      name: 'Rohini',
      number: 4,
      endTime: '2024-03-20T18:30:00Z',
      ruler: 'Moon',
      deity: 'Brahma',
    },
    yoga: {
      name: 'Vishkambha',
      number: 1,
      endTime: '2024-03-20T20:15:00Z',
    },
    karana: {
      name: 'Bava',
      number: 1,
      endTime: '2024-03-20T15:45:00Z',
    },
    sunrise: {
      time: '06:32:00',
      timezone,
    },
    sunset: {
      time: '18:45:00',
      timezone,
    },
    moonrise: {
      time: '20:15:00',
      timezone,
    },
    moonset: {
      time: '07:30:00',
      timezone,
    },
    rahuKaal: {
      start: {
        time: '10:30:00',
        timezone,
      },
      end: {
        time: '12:00:00',
        timezone,
      },
    },
  };
}