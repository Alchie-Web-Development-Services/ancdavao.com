import { gql } from 'graphql-request';
import { IMAGE_FIELDS, MOMENTS_OF_HOPE_FIELDS } from './fragments/index';

export const ALL_MOMENTS_OF_HOPE_QUERY = gql`
  ${MOMENTS_OF_HOPE_FIELDS}
${IMAGE_FIELDS}
  query AllMomentsOfHope {
    allMomentsOfHope {
      ...MomentsOfHopeFields
    }
  }
`;
