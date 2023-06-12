import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  datasets: [
    {
      label: "Top Products",
      data: [55, 31, 14],
      backgroundColor: [
        "rgba(238, 132, 132, 1)",
        "rgba(246, 220, 125, 1)",
        "rgba(152, 216, 158, 1)",
      ],
    },
  ],
};

const ProductInfo = () => {
  return (
    <div className="bg-white h-44 ml-14 mt-5 rounded-2xl">
      <Pie data={data} />
    </div>
  );
};

export default ProductInfo;
