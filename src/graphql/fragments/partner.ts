import { gql } from "graphql-request";

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
