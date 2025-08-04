import { gql } from 'graphql-request';
import { PARENT_FIELDS } from './fragments';

export const ALL_PARENTS_QUERY = gql`
  ${PARENT_FIELDS}
  query AllParents {
    allParent {
      ...ParentFields
    }
  }
`;
