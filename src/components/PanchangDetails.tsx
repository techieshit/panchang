import React from 'react';
import { Sunrise, Sunset, Moon, Loader2 } from 'lucide-react';
import { usePanchang } from '../hooks/usePanchang';
import { format, parseISO } from 'date-fns';

interface PanchangDetailsProps {
  date: Date;
}

const PanchangDetails: React.FC<PanchangDetailsProps> = ({ date }) => {
  const { data, loading, error } = usePanchang(date);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 text-orange-600 animate-spin" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-red-600 p-4 bg-red-50 rounded-lg">
        Failed to load panchang data. Please try again later.
      </div>
    );
  }

  const formatTime = (isoTime: string) => {
    return format(parseISO(isoTime), 'hh:mm a');
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Tithi</h3>
          <p className="text-orange-900">
            {data.tithi.paksha} Paksha {data.tithi.name}
          </p>
          <p className="text-sm text-orange-700 mt-1">
            Ends at {formatTime(data.tithi.endTime)}
          </p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Nakshatra</h3>
          <p className="text-orange-900">{data.nakshatra.name}</p>
          <p className="text-sm text-orange-700 mt-1">
            Deity: {data.nakshatra.deity}
          </p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Yoga</h3>
          <p className="text-orange-900">{data.yoga.name}</p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Karana</h3>
          <p className="text-orange-900">{data.karana.name}</p>
        </div>
      </div>

      <div className="border-t border-orange-200 pt-6 space-y-4">
        <div className="flex items-center gap-3">
          <Sunrise className="h-5 w-5 text-orange-600" />
          <div>
            <p className="text-sm text-gray-600">Sunrise</p>
            <p className="font-medium">{data.sunrise.time}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Sunset className="h-5 w-5 text-orange-600" />
          <div>
            <p className="text-sm text-gray-600">Sunset</p>
            <p className="font-medium">{data.sunset.time}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Moon className="h-5 w-5 text-orange-600" />
          <div>
            <p className="text-sm text-gray-600">Moonrise</p>
            <p className="font-medium">{data.moonrise.time}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Rahu Kaal</h3>
        <p className="text-orange-800 font-medium">
          {data.rahuKaal.start.time} - {data.rahuKaal.end.time}
        </p>
      </div>
    </div>
  );
}

export default PanchangDetails;