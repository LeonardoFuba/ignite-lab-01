import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4obkojr1qf801z24w1hfxvc/master",
  cache: new InMemoryCache(),
});
