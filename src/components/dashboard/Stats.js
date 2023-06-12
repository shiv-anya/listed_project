import React from "react";
import StatsCard from "./StatsCard";
import Users from "../../assets/stats/users.svg";
import Transactions from "../../assets/stats/transactions.svg";
import Revenues from "../../assets/stats/revenues.svg";
import Likes from "../../assets/stats/likes.svg";

const Stats = () => {
  const StatsInfo = [
    {
      title: "Total Revenues",
      amount: "$2,129,430",
      desc: "revenue icon",
      icon: Revenues,
      color: "bg-revenues",
    },
    {
      title: "Total Transcations",
      amount: "1,520",
      desc: "transcations icon",
      icon: Transactions,
      color: "bg-transactions",
    },
    {
      title: "Total Likes",
      amount: "9,721",
      desc: "likes icon",
      icon: Likes,
      color: "bg-likes",
    },
    {
      title: "Total Users",
      amount: "892",
      desc: "users icon",
      icon: Users,
      color: "bg-users",
    },
  ];
  return (
    <div className="ml-14 flex justify between">
      {StatsInfo.map((s) => (
        <StatsCard
          title={s.title}
          amount={s.amount}
          desc={s.desc}
          icon={s.icon}
          key={s.title}
          color={s.color}
        />
      ))}
    </div>
  );
};

export default Stats;
