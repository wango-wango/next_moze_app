import { Button } from "@mui/material";
import * as React from "react";
import CalendarComponent from "src/components/calendar/CalendarComponent";
import AddIcon from "@mui/icons-material/Add";
import ShowDetailComponent from "src/components/calendar/ShowDetailComponent";
import AddDailyDataComponent from "src/components/calendar/AddDailyDataComponent";
function Calendar() {
  const [dialogTitle, setDialogTitle] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const [calendarDate, setCalendarDate] = React.useState<Date | null>(null);
  const [mode, setMode] = React.useState("second");
  const clickHandler = () => {
    setDialogTitle("Add");
    setMode("Add");
    setOpen(true);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <CalendarComponent setDate={setCalendarDate} />
        <Button
          aria-label="add"
          variant="text"
          color="inherit"
          className="rounded-full border border-solid border-transparent transition-all ease-in-out duration-300 hover:bg-slate-700 hover:text-slate-100 hover:border hover:border-slate-100 hover:border-solid "
          onClick={clickHandler}
        >
          <AddIcon />
        </Button>
        <ShowDetailComponent date={calendarDate} />
      </div>
      <AddDailyDataComponent
        dialogTitle={dialogTitle}
        open={open}
        setOpen={setOpen}
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
        mode={mode}
        setMode={setMode}
      />
    </>
  );
}

export default Calendar;
