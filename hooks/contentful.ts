import { DocumentNode, OperationVariables, TypedDocumentNode, useQuery } from "@apollo/client";
import { CONTENTFUL } from "@constants";

const useContentful = (query: DocumentNode | TypedDocumentNode<any, OperationVariables>) => {
  return useQuery(query, { context: { clientName: CONTENTFUL } });
};

export default useContentful;
