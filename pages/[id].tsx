import Head from "next/head";
import ProductsQuery from "../graphql/Products.gql";
import Product from "../components/product";

// import { useQuery } from "@apollo/client";
import client from "../plugin/apollo-client.js";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const { data } = await client.query({
    query: ProductsQuery,
  });
  
  return { props: { data } };
};



export default function Home({ data }) {
  // const { data, loading, error } = useQuery(ExampleQuery);


  // if all good return data
  return (
    <div className="container">
      <Head>
        <title>OHAYOU.HU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>OHAYOU.HU</h1>
      <Product product={data?.products[0]} />
    </div>
  );
}
