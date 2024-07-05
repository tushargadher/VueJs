// fragment fragmentImage on catalogSearchImage {
//     style
//     alt
//     src
//     sources {
//       media
//       srcset
//       __typename
//     }
//     classes
//     __typename
//   }

//   fragment fragmentDynamicAttribute on catalogSearchPrimaryDynamicAttributeInterface {
//     type
//     ... on catalogSearchPrimaryDynamicAttributeTextType {
//       count
//       label
//       __typename
//     }
//     ... on catalogSearchPrimaryDynamicAttributeThumbnailType {
//       additional
//       items {
//         image
//         webId
//         classes
//         __typename
//       }
//       __typename
//     }
//     ... on catalogSearchPrimaryDynamicAttributeSwatchThumbnailType {
//       additional
//       items {
//         image
//         webId
//         classes
//         __typename
//       }
//       __typename
//     }
//     __typename
//   }

//   fragment fragmentCatalogProduct on catalogSearchProductInterface {
//     id
//     webId
//     name
//     labels
//     brand {
//       id
//       name
//       __typename
//     }
//     cat_names
//     slug
//     url
//     shippingType
//     price {
//       finalPrice
//       msrp
//       showMsrp
//       getExcludePromo
//       getSale
//       __typename
//     }
//     tags {
//       primaryDealTag
//       primaryDealTagVisibility
//       secondaryTag
//       secondaryTagVisibility
//       tertiaryTag
//       tertiaryTagVisibility
//       __typename
//     }
//     couponData {
//       discount
//       code
//       __typename
//     }
//     images {
//       mainImage {
//         ...fragmentImage
//         __typename
//       }
//       hoverImage {
//         ...fragmentImage
//         __typename
//       }
//       __typename
//     }
//     reviews {
//       number
//       rating
//       __typename
//     }
//     mattressData {
//       comfort
//       height
//       type
//       top_type
//       label
//       __typename
//     }
//     ... on catalogSearchProductDynamicItem {
//       dynamicAttribute {
//         ...fragmentDynamicAttribute
//         __typename
//       }
//       secondaryDynamicAttribute {
//         ...fragmentDynamicAttribute
//         __typename
//       }
//       __typename
//     }
//     __typename
//   }

//   fragment fragmentBanner on promoData {
//     bannerImage
//     bannerImageAlt
//     url
//     __typename
//   }

//   query getListingData($slug: String!, $request: catalogSearchFilterInput) {
//     listing {
//       listingCategory(slug: $slug, request: $request) {
//         itemsCount
//         perPage
//         pages
//         page
//         header: title
//         items {
//           ...fragmentCatalogProduct
//           ... on catalogSearchProductDynamicItem {
//             items {
//               ...fragmentCatalogProduct
//               __typename
//             }
//             __typename
//           }
//           __typename
//         }
//         additionalData {
//           ... on ListingCAData {
//             isVirtual
//             genuineSlug
//             bannerData {
//               desktop {
//                 ...fragmentBanner
//                 __typename
//               }
//               mobile {
//                 ...fragmentBanner
//                 __typename
//               }
//               __typename
//             }
//             __typename
//           }
//           facets {
//             attributeCode
//             value {
//               attrValue
//               attrLabel
//               __typename
//             }
//             __typename
//           }
//           extensionParams {
//             key
//             value
//             __typename
//           }
//           ... on ListingBAData {
//             extraChips {
//               attributeCode
//               value {
//                 attrLabel
//                 attrValue
//                 __typename
//               }
//               __typename
//             }
//             __typename
//           }
//           __typename
//         }
//         __typename
//       }
//       __typename
//     }
//   }

import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  # Main query
  query getInitialListingData(
    $slug: String!
    $request: catalogSearchFilterInput
  ) {
    listing {
      listingCategory(slug: $slug, request: $request) {
        ...ListingDetails
      }
    }
  }

  # Fragment for listing details
  fragment ListingDetails on ListingResult {
    itemsCount
    perPage
    pages
    page
    minPrice
    maxPrice
    title
    items {
      ...ProductDetails
      ...ListDynamicAttribute
    }
    filtersBlock {
      title
      attrCode
      facets {
        itemCount
        attrLabel
        attrValue
        child {
          attrValue
        }
      }
    }
  }

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
        voteName
        voteCount
        votePercent
      }
    }
    images {
      hoverImage {
        style
        alt
        src
        sources {
          media
          srcset
        }
        classes
      }
      mainImage {
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
