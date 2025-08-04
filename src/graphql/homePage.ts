import { gql } from 'graphql-request';
import {
  ARTICLE_FIELDS,
  AUTHOR_FIELDS,
  IMAGE_FIELDS,
  VOLUNTEER_FIELDS,
  CAUSE_FIELDS,
  EVENT_FIELDS,
} from './fragments';

export const HOME_PAGE_QUERY = gql`
  ${ARTICLE_FIELDS}
  ${AUTHOR_FIELDS}
  ${IMAGE_FIELDS}
  ${VOLUNTEER_FIELDS}
  ${CAUSE_FIELDS}
  ${EVENT_FIELDS}
  query HomePageQuery {
    allArticle {
      ...ArticleFields
    }
    allVolunteer {
      ...VolunteerFields
      position
      bioRaw
      photo {
        ...ImageFields
      }
      socialMedia {
        facebook
        twitter
        instagram
        linkedin
      }
    }
    allCause {
      ...CauseFields
    }
    allEvent {
      ...EventFields
    }
  }
`;
