import Head from "next/head";
import ModelList from "@layouts/models";
import Layout from "@layouts/default";

import { FC } from "react";

import Cover from "@index/cover";
import Bio from "@index/bio";


import useContentful from "@hooks/contentful"

import MODELS_QUERY from "@graphql/models.gql"
import { GetServerSideProps } from "next";


import Model from "@components/model";
// import { ModelType } from "types";
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const getServerSideProps: GetServerSideProps = async () => {

  return { props: {} };
};

type Props = {};

const Home: FC<Props> = () => {
  const { data, loading, error } = useContentful(MODELS_QUERY)

  return (
    <div id="index">
      <Head>
        <title>OHAYOU.HU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Cover />
        <Bio />
        <ModelList subheader="最新貨品">
          {!loading && data?.models?.items.map((model, index) => {
            return (
              <div key={index}>
                <Model model={model} />
              </div>
            )
          })}
        </ModelList>
        <br />
        <ModelList subheader="人氣熱賣">

        </ModelList>
      </Layout>
    </div>
  );
}

export default Home;
