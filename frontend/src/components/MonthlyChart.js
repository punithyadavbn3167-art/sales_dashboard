import React, { useEffect, useState } from "react";
import API from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./Monthly.css";


function MonthlyChart({ refresh }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/monthly")
      .then(res => setData(res.data))
      .catch(() => setData([]));
  }, [refresh]);

  return (
  <div className="monthly-chart-card">
    <h3 className="chart-title">Monthly Sales</h3>

    <div className="chart-container">
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#4f46e5" />
      </BarChart>
    </div>
  </div>
);

}

export default MonthlyChart;
