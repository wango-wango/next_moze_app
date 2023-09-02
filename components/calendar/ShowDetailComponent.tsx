import { Box, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateToTimeStemp, timeStempToDate } from "src/share/transfer";
import { DailyData } from "src/store/reducer/calendarReducer";
import { Reducer } from "src/store/store";

import Icons from "./Icons";

interface Props {
  date: Date | null;
}
function ShowDetailComponent({ date }: Props) {
  const dispatch = useDispatch();

  const calendarStore = useSelector(
    (state: Reducer) => state.calendar
  ) as Array<DailyData>;

  const [dayList, setDayList] = useState<Array<DailyData>>([]);

  useEffect(() => {
    const selected: Array<DailyData> = calendarStore.reduce((arr, item) => {
      if (item.date == DateToTimeStemp(date!)) {
        const newItem: DailyData = {
          ...item,
          date: timeStempToDate(item.date),
        };
        arr.push(newItem);
      }
      return arr;
    }, [] as DailyData[]);

    setDayList(selected);
  }, [date, calendarStore]);

  if (dayList.length) {
    return (
      <div>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h3" component="div">
          {dayList[0].date}
        </Typography>
        {dayList.map((item: DailyData) => (
          <Box component="div" key={item.id}>
            <h1>{item.title}</h1>
            <div>{item.cost}</div>
            <div>{item.date}</div>
            <Icons iconName={item.icon} />
          </Box>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ShowDetailComponent;
