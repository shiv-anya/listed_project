import React from "react";
import SearchIcon from "../../assets/navbar_icons/search_icon.svg";
import NotificationIcon from "../../assets/navbar_icons/notification_icon.svg";
import User from "../../assets/navbar_icons/user.svg";
const Navbar = () => {
  return (
    <div className="w-full flex mt-14 mb-10 justify-between">
      <h2 className="text-2xl font-bold ml-14">Dashboard</h2>
      <div className="flex items-center">
        <div className="flex justify-between bg-white pl-4 py-2 h-7 w-56 rounded-lg">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="text-sm focus:outline-none"
          />
          <img src={SearchIcon} alt="search icon" className="pr-3" />
        </div>
        <img src={NotificationIcon} alt="notification icon" className="mx-8" />
        <img src={User} alt="user" className="mr-14" />
      </div>
    </div>
  );
};

export default Navbar;
