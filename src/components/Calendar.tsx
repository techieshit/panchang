import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = React.useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = React.useState(selectedDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isSelectedDate = (date: number) => {
    return selectedDate.getDate() === date &&
           selectedDate.getMonth() === currentMonth &&
           selectedDate.getFullYear() === currentYear;
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={previousMonth}
          className="p-2 hover:bg-orange-100 rounded-full transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-orange-600" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-orange-100 rounded-full transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-orange-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-medium text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="p-3"></div>
        ))}
        
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = index + 1;
          return (
            <button
              key={date}
              onClick={() => onDateSelect(new Date(currentYear, currentMonth, date))}
              className={`p-3 rounded-full hover:bg-orange-100 transition-colors ${
                isSelectedDate(date)
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'text-gray-800'
              }`}
            >
              {date}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;