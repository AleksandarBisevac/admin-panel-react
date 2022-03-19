import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./chart.scss";

const data = [
  { name: "January", Total: 17668.24 },
  { name: "February", Total: 15774.12 },
  { name: "March", Total: 22465.98 },
  { name: "April", Total: 22966.61 },
  { name: "May", Total: 20844.07 },
  { name: "June", Total: 24774.54 },
];

const Chart = () => {
  return (
    <div className="chart cardBoxShadow">
      <header className="top">
        <h2 className="title">last 6 months Revenue</h2>
        <MoreVertIcon className="icon" />
      </header>
      <ResponsiveContainer width="100%" aspect={3 / 2}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 30, bottom: 5 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--green-400)"
                stopOpacity={0.8}
              />
              <stop offset="95%" stopColor="var(--green-400)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="var(--grey-400)" />
          <YAxis
            dataKey="Total"
            type="number"
            domain={[10000, "dataMax" + 1000]}
            padding={{ top: 20, bottom: 20 }}
          />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="var(--green-600)"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
