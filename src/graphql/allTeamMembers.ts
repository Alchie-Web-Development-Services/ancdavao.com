import { gql } from 'graphql-request';
import { TEAM_MEMBER_FIELDS, IMAGE_FIELDS } from './fragments/index';

export const ALL_TEAM_MEMBERS_QUERY = gql`
  ${TEAM_MEMBER_FIELDS}
  ${IMAGE_FIELDS}
  query AllTeamMembers {
    allTeamMember {
      ...TeamMemberFields
    }
  }
`;
