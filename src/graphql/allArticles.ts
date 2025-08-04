import { gql } from 'graphql-request';
import { ARTICLE_FIELDS, AUTHOR_FIELDS, IMAGE_FIELDS } from './fragments';

export const ALL_ARTICLES_QUERY = gql`
  ${ARTICLE_FIELDS}
  ${AUTHOR_FIELDS}
  ${IMAGE_FIELDS}
  query AllArticles {
    allArticle {
      ...ArticleFields
    }
  }
`;
