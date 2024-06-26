import "./App.css";
import { useState } from "react";
import GetMakes from "./Queries/GetMakes";
import GetModels from "./Queries/GetModels";
import GetYears from "./Queries/GetYears";
import { Context } from "./Context";

function App() {
  const [year, setYear] = useState("2015");
  const [make, setMake] = useState("Toyota");
  const [model, setModel] = useState("Camry");

  return (
    <Context.Provider value={{ year, make, model }}>
      <div>
        <select id="select-year" onChange={(e) => setYear(e.target.value)}>
          <option value="year">Year</option>
          <GetYears />
        </select>
        <select id="select-make" onChange={(e) => setMake(e.target.value)}>
          <option value="make">Make</option>
          <GetMakes />
        </select>
        <select id="select-model" onChange={(e) => setModel(e.target.value)}>
          <option value="model">Model</option>
          <GetModels />
        </select>
      </div>
    </Context.Provider>
  );
}

export default App;
