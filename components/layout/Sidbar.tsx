import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/router";

interface Props {
  state: { top: boolean; left: boolean };
  setState: React.Dispatch<
    React.SetStateAction<{ top: boolean; left: boolean }>
  >;
}
type Anchor = "top" | "left";

export default function Sidbar(props: Props) {
  const { state, setState } = props;
  const router = useRouter();

  // 控制 drawer 開關
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log({ [anchor]: open });
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const routeTo = (route: string) => {
    const routeTo = route.toLowerCase();
    router.push(`/${routeTo}`);
    // console.log(routeTo);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Accounts", "Calendar", "Reports"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={()=>routeTo(text)}>
              <ListItemIcon>
                {text === "Accounts" ? (
                  <AccountBalanceWalletIcon />
                ) : text === "Calendar" ? (
                  <BarChartIcon />
                ) : (
                  <CalendarMonthIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left", "top"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
