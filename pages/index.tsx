import Head from "next/head";
import ExampleQuery from "../graphql/ExampleQuery.gql";
import Product from "../components/product";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading, error } = useQuery(ExampleQuery);

  // check for errors
  if (error) {
    return <p>an error happened</p>;
  }

  // if all good return data
  return (
    <div className="container">
      <Head>
        <title>OHAYOU.HU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>OHAYOU.HU</h1>
      {loading && <p>loading...</p>}
      <div>{data?.greeting}</div>
      <Product />
    </div>
  );
}
