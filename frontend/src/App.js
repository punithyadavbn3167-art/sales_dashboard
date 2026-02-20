import React, { useState } from "react";
import Upload from "./components/Uploads.js";
import MonthlyChart from "./components/MonthlyChart.js";
import YearlyChart from "./components/YearlyChart.js";
import "./style.css";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
  <div className="dashboard-container">
    <h1 className="dashboard-heading">Sales Analytics Dashboard</h1>

    <Upload setRefresh={setRefresh} />
    <MonthlyChart refresh={refresh} />
    <YearlyChart refresh={refresh} />
  </div>
);

}

export default App;
