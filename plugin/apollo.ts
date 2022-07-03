import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`,
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;
