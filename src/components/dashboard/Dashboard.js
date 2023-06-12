import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Activity from "./Activity";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="flex bg-dash">
      <Sidebar />
      <div className="w-9/12">
        <Navbar />
        <Stats />
        <Activity />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
