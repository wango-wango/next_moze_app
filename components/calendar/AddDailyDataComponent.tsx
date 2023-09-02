import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import { TransitionProps } from "@mui/material/transitions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { DailyData, add } from "src/store/reducer/calendarReducer";
import { DateToTimeStemp } from "src/share/transfer";

interface Props {
  dialogTitle: string;
  open: boolean;
  setOpen: any;
  calendarDate: Date | null;
  mode: string;
  setCalendarDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AddDailyDataComponent({
  dialogTitle,
  open,
  setOpen,
  calendarDate,
  mode,
  setMode,
  setCalendarDate,
}: Props) {
  React.useEffect(() => {
    if (calendarDate) {
      setDate(calendarDate);
    }
  }, [calendarDate]);
  const dispatch = useDispatch();
  const theme = useTheme();

  const [icon, setIcon] = React.useState("");
  const [ammount, setAmmount] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [account, setAccount] = React.useState("");
  const [date, setDate] = React.useState<Date | null>(null);

  // 利用 mui 的 MediaQuery 判斷現在視窗寬度是否低於 md
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // 控制 dialog
  const handleClose = () => {
    setOpen(false);
    setMode("");
  };

  // 新增資料進去 redux
  const handleAdd = () => {
    // add Data to redux;
    const addData = {
      icon,
      title,
      cost: ammount,
      accountType: account,
      date: DateToTimeStemp(date),
    };
    dispatch(add(addData));
    setCalendarDate(date);
    handleClose();
  };
  // 初始值
  useEffect(() => {
    console.log(mode);
    if (mode == "Add") {
      setIcon("");
      setAmmount("");
      setTitle("");
      setAccount("");
      if (!calendarDate) {
        setDate(null);
      }
    }
  }, [mode]);

  // 如果有來自 calendar 的日期，就換上新的日期
  useEffect(() => {
    if (calendarDate) {
      setDate(calendarDate);
    }
  }, [calendarDate]);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullScreen={fullScreen}
      >
        <DialogTitle>
          <div className="flex justify-between">
            <Typography sx={{ mr: 2, flex: 1 }} variant="h6" component="div">
              {dialogTitle}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <Form
            ammount={ammount}
            title={title}
            account={account}
            date={date}
            setIcon={setIcon}
            setAmmount={setAmmount}
            setTitle={setTitle}
            setAccount={setAccount}
            setDate={setDate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddDailyDataComponent;
