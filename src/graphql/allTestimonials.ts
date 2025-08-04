import { gql } from 'graphql-request';
import { TESTIMONIAL_FIELDS, IMAGE_FIELDS } from './fragments';

export const ALL_TESTIMONIALS_QUERY = gql`
  ${TESTIMONIAL_FIELDS}
  ${IMAGE_FIELDS}
  query AllTestimonials {
    allTestimonial {
      ...TestimonialFields
    }
  }
`;
