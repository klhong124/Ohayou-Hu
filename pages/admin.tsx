import Head from "next/head";
import { useState } from "react";
import Layout from "../layouts/default";
import { useQuery } from "@apollo/client";
import ModelsQuery from "../graphql/Models.gql";
import { ModelType } from "../types";

export default function CreateProduct() {
  const [model, setModel] = useState(null);
  const { data: modelsData, loading } = useQuery(ModelsQuery, {
    onCompleted: ({ models }) => {
      setModel(models[0]);
    },
  });

  const [product, setProduct] = useState({
    tag: null,
    model: null,
    image: null,
    price: null,
    size: null,
    color: null,
    status: null,
    created_at: null,
    updated_at: null,
  });

  const updateProduct = (key: string, value: string): any => {
    setProduct((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const updateModel = (_id: string): any => {
    const model: ModelType = modelsData?.models.filter((model) => model._id == _id)[0];
    setModel(model);
    setProduct((prevState) => ({
      ...prevState,
      model: _id || null,
    }));
  };
  const SelectModel = () => {
    if (loading) {
      return <input type="text" placeholder="Fetching Data..." disabled />;
    }
    return (
      <select onChange={(evt) => updateModel(evt.target.value)}>
        {modelsData?.models.map((model) => (
          <option value={model._id} key={model._id}>
            {model.title}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div>
      <Head>
        <title>OHAYOU.HU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto">
          <div className="flex gap-4 flex-col lg:flex-row">
            {/* left */}
            <div className="grow">
              <div className="image_uploader"></div>

              {/* Model */}
              <div className="mb-6">
                <label>Model</label>
                <div className="flex gap-4">
                  <SelectModel />
                  <button type="button" className="button">
                    Add Model
                  </button>
                </div>
              </div>

              <div>tag</div>
              <input type="text" />

              <div>price</div>

              <div>size</div>

              <div>color</div>

              <div>status</div>

              <div>categories</div>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            {/* right */}
            <div className="flex-none lg:w-1/3">
              <div className="aspect-square">
                <img src={model?.thumbnail} className="object-center object-cover w-full h-full" />
              </div>
              <div className="text-xl">{model?.title}</div>
              <div className="text-base">{model?.subtitle}</div>
              <hr className="my-2" />
              <p>{model?.description}</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
