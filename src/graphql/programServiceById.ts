import { gql } from 'graphql-request';
import { PROGRAM_SERVICE_FIELDS } from './fragments';

export const PROGRAM_SERVICE_BY_ID_QUERY = gql`
  ${PROGRAM_SERVICE_FIELDS}
  query ProgramServiceById($id: ID!) {
    ProgramService(id: $id) {
      ...ProgramServiceFields
    }
  }
`;
