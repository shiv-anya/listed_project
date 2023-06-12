import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.4,
    },
  },
  scales: {
    yAxis: {
      ticks: {
        maxTicksLimit: 2,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Activities",
    },
  },
};

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

export const data = {
  labels,
  datasets: [
    {
      label: "Guest",
      data: labels.map(() => Math.random() * 500),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "User",
      data: labels.map(() => Math.random() * 500),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Activity = () => {
  return (
    <div className="h-44 w-auto mt-5 mx-14 bg-white rounded-2xl">
      <Line options={options} data={data} className="w-full" />
    </div>
  );
};

export default Activity;
