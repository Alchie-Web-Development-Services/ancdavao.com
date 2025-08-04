import { gql } from 'graphql-request';
import { EVENT_FIELDS, IMAGE_FIELDS } from './fragments';

export const ALL_EVENTS_QUERY = gql`
  ${EVENT_FIELDS}
  ${IMAGE_FIELDS}
  query AllEvents {
    allEvent {
      ...EventFields
    }
  }
`;
