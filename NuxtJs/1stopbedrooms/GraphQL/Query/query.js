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
