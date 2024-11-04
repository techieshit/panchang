import React, { useState } from 'react';
import PanchangDetails from './components/PanchangDetails';
import { Calendar } from 'lucide-react';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-2xl mx-auto p-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-orange-800 mb-2">Hindu Calendar</h1>
          <p className="text-orange-600">Daily Panchang and Astrological Details</p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="h-6 w-6 text-orange-600" />
            <input
              type="date"
              value={selectedDate.toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <PanchangDetails date={selectedDate} />
        </div>
      </div>
    </div>
  );
}

export default App;