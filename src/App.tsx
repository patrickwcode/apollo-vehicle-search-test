import "./App.css";
import GetMakes from "./GetMakes";

function App() {
  return (
    <div>
      <select id="select-make">
        <option>Make</option>
        <GetMakes />
      </select>
    </div>
  );
}

export default App;
