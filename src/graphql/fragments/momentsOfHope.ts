import { gql } from 'graphql-request';

export const MOMENTS_OF_HOPE_FIELDS = gql`
  fragment MomentsOfHopeFields on MomentsOfHope {
    _id
    _type
    title
    date
    link
    image {
      ...ImageFields
    }
  }
`;
