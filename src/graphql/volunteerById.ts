import { gql } from 'graphql-request';
import { VOLUNTEER_FIELDS } from './fragments';

export const VOLUNTEER_BY_ID_QUERY = gql`
  ${VOLUNTEER_FIELDS}
  query VolunteerById($id: ID!) {
    Volunteer(id: $id) {
      ...VolunteerFields
    }
  }
`;
