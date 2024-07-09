import "./App.css";
import "bootstrap/scss/bootstrap.scss";
import { useState } from "react";
import GetMakes from "./Queries/GetMakes";
import GetModels from "./Queries/GetModels";
import GetYears from "./Queries/GetYears";
import GetPhoto from "./Queries/GetPhoto";

function App() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [isYearSelected, setIsYearSelected] = useState(false);
  const [isMakeSelected, setIsMakeSelected] = useState(false);
  const [isModelSelected, setIsModelSelected] = useState(false);

  const onChangeYear: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setYear(e.target.value);
    setIsYearSelected(true);

    // Disables Make and Model selects when Year changes.
    if (isMakeSelected) {
      const selectMake = document.getElementById(
        "select-make"
      ) as HTMLInputElement;
      const selectModel = document.getElementById(
        "select-model"
      ) as HTMLInputElement;

      selectMake.value = "";
      selectModel.value = "";

      setIsMakeSelected(false);
      setIsModelSelected(false);
    }
  };

  const onChangeMake: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setMake(e.target.value);
    setIsMakeSelected(true);

    if (isModelSelected) {
      const selectModel = document.getElementById(
        "select-model"
      ) as HTMLInputElement;

      selectModel.value = "";
    }

    setIsModelSelected(false);
  };

  const onChangeModel: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setModel(e.target.value);
    setIsModelSelected(true);
  };

  return (
    <main>
      <h1 className="text-center text-white">Find a vehicle.</h1>
      <div className="container bg-primary bg-gradient p-3 border border-primary-subtle">
        <div className="row">
          <div className="col-sm col-md-3">
            <GetYears onChangeYear={onChangeYear} />
          </div>
          <div className="col-sm col-md-3">
            <GetMakes
              onChangeMake={onChangeMake}
              year={year}
              isYearSelected={isYearSelected}
            />
          </div>
          <div className="col-sm col-md-6">
            <GetModels
              onChangeModel={onChangeModel}
              year={year}
              make={make}
              isMakeSelected={isMakeSelected}
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-warning "
              disabled={isModelSelected ? false : true}
            >
              Add Vehicle
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <GetPhoto
          year={year}
          make={make}
          model={model}
          isModelSelected={isModelSelected}
        />
      </div>
    </main>
  );
}

export default App;
