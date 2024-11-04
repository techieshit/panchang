import React from 'react';
import { Calendar } from 'lucide-react';

interface FestivalsProps {
  selectedDate: Date;
}

const Festivals: React.FC<FestivalsProps> = () => {
  // Mock data - in a real app, this would be fetched from an API
  const festivals = [
    {
      date: "March 25, 2024",
      name: "Holika Dahan",
      description: "The burning of Holika, celebrated on the eve of Holi",
      type: "Major Festival"
    },
    {
      date: "March 26, 2024",
      name: "Holi",
      description: "Festival of colors celebrating the victory of good over evil",
      type: "Major Festival"
    },
    {
      date: "April 9, 2024",
      name: "Gudi Padwa",
      description: "Maharashtrian New Year",
      type: "Regional Festival"
    },
    {
      date: "April 14, 2024",
      name: "Baisakhi",
      description: "Harvest festival celebrated in Punjab",
      type: "Regional Festival"
    }
  ];

  return (
    <div className="space-y-6">
      {festivals.map((festival, index) => (
        <div
          key={index}
          className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            <Calendar className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{festival.name}</h3>
              <p className="text-orange-800 text-sm mb-2">{festival.date}</p>
              <p className="text-gray-600">{festival.description}</p>
              <span className="inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full bg-orange-100 text-orange-800">
                {festival.type}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Festivals;