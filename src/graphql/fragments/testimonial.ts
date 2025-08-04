import { gql } from 'graphql-request';

export const TESTIMONIAL_FIELDS = gql`
  fragment TestimonialFields on Testimonial {
    _id
    _type
    author
    authorRole
    contentRaw
    authorImage {
      ...ImageFields
    }
  }
`;
