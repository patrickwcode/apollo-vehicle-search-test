const CAR_API_KEY: string = import.meta.env.VITE_CAR_API_KEY;

// Car API endpoint for Years does not have keys.  Only an array of years.
function GetYearsFetch() {
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
        return json.map((year: string) => {
          return <option>{year}</option>;
        });
      });
  } catch (err) {
    console.error(err);
  }
}

export default function GetYears() {
  return <GetYearsFetch />;
}
