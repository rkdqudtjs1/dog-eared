import { NextPage } from "next";
import Week from "@/components/Calendar/Week";

import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";
import useWeeks from "@/hooks/useWeeks";
import { useEffect, useMemo } from "react";

const CalendarPage: NextPage = () => {
  const { weeks, isFetchingPrev, isFetchingNext, getPrevWeeks, getNextWeeks } =
    useWeeks();

  const firstWeekNumber = useMemo(() => weeks[0]?.number || 0, [weeks]);

  useEffect(() => {
    window.scrollTo({ top: 640, behavior: "auto" });
  }, [firstWeekNumber]);

  return (
    <InfiniteScrollContainer
      disabled={isFetchingPrev || isFetchingNext}
      onReachedStart={getPrevWeeks}
      onReachedEnd={getNextWeeks}
    >
      {weeks.map((week) => (
        <Week key={`${week.year}-${week.number}`} {...week} />
      ))}
    </InfiniteScrollContainer>
  );
};

export default CalendarPage;
