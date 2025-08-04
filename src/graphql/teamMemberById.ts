import { gql } from 'graphql-request';
import { TEAM_MEMBER_FIELDS } from './fragments';

export const TEAM_MEMBER_BY_ID_QUERY = gql`
  ${TEAM_MEMBER_FIELDS}
  query TeamMemberById($id: ID!) {
    TeamMember(id: $id) {
      ...TeamMemberFields
      email
    }
  }
`;
