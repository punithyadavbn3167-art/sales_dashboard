import React, { useEffect, useState } from "react";
import API from "../services/api";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./yearly.css";

function YearlyChart({ refresh }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/yearly")
      .then(res => setData(res.data))
      .catch(() => setData([]));
  }, [refresh]);

 return (
  <div className="yearly-chart-card">
    <h3 className="chart-title">Yearly Sales</h3>

    <div className="chart-container">
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#16a34a" />
      </LineChart>
    </div>
  </div>
);

}

export default YearlyChart;
