import Head from "next/head";
import ProductList from "../components/product-list";
import Product from "../components/product";

import Layout from "../layouts/default";
import Image from "next/image";

const Cover = () => {
  return (
    <div className="w-screen h-[200px] sm:h-[300px] relative ">
      <Image className="" src="/cover-image.jpeg" layout="fill" objectFit="cover" />
      <div className="text-xl sm:text-4xl border border-white py-5 px-5 sm:px-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-[5px] sm:tracking-[15px] font-extralight">見字食早餐</div>
    </div>
  );
};
const Bio = () => {
  return (
    <div className="flex my-12 sm:my-20  justify-center" data-aos="fade-up" data-aos-duration="3000">
      <div className="border-b h-0 w-3 mx-4 mt-2 border-black"></div>
      <p className="tracking-[5px] sm:tracking-[12px] font-light">
        中醫較常鼓勵大眾早餐食粥 ， <br />
        去除脾胃積滯、助陽，有利退燒。
      </p>
    </div>
  );
};

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
        <Cover />
        <Bio />

        <ProductList subheader="最新貨品">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>
        <br />
        <ProductList subheader="人氣熱賣">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>
      </Layout>
    </div>
  );
}