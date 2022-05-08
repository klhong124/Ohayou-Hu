import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../plugin/apollo.js";
import Head from "next/head";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Script from "next/script";

import "@styles/globals.scss";


function MyApp({ Component, pageProps }: AppProps) {
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
