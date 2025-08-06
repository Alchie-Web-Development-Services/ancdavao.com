import { gql } from "graphql-request";
import { PARENT_FIELDS } from "./fragments/index";

export const PARENT_BY_ID_QUERY = gql`
  ${PARENT_FIELDS}
  query ParentById($id: ID!) {
    Parent(id: $id) {
      ...ParentFields
    }
  }
`;
