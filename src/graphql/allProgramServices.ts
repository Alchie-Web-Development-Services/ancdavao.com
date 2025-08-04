import { gql } from 'graphql-request';
import { PROGRAM_SERVICE_FIELDS, IMAGE_FIELDS } from './fragments';

export const ALL_PROGRAM_SERVICES_QUERY = gql`
  ${PROGRAM_SERVICE_FIELDS}
  ${IMAGE_FIELDS}
  query AllProgramServices {
    allProgramService {
      ...ProgramServiceFields
    }
  }
`;
