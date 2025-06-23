import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import dateFnsLocalizer from 'react-big-calendar/lib/localizers/date-fns';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import Card from '../components/UI/Card';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Team Meeting',
      start: new Date(2024, 0, 15, 10, 0),
      end: new Date(2024, 0, 15, 11, 0),
      resource: 'meeting'
    },
    {
      id: 2,
      title: 'Project Deadline',
      start: new Date(2024, 0, 18, 9, 0),
      end: new Date(2024, 0, 18, 17, 0),
      resource: 'deadline'
    },
    {
      id: 3,
      title: 'Client Presentation',
      start: new Date(2024, 0, 20, 14, 0),
      end: new Date(2024, 0, 20, 15, 30),
      resource: 'presentation'
    },
    {
      id: 4,
      title: 'Code Review',
      start: new Date(2024, 0, 22, 11, 0),
      end: new Date(2024, 0, 22, 12, 0),
      resource: 'review'
    }
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents(prev => [...prev, {
        id: Date.now(),
        title,
        start,
        end,
        resource: 'custom'
      }]);
    }
  };

  const handleSelectEvent = (event) => {
    if (window.confirm(`Delete event '${event.title}'?`)) {
      setEvents(prev => prev.filter(e => e.id !== event.id));
    }
  };

  const eventStyleGetter = (event) => {
    const colorMap = {
      meeting: { backgroundColor: '#3b82f6', borderColor: '#2563eb' },
      deadline: { backgroundColor: '#ef4444', borderColor: '#dc2626' },
      presentation: { backgroundColor: '#8b5cf6', borderColor: '#7c3aed' },
      review: { backgroundColor: '#10b981', borderColor: '#059669' },
      custom: { backgroundColor: '#f59e0b', borderColor: '#d97706' }
    };
    
    return {
      style: {
        ...colorMap[event.resource] || colorMap.custom,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block'
      }
    };
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Calendar
        </h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Manage your schedule and events
        </div>
      </div>

      <Card className="p-6">
        <div style={{ height: '600px' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            eventPropGetter={eventStyleGetter}
            selectable
            className="dark:text-white"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          />
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Event Legend
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { type: 'meeting', color: 'bg-primary-500', label: 'Meetings' },
            { type: 'deadline', color: 'bg-error-500', label: 'Deadlines' },
            { type: 'presentation', color: 'bg-secondary-500', label: 'Presentations' },
            { type: 'review', color: 'bg-success-500', label: 'Reviews' },
            { type: 'custom', color: 'bg-warning-500', label: 'Custom Events' }
          ].map(({ type, color, label }) => (
            <div key={type} className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded ${color}`}></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CalendarPage;