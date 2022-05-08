import Head from "next/head";
import { FC } from "react";
import { GetServerSideProps } from "next";


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  
  return { props: {  } };
};

type Props = {};

const ModelPage: FC<Props> = () => {
  // const { data, loading, error } = useQuery(ExampleQuery);


  // if all good return data
  return (
    <div className="container">
      <Head>
        <title>OHAYOU.HU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>OHAYOU.HU</h1>
    </div>
  );
}
export default ModelPage;
