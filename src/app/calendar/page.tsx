import { Metadata, NextPage } from "next";

import Calendar from "@/components/Calendar";

export const metadata: Metadata = {
  title: "Calendar | Dog Eared",
};

const CalendarPage: NextPage = () => {
  return <Calendar />;
};

export default CalendarPage;
