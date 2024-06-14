import gql from "graphql-tag";
export const GET_PRODUCTS = gql`
  query getInitialListingData(
    $slug: String!
    $request: catalogSearchFilterInput
  ) {
    listing {
      listingCategory(slug: $slug, request: $request) {
        itemsCount
        perPage
        pages
        page
        minPrice
        maxPrice
        title
        items {
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
    }
  }
`;
// export const PRODOUCTS = gql`
//   query ListingQueries {
//     listing {
//       ...ListProducts
//     }
//   }

//   fragment ListProducts on ListingQueries {
//     listingCategory(
//       slug: "bedroom/beds"
//       request: {
//         page: 1
//         perPage: PER_PAGE_36
//         sortBy: RELEVANCE
//         facet: { attributeCode: "bed_type", value: ["13900", "13901", "13906"] }
//       }
//     ) {
//       itemsCount
//       perPage
//       pages
//       page
//       minPrice
//       maxPrice
//       items {
//         id
//         webId
//         brand {
//           id
//           name
//         }
//         collection
//         name
//         reviews {
//           number
//           rating
//           votes {
//             voteName
//             voteCount
//             votePercent
//           }
//         }
//         images {
//           hoverImage {
//             style
//             alt
//             src
//             sources {
//               media
//               srcset
//             }
//             classes
//           }
//           mainImage {
//             style
//             alt
//             src
//             sources {
//               media
//               srcset
//             }
//           }
//         }
//         labels
//         slug
//         url
//         shippingType
//         tags {
//           primaryDealTag
//           primaryDealTagVisibility
//           secondaryTag
//           secondaryTagVisibility
//           tertiaryTag
//           tertiaryTagVisibility
//         }
//         price {
//           price
//           regularPrice
//           finalPrice
//           msrp
//           showMsrp
//           discount
//           getExcludePromo
//           getSale
//         }
//         mattressData {
//           comfort
//           height
//           type
//           top_type
//           label
//         }
//       }
//       filtersBlock {
//         title
//         attrCode
//         facets {
//           itemCount
//           attrLabel
//           attrValue
//           virtualCategoryLink
//         }
//       }
//       title
//       categoryAdditionalData {
//         isVirtual
//         genuineSlug
//         facets {
//           attributeCode
//           value {
//             attrLabel
//             attrValue
//           }
//         }
//         bannerData {
//           desktop {
//             bannerImage
//             url
//             bannerImageAlt
//           }
//           mobile {
//             bannerImage
//             url
//             bannerImageAlt
//           }
//         }
//         extensionParams {
//           key
//           value
//         }
//       }
//       # bannerData {
//       #   id
//       #   name
//       #   display
//       #   slug
//       #   image {
//       #     id
//       #     alt
//       #     src
//       #     sizes {
//       #       xLarge
//       #       large
//       #       medium
//       #       small
//       #       xSmall
//       #     }
//       #   }
//       #   video
//       #   content
//       # }
//     }
//   }
// `;
