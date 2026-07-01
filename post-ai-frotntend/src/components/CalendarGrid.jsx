import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridWeek from '@fullcalendar/timegrid';
import { Video } from 'lucide-react';
import './calender.css'; // Make sure to import the custom styles

const eventsData = [
  { title: "Monday sync", start: "2026-06-15T09:00:00", end: "2026-06-15T09:45:00", backgroundColor: "#f3e8ff", textColor: "#6b21a8", borderColor: "#c084fc" },
  { title: "Emails", start: "2026-06-15T10:30:00", end: "2026-06-15T11:15:00", backgroundColor: "#e0f2fe", textColor: "#0369a1", borderColor: "#7dd3fc" },
  { title: "Design onboarding", start: "2026-06-16T09:00:00", end: "2026-06-16T12:00:00", backgroundColor: "#e0f2fe", textColor: "#0369a1", borderColor: "#7dd3fc" },
  { title: "Lunch break", start: "2026-06-15T12:00:00", end: "2026-06-15T13:00:00", backgroundColor: "#ecfdf5", textColor: "#047857", borderColor: "#6ee7b7" },
{
  title : "okkok time" , start : "2026-09-12T1:00:00",
  end : "2026-09-18T12:00:00",
  backgroundColor: "#ecfdf5", 
  textColor: "#047857", borderColor: "#6ee7b7" 
}
];

// Custom Event Renderer for gorgeous looking event cards
function renderEventContent(eventInfo) {
  return (
    <div className="p-2 h-full flex flex-col justify-between overflow-hidden">
      <div>
        <div className="font-semibold text-[11px] leading-tight truncate">{eventInfo.event.title}</div>
        <div className="text-[10px] opacity-70 mt-0.5 font-medium">
          {eventInfo.timeText}
        </div>
      </div>
    </div>
  );
}

export default function CalendarGrid({calendarRef
  , onDateSet
}) {
  return (
    <div className="flex-1 p-6 bg-white relative h-full flex flex-col">
      
      {/* FullCalendar Wrapper */}
      <div className="calendar-container flex-1 overflow-hidden">
        <FullCalendar
        ref={calendarRef}

          plugins={[timeGridWeek]}
          initialView="timeGridWeek"
          initialDate="2026-06-15"
          headerToolbar={false}
          dayHeaderFormat={{ weekday: 'short', day: 'numeric' }}
          slotMinTime="08:00:00"
          slotMaxTime="19:00:00"
          allDaySlot={false}
          slotDuration="00:30:00"
          events={eventsData}
          height="100%"
          eventContent={renderEventContent}
          datesSet={onDateSet}
        />
      </div>

      {/* Floating Pill Status */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-4 py-2.5 rounded-full shadow-xl flex items-center gap-3 text-xs font-medium border border-neutral-800 z-30 select-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Monday sync</span>
        <span className="opacity-50">·</span>
        <span className="opacity-70">45 mins left</span>
        <div className="w-5 h-5 bg-neutral-800 rounded-md flex items-center justify-center text-neutral-300 cursor-pointer hover:bg-neutral-700 transition-colors">
          <Video size={12} />
        </div>
      </div>
    </div>
  );
}