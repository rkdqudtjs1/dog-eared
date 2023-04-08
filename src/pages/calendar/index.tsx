import { NextPage } from "next";
import Week from "@/components/Calendar/Week";

import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";
import useWeeks from "@/hooks/useWeeks";
import { useLayoutEffect, useMemo, useRef } from "react";

const CalendarPage: NextPage = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const { weeks, isFetchingPrev, isFetchingNext, getPrevWeeks, getNextWeeks } =
    useWeeks();

  const firstWeekNumber = useMemo(() => weeks[0]?.number || 0, [weeks]);

  useLayoutEffect(() => {
    const wrapperCurrent = wrapper.current;
    if (!wrapperCurrent) return;
    wrapperCurrent.scrollTo({ top: 640, behavior: "auto" });
  }, [firstWeekNumber]);

  return (
    <div ref={wrapper} className="h-[100vh] overflow-auto">
      <InfiniteScrollContainer
        disabled={isFetchingPrev || isFetchingNext}
        onReachedStart={getPrevWeeks}
        onReachedEnd={getNextWeeks}
      >
        {weeks.map((week) => (
          <Week key={`${week.year}-${week.number}`} {...week} />
        ))}
      </InfiniteScrollContainer>
    </div>
  );
};

export default CalendarPage;
