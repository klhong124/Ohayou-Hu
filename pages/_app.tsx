import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://asia-east2-ohayou-hu-2022.cloudfunctions.net/graphql",
  cache: new InMemoryCache(),
});

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;