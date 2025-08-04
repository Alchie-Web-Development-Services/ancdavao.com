import { gql } from 'graphql-request';
import { VOLUNTEER_FIELDS } from './fragments/index';

export const ALL_VOLUNTEERS_QUERY = gql`
  ${VOLUNTEER_FIELDS}
  query AllVolunteers {
    allVolunteer {
      ...VolunteerFields
    }
  }
`;
