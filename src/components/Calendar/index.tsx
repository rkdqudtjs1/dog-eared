"use client";

import useWeeks from "@/hooks/useWeeks";
import Week from "./Week";

const Calendar = () => {
  const { weeks, isFetchingPrev, isFetchingNext, getPrevWeeks, getNextWeeks } =
    useWeeks();

  return (
    <div className="flex flex-col">
      {weeks.map((week) => (
        <Week key={`${week.year}-${week.number}`} {...week} />
      ))}
    </div>
  );
};

export default Calendar;
