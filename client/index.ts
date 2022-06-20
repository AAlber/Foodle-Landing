import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
  ApolloLink
} from "@apollo/client";

const apolloUri = process.env.NEXT_PUBLIC_SERVER_URL+'graphql';
const apolloHttpLink = createHttpLink({
  uri: apolloUri,
//   credentials: "include",
});

const client = new ApolloClient({
  link: ApolloLink.from([apolloHttpLink]),
  cache: new InMemoryCache(),
});

export default client;