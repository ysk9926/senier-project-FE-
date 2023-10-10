"use client";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const TOKEN = "TOKEN";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN),
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export function Provider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
