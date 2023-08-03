import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "src/store/reducer/accountReducer";

interface Account {
  id: string;
  text: string;
}

function Accounts() {
  const accountStore = useSelector((state: any) => state.accounts);
  const dispatch = useDispatch();
  const [accountData, setAccountData] = useState({
    id: "",
    text: "",
  });
  const setData = (e: React.ChangeEvent<HTMLInputElement>) => {
    let data: Account = {
      id: "",
      text: "",
    };

    data =
      e.target.id === "accountId"
        ? {
            ...accountData,
            id: e.target.value,
          }
        : { ...accountData, text: e.target.value };

    setAccountData(data);
  };

  const clickHandler = () => {
    dispatch(
      add({
        ...accountData,
        id: accountStore.length + 1,
      })
    );
  };

  return (
    <div>
      <h1>Add Account</h1>
      <TextField
        id="accountId"
        data-type="id"
        label="id"
        variant="outlined"
        onChange={setData}
      />
      <TextField
        id="accountText"
        label="text"
        data-type="text"
        variant="outlined"
        onChange={setData}
      />
      <Button variant="outlined" onClick={clickHandler}>
        Add
      </Button>
      {accountStore.map((item: any) => {
        return (
          <div key={item.id}>
            <h3>{item.id}</h3>
            <h5>{item.text}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Accounts;
