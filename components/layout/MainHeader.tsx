import React from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function MainHeader() {
  return (
    <ul className=" z-50 absolute top-24 right-8 divide-y-2 divide-solid divide-slate-400">
      <li className="py-4">
        <Link href="/" className="flex flex-col items-center  gap-4 hover:text-white">
          <HomeIcon />
          <p className="writing-mode-vertical-lr">首頁</p>
        </Link>
      </li>
      <li className="py-4">
        <Link href="/accounts" className="flex  flex-col items-center gap-4 hover:text-white">
          <AccountBalanceWalletIcon />
          <p className="writing-mode-vertical-lr">帳號</p>
        </Link>
      </li>
      <li className="py-4">
        <Link href="/projects" className="flex flex-col items-center  gap-4 hover:text-white">
          <BusinessCenterIcon />
          <p className="writing-mode-vertical-lr">計畫</p>
        </Link>
      </li>
      <li className="py-4">
        <Link href="/calendar" className="flex flex-col items-center  gap-4 hover:text-white">
          <CalendarMonthIcon />
          <p className="writing-mode-vertical-lr"> 日曆</p>
        </Link>
      </li>
      <li className="py-4">
        <Link href="/reports" className="flex flex-col items-center  gap-4 hover:text-white">
          <BarChartIcon />
          <p className="writing-mode-vertical-lr">報告</p>
        </Link>
      </li>
    </ul>
  );
}

export default MainHeader;
