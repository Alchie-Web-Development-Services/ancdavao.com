import { gql } from 'graphql-request';

export const ARTICLE_FIELDS = gql`
  fragment ArticleFields on Article {
    _id
    _type
    title
    slug {
      current
    }
    publishedAt
    abstract
    author {
      ...AuthorFields
    }
    mainImage {
      ...ImageFields
    }
  }
`;

export const AUTHOR_FIELDS = gql`
  fragment AuthorFields on Author {
    firstName
    lastName
  }
`;

export const IMAGE_FIELDS = gql`
  fragment ImageFields on Image {
    asset {
      _id
      url
    }
  }
`;

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

export const EVENT_FIELDS = gql`
  fragment EventFields on Event {
    _id
    _type
    title
    slug {
      current
    }
    startDate
    endDate
    location
    descriptionRaw
    mainImage {
      ...ImageFields
    }
  }
`;

export const TEAM_MEMBER_FIELDS = gql`
  fragment TeamMemberFields on TeamMember {
    _id
    _type
    name
    role
    email
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
`;

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

export const VOLUNTEER_FIELDS = gql`
  fragment VolunteerFields on Volunteer {
    _id
    _type
    name
    email
    phone
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
`;

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

export const BENEFICIARY_FIELDS = gql`
  fragment BeneficiaryFields on Beneficiary {
    _id
    _type
    firstName
    lastName
    nickname
    pseudoName
  }
`;

export const CENTER_FIELDS = gql`
  fragment CenterFields on Center {
    _id
    _type
    name
    address
    email
    phone
  }
`;

export const DOCUMENT_FIELDS = gql`
  fragment DocumentFields on Document {
    _id
    _type
  }
`;

export const MOMENTS_OF_HOPE_FIELDS = gql`
  fragment MomentsOfHopeFields on MomentsOfHope {
    _id
    _type
    title
    date
    link
  }
`;

export const PARENT_FIELDS = gql`
  fragment ParentFields on Parent {
    _id
    _type
    firstName
    lastName
    email
  }
`;

export const PARTNER_FIELDS = gql`
  fragment PartnerFields on Partner {
    _id
    _type
    name
    website
    contactPerson
    contactEmail
    contactPhone
  }
`;

export const SANITY_FILE_ASSET_FIELDS = gql`
  fragment SanityFileAssetFields on SanityFileAsset {
    _id
    _type
    originalFilename
    url
    mimeType
  }
`;

export const SANITY_IMAGE_ASSET_FIELDS = gql`
  fragment SanityImageAssetFields on SanityImageAsset {
    _id
    _type
    originalFilename
    url
    mimeType
  }
`;
