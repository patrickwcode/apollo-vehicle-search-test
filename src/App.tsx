import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query Makes {
    makes @rest(type: "Make", path: "/api/makes?direction=asc&sort=id") {
      data {
        id
        name
      }
    }
  }
`;

function GetMakes() {
  const { loading, error, data } = useQuery(query);
  if (loading) return <option>Loading...</option>;
  if (error) return <option>Error : {error.message}</option>;

  return data.makes.data.map((make: any) => {
    return (
      <option id={make.id} key={make.id}>
        {make.name}
      </option>
    );
  });
}

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
