export default function CalendarHeader({
  calendarRef,
  currentRange,
}) {
const goPrev =() =>{
  // console.log(calendarRef)
  calendarRef.current.getApi().prev()
}
const goNext = () =>{
  calendarRef.current.getApi().next()
}
const getToday = () =>{
  calendarRef.current.getApi().today()
}
const formatRange = () =>{
  if (!currentRange.start) return ""
  const start = currentRange.start;
  const end = new Date(currentRange.end)
  end.setDate(end.getDate() - 1)
return `${start.toLocaleDateString("en-US", 
  { month: "short", day: "numeric", })} - 
  ${end.toLocaleDateString("en-US", 
    { month: "short", day: "numeric", year: "numeric", })}`;
}

  return (
    <div className="h-14 border-b border-neutral-100 flex items-center justify-between px-6 bg-white">
      <h2 className="text-base font-bold">
        {formatRange()}
      </h2>
      <div className="flex gap-2">
        <button onClick={goPrev}>
          ◀
        </button>
        <button
         onClick={ goNext}
          >
          ▶
        </button>
        <button 
        // onClick={goToday}
        >
          Today
        </button>

      </div>

    </div>
  );
}