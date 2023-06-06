type CalendarDateProps = { date: number; onClick: () => void };
const CalendarDate = ({ date, onClick }: CalendarDateProps) => {
  return <button onClick={onClick}>{date}</button>;
};

export default CalendarDate;
