import { gql } from "graphql-request";
import { TESTIMONIAL_FIELDS } from "./fragments/index";

export const TESTIMONIAL_BY_ID_QUERY = gql`
  ${TESTIMONIAL_FIELDS}
  query TestimonialById($id: ID!) {
    Testimonial(id: $id) {
      ...TestimonialFields
      date
    }
  }
`;
