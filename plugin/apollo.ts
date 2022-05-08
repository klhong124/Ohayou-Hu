import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client';
import { CONTENTFUL } from "@constants"

const firebase = new HttpLink({
  uri: process.env.API_ENDPOINT || "https://asia-east2-ohayou-hu-2022.cloudfunctions.net/graphql",
});

const contentful = new HttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`,
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
  },
});

const client = new ApolloClient({
  link: ApolloLink.split(
    operation => operation.getContext().clientName === CONTENTFUL,
    contentful,
    firebase
  ),
  cache: new InMemoryCache(),
});

export default client