"use client";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  makeVar,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

export const TOKEN = "TOKEN";

// export const LoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const LoggedInVar = makeVar(
  Boolean(typeof localStorage !== "undefined" && localStorage.getItem(TOKEN))
);

export const logUserIn = (token: string) => {
  localStorage.setItem(TOKEN, token);
  LoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  LoggedInVar(false);
  console.log("로그아웃!!");
  window.location.reload();
};

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

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(`GraphQL Error`, graphQLErrors);
  }
  if (networkError) {
    console.log("Network Error", networkError);
  }
});

const uploadHttpLink = createUploadLink({
  // uri: "http://localhost:4000/graphql",
  uri: "https://port-0-senier-project-be-ac2nlkxx9m8s.sel4.cloudtype.app/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(onErrorLink).concat(uploadHttpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export function Provider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
