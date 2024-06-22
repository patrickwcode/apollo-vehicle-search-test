import "./App.css";
import GetMakes from "./Queries/GetMakes";
import GetModels from "./Queries/GetModels";
import GetYears from "./Queries/GetYears";

function App() {
  return (
    <div>
      <select id="select-year">
        <option>Year</option>
        <GetYears />
      </select>
      <select id="select-make">
        <option>Make</option>
        <GetMakes />
      </select>
      <select id="select-model">
        <option>Model</option>
        <GetModels />
      </select>
    </div>
  );
}

export default App;
