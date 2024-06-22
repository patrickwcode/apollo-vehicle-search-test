import { gql, useQuery } from "@apollo/client";

const GET_MAKES = gql`
  query Makes {
    makes @rest(type: "Make", path: "/api/makes?direction=asc&sort=id") {
      data {
        id
        name
      }
    }
  }
`;

function GetMakesQuery() {
  const { loading, error, data } = useQuery(GET_MAKES);
  if (loading) return <option>Loading...</option>;
  if (error) return <option>Error : {error.message}</option>;

  return data.makes.data.map((make: { id: string; name: string }) => {
    return (
      <option id={make.id} key={make.id}>
        {make.name}
      </option>
    );
  });
}

export default function GetMakes() {
  return <GetMakesQuery />;
}
