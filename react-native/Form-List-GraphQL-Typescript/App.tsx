import React from "react";
import { ApolloProvider } from "@apollo/client/react";
import client from "./src/apolloClient";
import CountriesScreen from "./src/CountriesScreen";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <CountriesScreen />
    </ApolloProvider>
  );
}
