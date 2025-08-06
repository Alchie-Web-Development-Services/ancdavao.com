import { gql } from 'graphql-request';
import { MOMENTS_OF_HOPE_FIELDS } from './fragments/index';

export const MOMENTS_OF_HOPE_BY_ID_QUERY = gql`
  ${MOMENTS_OF_HOPE_FIELDS}
  query MomentsOfHopeById($id: ID!) {
    MomentsOfHope(id: $id) {
      ...MomentsOfHopeFields
    }
  }
`;
