import Head from "next/head";
import ModelList from "@layouts/models";
import Layout from "@layouts/default";

import { FC } from "react";

import Cover from "@index/cover";
import Bio from "@index/bio";
import { useQuery } from "@apollo/client";

import MODELS_QUERY from "@graphql/modelsCollection.gql"
import { GetServerSideProps } from "next";

import { CONTENTFUL } from "@constants"

import Model from "@components/model";
// import { ModelType } from "types";
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const getServerSideProps: GetServerSideProps = async () => {




  return { props: {} };
};

type Props = {};

const Home: FC<Props> = () => {
  const { data, loading, error } = useQuery(MODELS_QUERY, { context: { clientName: CONTENTFUL } })

  return (
    <div id="index">
      <Head>
        <title>OHAYOU.HU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Cover />
        <Bio />
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
        <ModelList subheader="最新貨品">
          {/* <Model/> */}
        </ModelList>
        <br />
        <ModelList subheader="人氣熱賣">

        </ModelList>
      </Layout>
    </div>
  );
}

export default Home;
