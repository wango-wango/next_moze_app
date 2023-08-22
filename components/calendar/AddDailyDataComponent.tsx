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
import React from "react";
import Form from "./Form";
import { TransitionProps } from "@mui/material/transitions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  title: string;
  open: boolean;
  setOpen: any;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AddDailyDataComponent({ title, open, setOpen }: Props) {
  const theme = useTheme();
  // 利用 mui 的 MediaQuery 判斷現在視窗寬度是否低於 md
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(theme.breakpoints);
  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    // add Data to redux;
    handleClose();
  }
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
              {title}
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
          <Form />
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
