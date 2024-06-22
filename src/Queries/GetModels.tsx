import { gql, useQuery } from "@apollo/client";

const GET_MODELS = gql`
  query Models {
    models @rest(type: "Model", path: "/api/models") {
      data {
        id
        name
      }
    }
  }
`;

function GetModelsQuery() {
  const { loading, error, data } = useQuery(GET_MODELS);
  if (loading) return <option>Loading...</option>;
  if (error) return <option>Error : {error.message}</option>;

  return data.models.data.map((model: { id: string; name: string }) => {
    return (
      <option id={model.id} key={model.id}>
        {model.name}
      </option>
    );
  });
}

export default function GetModels() {
  return <GetModelsQuery />;
}
