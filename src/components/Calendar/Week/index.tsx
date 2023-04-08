import { CalendarDate } from "@/hooks/useWeeks";

type Props = { dates: CalendarDate[] };
const Week = ({ dates }: Props) => {
  return (
    <div className="flex">
      {dates.map(({ label, date }) => {
        return (
          <div key={label} className="flex-1 text-center h-20">
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default Week;
