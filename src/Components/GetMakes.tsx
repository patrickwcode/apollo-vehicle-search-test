import { gql, useQuery } from "@apollo/client";

interface GetMakesProps {
  onChangeMake: React.ChangeEventHandler<HTMLSelectElement>;
  year: string;
  isYearSelected: boolean;
}

export default function GetMakes({
  onChangeMake,
  year,
  isYearSelected,
}: GetMakesProps) {
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

  const queryGetMakes = useQuery(GET_MAKES, {
    fetchPolicy: "cache-and-network",
  });
  return (
    <select
      className="form-select form-select-md mb-3"
      id="select-make"
      name="select-make"
      onChange={onChangeMake}
      disabled={isYearSelected ? false : true}
    >
      <option value="" selected disabled hidden>
        Make
      </option>
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
