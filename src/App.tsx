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
    <Context.Provider value={{ year, make, model }}>
      <div>
        <GetYears onChangeYear={onChangeYear} />
        <GetMakes onChangeMake={onChangeMake} />
        <GetModels onChangeModel={onChangeModel} year={year} make={make} />
      </div>
    </Context.Provider>
  );
}

export default App;
