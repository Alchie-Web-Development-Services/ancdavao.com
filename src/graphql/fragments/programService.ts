import { gql } from "graphql-request";

export const PROGRAM_SERVICE_FIELDS = gql`
  fragment ProgramServiceFields on ProgramService {
    _id
    _type
    title
    subTitle
    slug {
      current
    }
    abstract
    descriptionRaw
    mainImage {
      ...ImageFields
    }
    gallery {
      ...ImageFields
    }
  }
`;
