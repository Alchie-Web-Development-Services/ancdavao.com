import { gql } from "graphql-request";

export const PROGRAM_SERVICE_FIELDS = gql`
  fragment ProgramServiceFields on ProgramService {
    _id
    _type
    title
    slug {
      current
    }
    category
    startDate
    endDate
    descriptionRaw
    mainImage {
      ...ImageFields
    }
  }
`;
