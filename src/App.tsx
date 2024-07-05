import "./App.css";
import { useState } from "react";
import "bootstrap/scss/bootstrap.scss";
import GetMakes from "./Queries/GetMakes";
import GetModels from "./Queries/GetModels";
import GetYears from "./Queries/GetYears";
import GetPhoto from "./Queries/GetPhoto";

function App() {
  const [year, setYear] = useState("2015");
  const [make, setMake] = useState("Toyota");
  const [model, setModel] = useState("Camry");

  const onChangeYear: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setYear(e.target.value);
  };

  const onChangeMake: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setMake(e.target.value);
  };

  const onChangeModel: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setModel(e.target.value);
  };

  return (
    <div>
      <GetYears onChangeYear={onChangeYear} />
      <GetMakes onChangeMake={onChangeMake} year={year} />
      <GetModels onChangeModel={onChangeModel} year={year} make={make} />
      <div className="d-block">
        <GetPhoto year={year} make={make} model={model} />
      </div>
    </div>
  );
}

export default App;
