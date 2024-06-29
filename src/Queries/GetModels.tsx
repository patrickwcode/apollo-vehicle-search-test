import { gql, useQuery } from "@apollo/client";
// import { Context } from "../Context";
// import { useContext } from "react";

function GetModelsQuery(props: any) {
  const { onChangeModel, year, make } = props;
  // const value = useContext(Context);
  // const yearVar = makeVar(value.year);
  // const makeNameVar = makeVar(value.make);
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

  const { loading, error, data } = useQuery(GET_MODELS);
  if (loading) return <option>Loading...</option>;
  if (error) return <option>Error : {error.message}</option>;

  return (
    <select id="select-model" name="select-model" onChange={onChangeModel}>
      <option value="model">Model</option>
      {data?.models.data.map((model: { id: string; name: string }) => {
        return (
          <option value={model.name} key={model.id}>
            {model.name}
          </option>
        );
      })}
    </select>
  );
}

export default function GetModels() {
  return <GetModelsQuery />;
}
