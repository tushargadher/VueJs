import gql from "graphql-tag";

export default GET_CETEGORYS = gql`
  fragment fragmentHomeImage on HomeImageType {
    alt
    src
    sources {
      media
      srcset
      __typename
    }
    __typename
  }

  fragment fragmentCategories on CategoryQueries {
    smText
    lgText
    banner {
      identifier
      smText
      slug
      image {
        ...fragmentHomeImage
        __typename
      }
      internalRoute
      __typename
    }
    __typename
  }

  query getCategories {
    home {
      category {
        ...fragmentCategories
        __typename
      }
      __typename
    }
  }
`;
