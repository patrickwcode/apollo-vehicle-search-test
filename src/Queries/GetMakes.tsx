import { gql, useQuery } from "@apollo/client";
// import { Context } from "../Context";
// import { useContext } from "react";

function GetMakesQuery(props: any) {
  const { onChangeMake, year } = props;
  // const value = useContext(Context);
  // const yearVar = makeVar(value.year);
  const GET_MAKES = gql`
  query Makes {
    makes
      @rest(type: "Make", path: "/api/makes?direction=asc&year=${year}&sort=id") {
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

  return (
    <select id="select-make" name="select-make" onChange={onChangeMake}>
      <option value="make">Make</option>
      {data?.makes.data.map((make: { id: string; name: string }) => {
        return (
          <option value={make.name} key={make.id}>
            {make.name}
          </option>
        );
      })}
    </select>
  );
}

export default function GetMakes() {
  return <GetMakesQuery />;
}
