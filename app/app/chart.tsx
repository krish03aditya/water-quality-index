"use client";

import { useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js";

export const Chart: React.FC<{ data: number[] }> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = new ChartJS(chartRef.current!, {
        type: "line",
        data: {
          labels: Array.from({ length: data.length }, (_, i) => i + 1),
          datasets: [
            {
              label: "pH Value",
              borderColor: "#3cba9f",
              backgroundColor: "#71d1bd",
              fill: false,
              data: data,
            },
          ],
        },
      });
    }
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className="border-2 border-gray-400 pt-0 rounded w-full h-fit my-auto shadow-xl bg-white">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};
