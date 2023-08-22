import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickerSelectionState } from "@mui/x-date-pickers/internals";

function CalendarComponent() {
  const handleChange = (
    value: any,
    selectionState: PickerSelectionState | undefined
  ) => {
    console.log(value);
    console.log(selectionState);
  };
  return (
    <div className="custom-calendar">
      <DateCalendar onChange={handleChange} views={["day"]} />
    </div>
  );
}

export default CalendarComponent;
