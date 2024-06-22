import { useEffect, useState } from "react";
const CAR_API_KEY: string = import.meta.env.VITE_CAR_API_KEY;

// Car API endpoint for Years does not have keys.  Only an array of years.

export default function GetYears() {
  let [years, setYears] = useState<object>({});

  useEffect(() => {
    try {
      fetch("https://car-api2.p.rapidapi.com/api/years", {
        method: "GET",
        headers: {
          "x-rapidapi-key": CAR_API_KEY,
          "x-rapidapi-host": "car-api2.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setYears(json);
        });
    } catch (err) {
      console.error(err);
    }
  });

  if (years !== null) {
    return Object.values(years).map((year: string) => {
      return <option>{year}</option>;
    });
  } else {
    return <option>Error: No years found.</option>
  }
}
