import gql from "graphql-tag";

export const PRODUCT_DETAILS_FRAGMENT = gql`
  fragment ProductDetails on catalogSearchProductInterface {
    id
    webId
    brand {
      id
      name
    }
    collection
    name
    reviews {
      number
      rating
      votes {
        voteCount
        voteName
        votePercent
      }
    }
    images {
      hoverImage(style: "string") {
        style
        alt
        src
        sources {
          media
          srcset
        }
        classes
      }
      mainImage(style: "string") {
        style
        alt
        src
        sources {
          media
          srcset
        }
        classes
      }
    }
    labels
    slug
    url
    delivery {
      method
    }
    shippingType

    tags {
      primaryDealTag
      primaryDealTagVisibility
      secondaryTag
      secondaryTagVisibility
      tertiaryTag
      tertiaryTagVisibility
    }
    price {
      price
      regularPrice
      finalPrice
      msrp
      showMsrp
      discount
      getExcludePromo
      getSale
    }
  }
`;

export const LIST_DYNAMIC_ATTRIBUTE_FRAGMENT = gql`
  fragment ListDynamicAttribute on catalogSearchProductDynamicItem {
    dynamicAttribute {
      __typename
      ... on catalogSearchPrimaryDynamicAttributeTextType {
        type
        count
        label
      }
      ... on catalogSearchPrimaryDynamicAttributeThumbnailType {
        type
        items {
          image
          webId
          classes
        }
        additional
      }
      ... on catalogSearchPrimaryDynamicAttributeSwatchThumbnailType {
        type
        additional
        items {
          image
          webId
          classes
        }
      }
    }
    items {
      ...ProductDetails
    }
  }
  ${PRODUCT_DETAILS_FRAGMENT}
`;

export const LISTING_DETAILS_FRAGMENT = gql`
  fragment ListingDetails on ListingResult {
    itemsCount
    perPage
    pages
    page
    title
    items {
      ...ProductDetails
      ...ListDynamicAttribute
    }
  }
  ${PRODUCT_DETAILS_FRAGMENT}
  ${LIST_DYNAMIC_ATTRIBUTE_FRAGMENT}
`;

export const LISTING_FILTERS_FRAGEMENT = gql`
  fragment ListingFilters on ListingResult {
    itemsCount
    perPage
    pages
    page
    minPrice
    maxPrice
    filtersBlock {
      title
      attrCode
      facets {
        itemCount
        attrLabel
        attrValue
        virtualCategoryLink
      }
    }
  }
`;
