import Head from "next/head";
import { FC } from "react";
import { GetServerSideProps } from "next";
import client from "@plugin/apollo";
import MODEL_QUERY from "@graphql/model.gql"
import { CONTENTFUL } from "@constants";
import Model from "@components/model";
import { ModelType } from "types";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const { data: { model: { items } } } = await client.query({
    query: MODEL_QUERY,
    variables: {
      where: {
        sys: {
          id: id
        }
      }
    },
    context: { clientName: CONTENTFUL }
  });
  return { props: { model: items[0] } };
};

type Props = {
  model: ModelType
};

const ModelPage: FC<Props> = ({ model }) => {
  // const { data, loading, error } = useQuery(ExampleQuery);


  // if all good return data
  return (
    <div className="container">
      <Head>
        <title>OHAYOU.HU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>OHAYOU.HU</h1>
      <Model model={model} />
    </div>
  );
}
export default ModelPage;
