import { gql, useQuery, makeVar } from "@apollo/client";
import { Context } from "../Context";
import { useContext } from "react";

function GetMakesQuery() {
  const value = useContext(Context);
  const yearVar = makeVar(value.year);
  const GET_MAKES = gql`
  query Makes {
    makes
      @rest(type: "Make", path: "/api/makes?direction=asc&year=${yearVar()}&sort=id") {
      data {
        id
        name
      }
    }
  }
`;

  const { loading, error, data } = useQuery(GET_MAKES);
  if (loading) return <option>Loading...</option>;
  if (error) return <option>Error : {error.message}</option>;

  return data.makes.data.map((make: { id: string; name: string }) => {
    return (
      <option value={make.name} key={make.id}>
        {make.name}
      </option>
    );
  });
}

export default function GetMakes() {
  return <GetMakesQuery />;
}
