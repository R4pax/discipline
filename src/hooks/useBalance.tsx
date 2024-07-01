import React, { useState } from "react";
import { getStore, setStore } from "../utils/localstore";

function useBalance() {
  const storedBalance = getStore("balance");
  const [balance, setBalance] = useState(storedBalance || 0);

  const changeBalance = (value: number) => {
    const newValue = balance + value;
    setBalance(newValue);
    setStore("balance", newValue);
  };

  return { balance, changeBalance };
}

export default useBalance;
