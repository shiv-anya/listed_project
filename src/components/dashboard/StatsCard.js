import React from "react";

const StatsCard = (props) => {
  return (
    <div className={`w-52 ${props.color} mr-9 rounded-2xl flex flex-col`}>
      <img src={props.icon} alt={props.desc} className="p-5 self-end" />
      <div className="pl-6">
        <p className="text-sm">{props.title}</p>
        <p className="font-bold text-2xl pb-5">{props.amount}</p>
      </div>
    </div>
  );
};

export default StatsCard;
