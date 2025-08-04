import { gql } from 'graphql-request';

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
