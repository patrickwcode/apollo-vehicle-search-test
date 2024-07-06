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
  const [isYearSelected, setIsYearSelected] = useState(false);
  const [isModelSelected, setIsModelSelected] = useState(false);

  const onChangeYear: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setYear(e.target.value);
    setIsYearSelected(true);
  };

  const onChangeMake: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setMake(e.target.value);
    setIsModelSelected(true);
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
          <GetMakes
            onChangeMake={onChangeMake}
            year={year}
            isModelSelected={isYearSelected}
          />
        </div>
        <div className="col-sm col-md-6">
          <GetModels
            onChangeModel={onChangeModel}
            year={year}
            make={make}
            isModelSelected={isModelSelected}
          />
        </div>
      </div>
      <div>
        <GetPhoto year={year} make={make} model={model} />
      </div>
    </main>
  );
}

export default App;
