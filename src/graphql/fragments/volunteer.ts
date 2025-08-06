import { gql } from 'graphql-request';

export const VOLUNTEER_FIELDS = gql`
  fragment VolunteerFields on Volunteer {
    _id
    _type
    name
    email
    phone
    position
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
