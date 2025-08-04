import { gql } from 'graphql-request';
import { EVENT_FIELDS, IMAGE_FIELDS } from './fragments';

export const EVENT_BY_SLUG_QUERY = gql`
  ${EVENT_FIELDS}
  ${IMAGE_FIELDS}
  query EventBySlug($slug: String!) {
    allEvent(where: {slug: {current: {eq: $slug}}}) {
      ...EventFields
    }
  }
`;
