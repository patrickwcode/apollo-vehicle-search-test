import "./App.css";
import { useState } from "react";
import GetMakes from "./Queries/GetMakes";
import GetModels from "./Queries/GetModels";
import GetYears from "./Queries/GetYears";
import GetPhoto from "./Queries/GetPhoto";

function App() {
  const [year, setYear] = useState("2015");
  const [make, setMake] = useState("Toyota");
  const [model, setModel] = useState("Camry");

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const onChangeMake = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMake(e.target.value);
  };

  const onChangeModel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModel(e.target.value);
  };

  return (
    <div>
      <GetYears onChangeYear={onChangeYear} />
      <GetMakes onChangeMake={onChangeMake} year={year} />
      <GetModels onChangeModel={onChangeModel} year={year} make={make} />
      <GetPhoto />
    </div>
  );
}

export default App;
