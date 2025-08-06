import { gql } from "graphql-request";
import { PROGRAM_SERVICE_FIELDS, IMAGE_FIELDS } from "./fragments/index";

export const ALL_PROGRAM_SERVICES_QUERY = gql`
  ${PROGRAM_SERVICE_FIELDS}
  ${IMAGE_FIELDS}
  query AllProgramServices {
    allProgramService {
      ...ProgramServiceFields
    }
  }
`;

export const PROGRAM_SERVICE_BY_SLUG_QUERY = gql`
  ${PROGRAM_SERVICE_FIELDS}
  ${IMAGE_FIELDS}
  query ProgramServiceBySlug($slug: String!) {
    allProgramService(where: { slug: { current: { eq: $slug } } }) {
      ...ProgramServiceFields
    }
  }
`;
