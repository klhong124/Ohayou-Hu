import Head from "next/head";
import ExampleQuery from "../graphql/ExampleQuery.gql";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading, error } = useQuery(ExampleQuery);

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  // if all good return data
  return (
    <div className="container">
      <Head>
        <title>Countries GraphQL test2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* let the user know we are fetching the countries */}
      {loading && <p>loading...</p>}
      <div>{data?.greeting}</div>
    </div>
  );
}
