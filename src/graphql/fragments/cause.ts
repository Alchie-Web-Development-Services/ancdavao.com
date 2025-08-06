import { gql } from "graphql-request";

export const CAUSE_FIELDS = gql`
  fragment CauseFields on Cause {
    _id
    _type
    title
    slug {
      current
    }
    startDate
    endDate
    goalAmount
    raised
    descriptionRaw
    mainImage {
      ...ImageFields
    }
  }
`;
