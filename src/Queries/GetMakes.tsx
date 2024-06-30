import { gql, useQuery } from "@apollo/client";

export default function GetMakes(props: any) {
  const { onChangeMake, year } = props;
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

  const queryGetMakes = useQuery(GET_MAKES, { fetchPolicy: "cache-and-network" });
  return (
    <select id="select-make" name="select-make" onChange={onChangeMake}>
      <option value="make">Make</option>
      {queryGetMakes.data?.makes.data.map(
        (make: { id: string; name: string }) => {
          return (
            <option value={make.name} key={make.id}>
              {make.name}
            </option>
          );
        }
      )}
    </select>
  );
}
