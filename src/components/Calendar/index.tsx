"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import dayjs from "@/utils/dayjs";
import { Dayjs } from "dayjs";
import CalendarDate from "./Date";

type Day = null | { dayjs: Dayjs; date: number };
const getDays = (year: number, month: number): Day[] => {
  const date = dayjs().year(year).month(month);

  const start = date.startOf("month");
  const end = date.endOf("month");

  const pre = Array<null>(start.day()).fill(null);
  const suf = Array<null>(6 - end.day()).fill(null);

  return [
    ...pre,
    ...Array(end.date())
      .fill(null)
      .map((_, index) => {
        return {
          date: date.date(index + 1).date(),
          dayjs: date.date(index + 1),
        };
      }),
    ...suf,
  ];
};

const Calendar = () => {
  const [month, setMonth] = useState(dayjs());
  const [days, setDays] = useState<Day[]>([]);

  const onChangeMonth = (diff: number) =>
    setMonth(dayjs(month).add(diff, "month"));

  const onClickDate = (dayjs: Dayjs) => {
    console.log(dayjs);
  };

  useEffect(() => {
    setDays(getDays(month.year(), month.month()));
  }, [month]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <Button
          auto
          icon={<i className="fa-solid fa-chevron-left" />}
          onClick={() => onChangeMonth(-1)}
        />
        <div>{dayjs(month).format("YYYY.MM")}</div>
        <Button
          auto
          icon={<i className="fa-solid fa-chevron-right" />}
          onClick={() => onChangeMonth(1)}
        />
      </div>
      <div className="grid grid-cols-7">
        {days.map((day, index) => {
          const key = !day
            ? String(index)
            : `${day.dayjs.format("YYYY-MM-DD")}`;

          if (!day) return <div key={key} />;
          return (
            <CalendarDate
              key={key}
              date={day.date}
              onClick={() => onClickDate(day.dayjs)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
