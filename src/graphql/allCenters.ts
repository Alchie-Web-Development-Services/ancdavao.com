import { gql } from "graphql-request";
import { CENTER_FIELDS } from "./fragments/index";

export const ALL_CENTERS_QUERY = gql`
  ${CENTER_FIELDS}
  query AllCenters {
    allCenter {
      ...CenterFields
    }
  }
`;
