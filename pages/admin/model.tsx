import Head from "next/head";
import Layout from "../../layouts/admin";
import Tag from "../../components/tag";
import { TableColumn } from "react-data-table-component";
import DataTable, { sortIcon } from "../../plugin/data-table.js";
import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import { ModelType } from "../../types";
import moment from "moment";
import { useQuery } from "@apollo/client";
import ModelsQuery from "../../graphql/Models.gql";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

export default function CreateModel() {
  const modelType = ["title", "subtitle", "description", "image", "size", "color", "categories", "price", "thumbnail", "tag", "created_at", "updated_at"];
  const router = useRouter();
  const { data } = useQuery(ModelsQuery);
  const [showColumns, setShowColumns] = useState(modelType);
  const [filter, setFilter] = useState<string>(null);
  const filterModels = useMemo(() => {
    if (!filter) return data?.models;
    return data?.models.filter((model: ModelType) => model.title.match(RegExp(filter)));
  }, [filter, data]);
  const header: TableColumn<ModelType>[] = useMemo(
    () => [
      {
        name: "Title",
        selector: (row) => row.title,
        sortable: true,
      },
      {
        name: "Subtitle",
        selector: (row) => row.subtitle,
        sortable: true,
        omit: !showColumns.includes("subtitle"),
      },
      {
        name: "Description",
        selector: (row) => row.description,
        sortable: true,
        omit: !showColumns.includes("description"),
      },
      {
        name: "Thumbnail",
        selector: (row) => row.thumbnail,
        sortable: true,
        omit: !showColumns.includes("thumbnail"),
      },
      {
        name: "Tag",
        selector: (row) => row.tag?.join(", "),
        sortable: true,
        omit: !showColumns.includes("tag"),
      },
      {
        name: "Created at",
        selector: (row) => moment(row.created_at).format("llll"),
        sortable: true,
        omit: !showColumns.includes("created_at"),
      },
      {
        name: "Updated at",
        selector: (row) => moment(row.updated_at).format("llll"),
        sortable: true,
        omit: !showColumns.includes("updated_at"),
      },
    ],
    [showColumns]
  );
  const rowClickedHandler = (model: ModelType) => {
    router.push(`/${model._id}`);
  };
  return (
    <div>
      <Head>
        <title>OHAYOU.HU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="p-4 flex justify-between w-full">
          <div>
            <div className="title">Models</div>
            <div className="subtitle">This is a list of Models</div>
          </div>
          <button className="button">Create</button>
        </div>

        <div className="relative mx-2">
          <div className="input-icon">
            <Icon path={mdiMagnify} size={1} />
          </div>
          <input type="text" className="pl-10 p-2.5" placeholder="Search" onChange={(evt) => setFilter(evt.target.value)} />
        </div>
        <div className="flex gap-4 py-2">
          {showColumns.map((column) => (
            <Tag
              title={column}
              onClick={() => {
                return setShowColumns([column]);
              }}
            />
          ))}
        </div>

        <div className="w-full absolute">
          <DataTable sortIcon={sortIcon} columns={header} data={filterModels || []} pagination onRowClicked={rowClickedHandler} theme="white" />
        </div>
      </Layout>
    </div>
  );
}

