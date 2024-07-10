import "./styles.scss";
import { useState } from "react";
import GetMakes from "./Components/GetMakes";
import GetModels from "./Components/GetModels";
import GetYears from "./Components/GetYears";
import GetPhoto from "./Components/GetPhoto";
import Vehicles from "./Components/Vehicles";

function App() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [isYearSelected, setIsYearSelected] = useState(false);
  const [isMakeSelected, setIsMakeSelected] = useState(false);
  const [isModelSelected, setIsModelSelected] = useState(false);
  const [vehicles, setVehicles] = useState<string[]>([]);

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

  const addVehicle = () => {
    setVehicles([...vehicles, `${year} ${make} ${model}`]);
  };

  return (
    <main>
      <h1 className="text-center text-white">Find a vehicle.</h1>
      <form className="container bg-primary bg-gradient p-3 border border-primary-subtle">
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
              onClick={addVehicle}
            >
              Add Vehicle
            </button>
          </div>
        </div>
      </form>
      <div id="vehicles">
        <Vehicles vehicles={vehicles} />
      </div>
      <div className="text-center">
        <GetPhoto year={year} make={make} model={model} />
      </div>
    </main>
  );
}

export default App;
