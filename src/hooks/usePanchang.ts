import { useState, useEffect } from 'react';
import type { PanchangData } from '../types/panchang';
import { getPanchangData } from '../services/panchangService';

interface UsePanchangOptions {
  latitude?: number;
  longitude?: number;
  timezone?: string;
}

export function usePanchang(date: Date, options: UsePanchangOptions = {}) {
  const [data, setData] = useState<PanchangData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const location = {
          latitude: options.latitude ?? 28.6139, // Default to New Delhi
          longitude: options.longitude ?? 77.2090,
          timezone: options.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone,
        };
        
        const panchangData = await getPanchangData(date, location);
        setData(panchangData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch panchang data'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [date, options.latitude, options.longitude, options.timezone]);

  return { data, loading, error };
}