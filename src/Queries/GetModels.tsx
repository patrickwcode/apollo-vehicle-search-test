import { gql, useQuery } from "@apollo/client";

export default function GetModels(props: any) {
  const { onChangeModel, year, make } = props;
  const GET_MODELS = gql`
  query Models {
    models
      @rest(
        type: "Model",
        path: "/api/models?verbose=no&year=${year}&sort=id&make=${make}&direction=asc"
      ) {
      data {
        id
        name
      }
    }
  }
`;
  const queryGetModels = useQuery(GET_MODELS, { fetchPolicy: "cache-and-network" });

  return (
    <select id="select-model" name="select-model" onChange={onChangeModel}>
      <option value="model">Model</option>
      {queryGetModels.data?.models.data.map(
        (model: { id: string; name: string }) => {
          return (
            <option value={model.name} key={model.id}>
              {model.name}
            </option>
          );
        }
      )}
    </select>
  );
}
