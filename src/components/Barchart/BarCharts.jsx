import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarCharts = ({ ratings }) => {
  return (
    <div>
      <div className=" h-80">
        {/* chart */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={ratings}
            layout="vertical"
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey={"count"}
              domain={[0, "dataMax + 10"]}
              type="number"
            />
            <YAxis dataKey={"name"} type="category" reversed />
            <Tooltip />
            <Legend />

            <Bar
              dataKey="count"
              fill="gold"
              activeBar={<Rectangle fill="#82ca9d" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;
