import { gql } from "graphql-request";
import { CAUSE_FIELDS, IMAGE_FIELDS } from "./fragments/index";

export const CAUSE_BY_SLUG_QUERY = gql`
  ${CAUSE_FIELDS}
  ${IMAGE_FIELDS}
  query CauseBySlug($slug: String!) {
    allCause(where: { slug: { current: { eq: $slug } } }) {
      ...CauseFields
    }
  }
`;
