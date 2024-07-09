import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const CAR_API_KEY: string = import.meta.env.VITE_CAR_API_KEY;

const restLink = new RestLink({
  uri: "https://car-api2.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": CAR_API_KEY,
    "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
