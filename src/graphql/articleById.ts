import { gql } from "graphql-request";
import { ARTICLE_FIELDS, AUTHOR_FIELDS } from "./fragments/index";

export const ARTICLE_BY_ID_QUERY = gql`
  ${ARTICLE_FIELDS}
  ${AUTHOR_FIELDS}
  query ArticleById($id: ID!) {
    Article(id: $id) {
      ...ArticleFields
    }
  }
`;
