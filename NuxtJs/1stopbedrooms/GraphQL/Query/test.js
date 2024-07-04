
import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  fragment fragmentImage on catalogSearchImage {
    style
    alt
    src
    sources {
      media
      srcset
      __typename
    }
    classes
    __typename
  }

  fragment fragmentDynamicAttribute on catalogSearchPrimaryDynamicAttributeInterface {
    type
    ... on catalogSearchPrimaryDynamicAttributeTextType {
      count
      label
      __typename
    }
    ... on catalogSearchPrimaryDynamicAttributeThumbnailType {
      additional
      items {
        image
        webId
        classes
        __typename
      }
      __typename
    }
    ... on catalogSearchPrimaryDynamicAttributeSwatchThumbnailType {
      additional
      items {
        image
        webId
        classes
        __typename
      }
      __typename
    }
    __typename
  }

  fragment fragmentCatalogProduct on catalogSearchProductInterface {
    id
    webId
    name
    labels
    brand {
      id
      name
      __typename
    }
    slug
    url
    shippingType
    price {
      finalPrice
      msrp
      showMsrp
      getExcludePromo
      getSale
      __typename
    }
    tags {
      primaryDealTag
      primaryDealTagVisibility
      secondaryTag
      secondaryTagVisibility
      tertiaryTag
      tertiaryTagVisibility
      __typename
    }
    images {
      mainImage {
        ...fragmentImage
        __typename
      }
      hoverImage {
        ...fragmentImage
        __typename
      }
      __typename
    }
    reviews {
      number
      rating
      __typename
    }
    mattressData {
      comfort
      height
      type
      top_type
      label
      __typename
    }
    ... on catalogSearchProductDynamicItem {
      dynamicAttribute {
        ...fragmentDynamicAttribute
        __typename
      }
      secondaryDynamicAttribute {
        ...fragmentDynamicAttribute
        __typename
      }
      __typename
    }
    __typename
  }

  fragment fragmentBanner on promoData {
    bannerImage
    bannerImageAlt
    url
    __typename
  }

  query getListingData($slug: String!, $request: catalogSearchFilterInput) {
    listing {
      listingCategory(slug: $slug, request: $request) {
        itemsCount
        perPage
        pages
        page
        header: title
        items {
          ...fragmentCatalogProduct
          ... on catalogSearchProductDynamicItem {
            items {
              ...fragmentCatalogProduct
              __typename
            }
            __typename
          }
          __typename
        }
        categoryAdditionalData {
          isVirtual
          genuineSlug
          bannerData {
            desktop {
              ...fragmentBanner
              __typename
            }
            mobile {
              ...fragmentBanner
              __typename
            }
            __typename
          }
          facets {
            attributeCode
            value {
              attrValue
              attrLabel
              __typename
            }
            __typename
          }
          extensionParams {
            key
            value
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
