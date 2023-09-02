import * as React from "react";
import Icons from "./Icons";
import { Menu, MenuItem, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

const accountOptions = [
  {
    value: "myself",
    label: "錢包",
  },
  {
    value: "common",
    label: "共用",
  },
  {
    value: "save",
    label: "存款",
  },
];

interface Props {
  date: Date | null;
  ammount: string;
  title: string;
  account: string;
  setIcon: React.Dispatch<React.SetStateAction<string>>;
  setAmmount: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

function Form({
  ammount,
  title,
  account,
  date,
  setIcon,
  setAmmount,
  setTitle,
  setAccount,
  setDate,
}: Props) {
  // const [icon, setIcon] = React.useState("");
  // const [ammount, setAmmount] = React.useState("");
  // const [title, setTitle] = React.useState("");
  // const [account, setAccount] = React.useState("");
  // const [date, setDate] = React.useState<Date | null>(null);
  return (
    <div>
      <Icons setIcon={setIcon} />
      <TextField
        label="金額"
        variant="outlined"
        className="w-full"
        value={ammount}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setAmmount(event.target.value)
        }
      ></TextField>
      <TextField
        label="名稱"
        variant="outlined"
        className="w-full"
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(event.target.value)
        }
      ></TextField>
      <TextField
        label="帳戶"
        variant="outlined"
        className="w-full"
        select
        value={account}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setAccount(event.target.value)
        }
      >
        {accountOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <DatePicker
        label="Controlled picker"
        value={date}
        className="w-full"
        onChange={(newValue) => setDate(newValue)}
      />
    </div>
  );
}

export default Form;
