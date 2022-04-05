import Head from "next/head";
import Layout from "../../layouts/admin";
import { TableColumn } from "react-data-table-component";
import DataTable, { sortIcon } from "../../plugin/data-table.js";
import { useRouter } from "next/router";

import { ModelType } from "../../types";
import moment from "moment";
import { useQuery } from "@apollo/client";
import ModelsQuery from "../../graphql/Models.gql";

const columns: TableColumn<ModelType>[] = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Subtitle",
    selector: (row) => row.subtitle,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
  },
  {
    name: "Thumbnail",
    selector: (row) => row.thumbnail,
    sortable: true,
  },
  {
    name: "tag",
    selector: (row) => row.tag?.join(", "),
    sortable: true,
  },
  {
    name: "created_at",
    selector: (row) => moment(row.created_at).format("llll"),
    sortable: true,
  },
  {
    name: "updated_at",
    selector: (row) => moment(row.updated_at).format("llll"),
    sortable: true,
  },
];

export default function CreateModel() {
  const router = useRouter();

  const { data } = useQuery(ModelsQuery);
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
        <DataTable title="Models" sortIcon={sortIcon} columns={columns} data={data?.models || []} pagination onRowClicked={rowClickedHandler} theme="white" />
      </Layout>
    </div>
  );
}
