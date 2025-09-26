import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "https://countries.trevorblades.com", // GraphQL API endpoint
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
