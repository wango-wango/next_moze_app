import { Box, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { timeStempToDate } from "src/share/transfer";
import { DailyData } from "src/store/reducer/calendarReducer";
import { Reducer } from "src/store/store";

function ShowDetailComponent() {
  const calendarStore = useSelector((state: Reducer) => state.calendar);
  const dispatch = useDispatch();
  if (calendarStore.length) {
    return (
      <div>
        {/* <Typography sx={{ ml: 2, flex: 1 }} variant="h3" component="div">
          Sound
        </Typography> */}
        {calendarStore.map((item: DailyData) => (
          <Box component="div" key={item.id}>
            <h1>{item.title}</h1>
            <div>{item.cost}</div>
            <div>{timeStempToDate(item.date)}</div>
          </Box>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ShowDetailComponent;
