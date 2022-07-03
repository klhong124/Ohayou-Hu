import { DocumentNode, OperationVariables, TypedDocumentNode, useQuery } from "@apollo/client";

const useContentful = (query: DocumentNode | TypedDocumentNode<any, OperationVariables>) => {
  return useQuery(query);
};

export default useContentful;
