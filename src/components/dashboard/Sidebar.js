import React from "react";
import DashboardIcon from "../../assets/sidebar_icons/dashboard_icon.svg";
import TransactionIcon from "../../assets/sidebar_icons/transaction_icon.svg";
import ScheduleIcon from "../../assets/sidebar_icons/schedule_icon.svg";
import UserIcon from "../../assets/sidebar_icons/user_icon.svg";
import SettingIcon from "../../assets/sidebar_icons/setting_icon.svg";

const Sidebar = () => {
  return (
    <div className="w-3/12 h-screen py-10">
      <div className="ml-10 pl-12 py-14 h-full w-72 bg-black text-white rounded-3xl flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-4xl font-bold mb-14">Board.</h2>
          <ul>
            <li className="flex mb-5 cursor-pointer items-center font-bold">
              <img src={DashboardIcon} alt="dashboard icon" className="mr-5" />{" "}
              Dashboard
            </li>
            <li className="flex mb-5 cursor-pointer items-center">
              <img
                src={TransactionIcon}
                alt="dashboard icon"
                className="mr-5"
              />
              Transactions
            </li>
            <li className="flex mb-5 cursor-pointer items-center">
              <img src={ScheduleIcon} alt="dashboard icon" className="mr-5" />
              Schedules
            </li>
            <li className="flex mb-5 cursor-pointer items-center">
              <img src={UserIcon} alt="dashboard icon" className="mr-5" />
              Users
            </li>
            <li className="flex mb-5 cursor-pointer items-center">
              <img src={SettingIcon} alt="dashboard icon" className="mr-5" />
              Settings
            </li>
          </ul>
        </div>
        <ul className="text-sm">
          <li className="mb-5 cursor-pointer">Help</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
