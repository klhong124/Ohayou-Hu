import Head from "next/head";
import QUERY_COUNTRIES from "../graphql/CountriesQuery.gql";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  // if all good return data
  return (
    <div className="container">
      <Head>
        <title>Countries GraphQL test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Countries</h1>
      {/* let the user know we are fetching the countries */}
      {loading && <p>loading...</p>}
      <div>
        {data?.countries.map((country) => (
          <div key={country.code}>{country.name}</div>
        ))}
      </div>
    </div>
  );
}
