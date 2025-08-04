import { gql } from 'graphql-request';
import { CAUSE_FIELDS, IMAGE_FIELDS } from './fragments';

export const ALL_CAUSES_QUERY = gql`
  ${CAUSE_FIELDS}
  ${IMAGE_FIELDS}
  query AllCauses {
    allCause {
      ...CauseFields
    }
  }
`;
