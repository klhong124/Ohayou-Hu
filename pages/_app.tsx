import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../plugin/apollo-client.js";
import Head from "next/head";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Script from "next/script";

import "../styles/globals.css";

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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-GE5KPNVKK3" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GE5KPNVKK3');
        `}
      </Script>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
