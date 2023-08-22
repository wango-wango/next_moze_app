import { Box, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DailyData } from "src/store/reducer/calendarReducer";

function ShowDetailComponent() {
  const calendarStore = useSelector((state: any) => state.calendar);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography sx={{ ml: 2, flex: 1 }} variant="h3" component="div">
        Sound
      </Typography>
      {calendarStore.map((item: DailyData) => (
        <Box component="div">
          <h1>{item.title}</h1>
          <div>{item.cost}</div>
          <div>{item.date.toLocaleDateString()}</div>
        </Box>
      ))}
    </div>
  );
}

export default ShowDetailComponent;
