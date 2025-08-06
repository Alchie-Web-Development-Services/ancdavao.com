import { gql } from "graphql-request";

export const TEAM_MEMBER_FIELDS = gql`
  fragment TeamMemberFields on TeamMember {
    _id
    _type
    name
    role
    email
    bioRaw
    photo {
      ...ImageFields
    }
    socialMedia {
      facebook
      twitter
      instagram
      linkedin
    }
  }
`;
