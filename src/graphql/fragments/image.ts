import { gql } from 'graphql-request';

export const IMAGE_FIELDS = gql`
  fragment ImageFields on Image {
    asset {
      _id
      url
    }
  }
`;
