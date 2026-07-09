import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridWeek from '@fullcalendar/timegrid';
import { Video } from 'lucide-react';
import { fetchPosts } from "../api/postApi";
import './calender.css'; 

import PostDetailsModal from "../components/PostDetailsModal"

// Clean event renderer definition
function renderEventContent(eventInfo) {
  const title = eventInfo.event.title || "Untitled Campaign";
  const platform = eventInfo.event.extendedProps?.platform || "";
  const timeText = eventInfo.timeText;

  return (
    <div className="p-1.5 h-full flex flex-col justify-between overflow-hidden select-none">
      <div>
        <div className="font-bold text-[11px] leading-tight text-neutral-900 truncate">
          {title}
        </div>
        <div className="text-[10px] opacity-60 mt-0.5 font-medium text-neutral-700">
          {timeText}
        </div>
      </div>

      {platform && (
        <div className="mt-1">
          <span className="inline-block text-[9px] font-bold uppercase tracking-wider bg-black/5 px-1.5 py-0.5 rounded text-neutral-600 truncate max-w-full">
            {platform}
          </span>
        </div>
      )}
    </div>
  );
}

export default function CalendarGrid({ calendarRef, onDateSet, refreshTrigger }) {
  const [events, setEvents] = useState([]);

  const [selectedPost , setSelectedPost] = useState(null);


  useEffect(() => {
    const loadPostsIntoCalender = async () => {
      try {
        const resposne = await fetchPosts();

        if (resposne.data && resposne.data.success) {
          console.log("Raw DB Post Fetch:", resposne.data.data);
          
const formatEvent = resposne.data.data.map(post => {
  
  const startTimeStr = post.scheduledAt; 
  
  const startDateObj = new Date(startTimeStr);
  const endTimeStr = new Date(startDateObj.getTime() + (45 * 60 * 1000)).toISOString();

  return {
    id: String(post.id),
    title: post.title || "Untitled",
    start: startTimeStr, 
    end: endTimeStr,     
    backgroundColor: post.status === "Scheduled" ? "#e0f2fe" : "#fff7ed",
    textColor: post.status === "Scheduled" ? "#0369a1" : "#c2410c",
    borderColor: post.status === "Scheduled" ? "#7dd3fc" : "#fb923c",
    platform: post.platform,
  caption : post.caption,
  hashtags: post.hashtags,
  status : post.status
  };
});

          console.log("Formatted FullCalendar Events Data Array:", formatEvent);
          setEvents(formatEvent);
        }
      } catch (error) {
        console.log("error in loading posts into calender", error);
      }
    };
    
    loadPostsIntoCalender();
  }, [refreshTrigger]);


  const handleEventClick = (clickinfo) =>{
    const eventobj = clickinfo.event;
    const props = eventobj.extendedProps;
    setSelectedPost({
      id : eventobj.id,
      title : eventobj.title,
      start : eventobj.start,
      end : eventobj.end,


      // platform : eventobj.extendedProps.platform,
      // caption : eventobj.extendedProps.caption,
      // hashtags : eventobj.extendedProps.hashtags,
      // status : eventobj.extendedProps.status
  
      platform : props?.platform || "",
      caption : props?.caption  || "",
      hashtags : props?.hashtags ||"",
      status : props?.status || "Draft"
    })

    console.log("caption:" , props?.caption)
  }

  const handleDeletePost = (id) =>{
    console.log("delete post with id:", id)
  }

  const handleEditPost = (post) =>{
console.log("edit post with data:", post)
  }
  return (
    <div className="flex-1 p-6 bg-white relative h-full flex flex-col">
      <div className="calendar-container flex-1 overflow-hidden">

        <FullCalendar
  ref={calendarRef}
  plugins={[timeGridWeek]}
  initialView="timeGridWeek"
  initialDate={events[0]?.start ? events[0].start.split("T")[0] : new Date().toISOString().split("T")[0]} 
  headerToolbar={false}
  dayHeaderFormat={{ weekday: 'short', day: 'numeric' }}
  allDaySlot={true} 
  
  slotDuration="00:30:00"
  events={events}
  height="100%"
  eventContent={renderEventContent}
  datesSet={onDateSet}
  eventClick={handleEventClick}
/>

      </div>

      {/* Floating Pill Status */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-4 py-2.5 rounded-full shadow-xl flex items-center gap-3 text-xs font-medium border border-neutral-800 z-30 select-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Active Grid Stream</span>
        <span className="opacity-50">·</span>
        <span className="opacity-70">{events.length} Posts Syncing</span>
        <div className="w-5 h-5 bg-neutral-800 rounded-md flex items-center justify-center text-neutral-300 cursor-pointer hover:bg-neutral-700 transition-colors">
          <Video size={12} />
        </div>
      </div>


<PostDetailsModal 
isOpen ={selectedPost !==null}
post={selectedPost}
onClose ={()=> setSelectedPost(null)}
onDelete={handleDeletePost}
onEdit={handleEditPost}
/>

    </div>
  );
}