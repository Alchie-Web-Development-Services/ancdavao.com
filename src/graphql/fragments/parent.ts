import { gql } from "graphql-request";

export const PARENT_FIELDS = gql`
  fragment ParentFields on Parent {
    _id
    _type
    firstName
    lastName
    email
  }
`;
