import Head from "next/head";
import ProductList from "../layouts/product-list";
import Product from "../components/product";

import Layout from "../layouts/default";
import Image from "next/image";

export default function Home({ data }) {
  // const { data, loading, error } = useQuery(ExampleQuery);

  // if all good return data
  return (
    <div>
      <Head>
        <title>OHAYOU.HU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="w-screen h-[200px] sm:h-[300px] relative">
          <Image className="" src="/cover-image.jpeg" layout="fill" objectFit="cover" />
          <div className="text-4xl border border-white py-5 px-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-[15px] font-extralight">見字食早餐</div>
        </div>
        <div className="flex my-12  justify-center">
          <div className="border-b h-0 w-3 mx-4 mt-2 border-black"></div>
          <p className="tracking-[5px] sm:tracking-[12px] font-light">
            中醫較常鼓勵大眾早餐食粥 ， <br />
            去除脾胃積滯、助陽，有利退燒。
          </p>
        </div>

        <ProductList subheader="最新貨品">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>

        <br />

        <ProductList subheader="人氣搜索">
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>
      </Layout>
    </div>
  );
}
