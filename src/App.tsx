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
    <main className="container bg-primary bg-gradient p-3 border border-primary-subtle">
      <div className="row">
        <div className="col-sm col-md-3">
          <GetYears onChangeYear={onChangeYear} />
        </div>
        <div className="col-sm col-md-3">
          <GetMakes onChangeMake={onChangeMake} year={year} />
        </div>
        <div className="col-sm col-md-6">
          <GetModels onChangeModel={onChangeModel} year={year} make={make} />
        </div>
      </div>
      <div>
        <GetPhoto year={year} make={make} model={model} />
      </div>
    </main>
  );
}

export default App;
