import dayjs from "@/utils/dayjs";
import { Dayjs } from "dayjs";
import { useCallback, useEffect, useMemo, useState } from "react";

const FETCH_WEEK_COUNT = 8;

const getWeeks = (year: number, week: number, diff: number) => {
  const date = dayjs().year(year).week(week);

  const type: "add" | "subtract" = diff < 0 ? "subtract" : "add";
  return Array(Math.abs(diff))
    .fill(null)
    .map((_, index) => {
      const d = date[type](index + 1, "week").endOf("week");
      return getWeek(d.year(), d.week());
    })
    .sort((a, b) => {
      if (a.year === b.year) return a.number - b.number;
      return a.year - b.year;
    });
};

const getWeek = (year: number, number: number): CalendarWeek => {
  const weekDate = dayjs().year(year).week(number);

  const dates: CalendarDate[] = [];

  const startDate = weekDate.startOf("week");
  const endDate = weekDate.endOf("week");
  let date = startDate;

  do {
    const isStartOfMonth = date.startOf("month").isSame(date);
    const isEndOfMonth = date.endOf("month").isSame(date);

    const label =
      isStartOfMonth || isEndOfMonth
        ? `${date.month() + 1}/${date.date()}`
        : `${date.date()}`;
    date = date.add(1, "day");

    dates.push({ label, date });
  } while (date.isBefore(endDate));

  return { year, number, dates };
};

export type CalendarDate = { label: string; date: Dayjs };
export type CalendarWeek = {
  year: number;
  number: number;
  dates: CalendarDate[];
};

const useWeeks = () => {
  const [weeks, setWeeks] = useState<CalendarWeek[]>([]);
  const [isFetchingPrev, setIsFetchingPrev] = useState(false);
  const [isFetchingNext, setIsFetchingNext] = useState(false);

  const startWeek = useMemo(() => weeks[0], [weeks]);
  const endWeek = useMemo(() => weeks[weeks.length - 1], [weeks]);

  const getPrevWeeks = useCallback(() => {
    if (!startWeek || isFetchingPrev) return;
    setIsFetchingPrev(true);

    const { date } = startWeek.dates[0];

    setWeeks([
      ...getWeeks(date.year(), date.week(), -FETCH_WEEK_COUNT),
      ...weeks,
    ]);

    setIsFetchingPrev(false);
  }, [isFetchingPrev, startWeek, weeks]);

  const getNextWeeks = useCallback(() => {
    if (!endWeek || isFetchingNext) return;
    setIsFetchingNext(true);

    const { date } = endWeek.dates[0];

    setWeeks([
      ...weeks,
      ...getWeeks(date.year(), date.week(), FETCH_WEEK_COUNT),
    ]);

    setIsFetchingNext(false);
  }, [endWeek, isFetchingNext, weeks]);

  useEffect(() => {
    const d = dayjs().endOf("week");
    const year = d.year();
    const week = d.week();

    setWeeks([
      ...getWeeks(year, week, -FETCH_WEEK_COUNT),
      getWeek(year, week),
      ...getWeeks(year, week, FETCH_WEEK_COUNT),
    ]);
  }, []);

  return { weeks, isFetchingPrev, isFetchingNext, getPrevWeeks, getNextWeeks };
};

export default useWeeks;
