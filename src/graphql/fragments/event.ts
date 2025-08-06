import { gql } from "graphql-request";

export const EVENT_FIELDS = gql`
  fragment EventFields on Event {
    _id
    _type
    title
    slug {
      current
    }
    startDate
    endDate
    location
    descriptionRaw
    mainImage {
      ...ImageFields
    }
  }
`;
