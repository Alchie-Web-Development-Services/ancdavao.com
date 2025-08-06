import { gql } from 'graphql-request';

export const ARTICLE_FIELDS = gql`
  fragment ArticleFields on Article {
    _id
    _type
    title
    slug {
      current
    }
    publishedAt
    abstract
    author {
      ...AuthorFields
    }
    mainImage {
      ...ImageFields
    }
  }
`;
