import { gql } from 'graphql-request';
import { CAUSE_FIELDS, IMAGE_FIELDS } from './fragments';

export const CAUSE_BY_ID_QUERY = gql`
  ${CAUSE_FIELDS}
  ${IMAGE_FIELDS}
  query CauseById($id: ID!) {
    Cause(id: $id) {
      ...CauseFields
    }
  }
`;
