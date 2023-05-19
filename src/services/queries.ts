import { gql } from "@apollo/client";

export const GET_COUNTRY_INFO = gql`
  query GetCountryInfo($name: String!) {
    Country(name: $name) {
      name
      capital
      population
      currencies {
        name
      }
      officialLanguages {
        name
      }
      flag {
        emoji
      }
    }
  }
`;

export const GET_COUNTRY_INFO2 = gql`
  query GetCountryInfoss($filter: CountryFilterInput) {
    countries(filter: $filter) {
      name
      code
      native
      capital
      currency
      emoji
      emojiU
      languages {
        code
        name
      }
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      name
      capital
      awsRegion
      code
      emoji
      emojiU
      native
      name
      phone
      currency
    }
  }
`;
