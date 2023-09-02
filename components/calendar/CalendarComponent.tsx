import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

interface Props {
  setDate: (date: Date | null) => void;
}
function CalendarComponent({ setDate }: Props) {
  const handleChange = (value: Date | null) => {
    console.log(value);
    setDate(value);
  };
  return (
    <div className="custom-calendar">
      <DateCalendar onChange={handleChange} views={["day"]} />
    </div>
  );
}

export default CalendarComponent;
