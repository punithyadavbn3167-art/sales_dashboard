import React, { useState } from "react";
import Upload from "./components/Uploads.js";
import MonthlyChart from "./components/MonthlyChart.js";
import YearlyChart from "./components/YearlyChart.js";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sales Analytics Dashboard</h1>
      <Upload setRefresh={setRefresh} />
      <MonthlyChart refresh={refresh} />
      <YearlyChart refresh={refresh} />
    </div>
  );
}

export default App;
