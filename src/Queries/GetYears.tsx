// Free version of Car API is limited from 2015 to 2020.
interface GetYearsProps {
  onChangeYear: React.ChangeEventHandler<HTMLSelectElement>;
}

export default function GetYears({ onChangeYear }: GetYearsProps) {
  return (
    <select id="select-year" onChange={onChangeYear}>
      <option value="year">Year</option>
      <option value="2015" key="2015">
        2015
      </option>
      <option value="2016" key="2016">
        2016
      </option>
      <option value="2017" key="2017">
        2017
      </option>
      <option value="2018" key="2018">
        2018
      </option>
      <option value="2019" key="2019">
        2019
      </option>
      <option value="2020" key="2020">
        2020
      </option>
    </select>
  );
}
