import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@plugin/apollo";
import Head from "next/head";
import { FC, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "@styles/globals.scss";


const MyApp: FC<AppProps> = ({ Component, pageProps }) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
