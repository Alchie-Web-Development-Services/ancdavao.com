import { gql } from 'graphql-request';
import { ARTICLE_FIELDS, AUTHOR_FIELDS, IMAGE_FIELDS } from './fragments/index';

export const ARTICLE_BY_SLUG_QUERY = gql`
  ${ARTICLE_FIELDS}
  ${AUTHOR_FIELDS}
  ${IMAGE_FIELDS}
  query ArticleBySlug($slug: String!) {
    allArticle(where: {slug: {current: {eq: $slug}}}) {
      ...ArticleFields
      bodyRaw
    }
  }
`;
