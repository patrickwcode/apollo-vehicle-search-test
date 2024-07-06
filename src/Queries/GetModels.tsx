import { gql, useQuery } from "@apollo/client";

interface GetModelsProps {
  onChangeModel: React.ChangeEventHandler<HTMLSelectElement>;
  year: string;
  make: string;
}

export default function GetModels({
  onChangeModel,
  year,
  make,
}: GetModelsProps) {
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
  const queryGetModels = useQuery(GET_MODELS, {
    fetchPolicy: "cache-and-network",
  });

  return (
    <select
      className="form-select form-select-md mb-3"
      id="select-model"
      name="select-model"
      onChange={onChangeModel}
    >
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
