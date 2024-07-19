import gql from "graphql-tag";
// GET_PRODUCT_GENERAL_DATA contain general , additional and some review field
export const GET_PRODUCT_GENERAL_DATA = gql`
  query getProductGeneralData($slug: String!) {
    products {
      productBySlug(slug: $slug) {
        general {
          id
          webId
          bedTypeId
          mpn
          sku
          masterSku
          name
          slug
          url
          productType
          typeId
          typeGroup
          labels
          image {
            style
            alt
            src
            classes
            sources {
              media
              srcset
            }
          }
          brand {
            id
            name
            slug
            image {
              style
              alt
              src
              classes
              sources {
                media
                srcset
              }
            }
            isActive
            url
          }
          collection {
            id
            name
            slug
          }
          price {
            price
            regularPrice
            finalPrice
            msrp
            relatedCustomPrice
            totalDiscount
            youSave
            selectionPrice
            discount
            excludePromo
            priceMatch
            priceProtection
            originalPrice
            clearanceQty
            priceValidUntil
          }
          tags {
            primary
            primaryVisibility
            secondary
            secondaryVisibility
            tertiary
            tertiaryVisibility
            banner
            bannerVisibility
          }
          coupon {
            discount
            discountType
            code
            minPurchase
          }
        }
        additional {
          showAffirm
          showKatapult
          outOfStock
          selectionId
          optionId
          mattressDesc {
            comfortLevel
            thickness
            type
            top
          }
          desc
          showDesc
          specs {
            name
            value
            url
          }
          weightAndDim
          delivery {
            type
            method
            date
            isFreeShipping
          }
          canDisplayMattress
          canDisplayMattressPopup
          buildYourOwnEnabled
          visibility
          shopMore {
            key
            title
            url
          }
          dimensions {
            height
            width
            weight
            depth
          }
          gtin
          isUseInGoogleFeed
        }
        review {
          rating {
            number
            rating
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_GALLERY_DATA = gql`
  query getProductGalleryData($slug: String!) {
    products {
      productBySlug(slug: $slug) {
        gallery {
          productImages {
            style
            alt
            src
            classes
            sources {
              media
              srcset
            }
          }
          productThumbImages {
            style
            alt
            src
            classes
            sources {
              media
              srcset
            }
          }
          youtubeLinks {
            src
          }
          youtubeThumbLinks {
            src
          }
          customerImages {
            style
            alt
            src
            classes
            sources {
              media
              srcset
            }
          }
          customerThumbImages {
            style
            alt
            src
            classes
            sources {
              media
              srcset
            }
          }
          solidButtonFlag
          webId
          mpn
        }
      }
    }
  }
`;

export const GET_PRODUCT_GROUPING_DATA = gql`
  fragment fragmentProductImage on ProductImageType {
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

  fragment fragmentGroupingAttribute on GroupingAttribute {
    id
    code
    name
    viewType
    values {
      id
      name
      image {
        ...fragmentProductImage
        __typename
      }
      imageRaw {
        ...fragmentProductImage
        __typename
      }
      __typename
    }
    __typename
  }

  fragment fragmentGroupingProductData on GroupingProduct {
    general {
      id
      name
      bedTypeId
      slug
      productType
      typeId
      labels
      image {
        ...fragmentProductImage
        __typename
      }
      price {
        price
        regularPrice
        finalPrice
        selectionPrice
        __typename
      }
      __typename
    }
    additional {
      outOfStock
      selectionId
      optionId
      buildYourOwnEnabled
      __typename
    }
    __typename
  }

  fragment fragmentGroupingItem on GroupingItem {
    firstAttribute
    secondAttribute
    isDefault
    product {
      ...fragmentGroupingProductData
      __typename
    }
    __typename
  }

  fragment fragmentFoundation on FoundationType {
    attributes {
      ...fragmentGroupingAttribute
      __typename
    }
    items {
      ...fragmentGroupingItem
      __typename
    }
    __typename
  }

  fragment fragmentProductGrouping on ProductGrouping {
    attributes {
      ...fragmentGroupingAttribute
      __typename
    }
    items {
      ...fragmentGroupingItem
      __typename
    }
    foundation {
      ...fragmentFoundation
      __typename
    }
    __typename
  }

  query getProductGroupingData($slug: String!) {
    products {
      productBySlug(slug: $slug) {
        grouping {
          ...fragmentProductGrouping
          __typename
        }
        ... on BundleProduct {
          setSelection {
            count
            label
            isDefault
            isAdditional
            __typename
          }
          pplanInclude
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

export const GET_REVIEW_DATA = gql`
  query getReviewData(
    $slug: String!
    $pageId: Int
    $sortMode: ProductReviewSortModeEnum
    $rating: [Int]
    $searchRequest: String
  ) {
    products {
      productBySlug(slug: $slug) {
        review {
          # first
          images {
            ...fragmentProductImage
          }
          #second
          rating {
            number
            rating
            votes {
              voteName
              voteCount
              votePercent
            }
          }

          #third
          items(
            pageId: $pageId
            sortMode: $sortMode
            rating: $rating
            searchRequest: $searchRequest
            isJsonLD: false
          ) {
            totalQty
            items {
              ...fragmentReviewItem
            }
          }
        }
      }
    }
  }
  fragment fragmentProductImage on ProductImageType {
    style
    alt
    src
    classes
    __typename
    sources {
      media
      srcset
      __typename
    }
  }
  fragment fragmentReviewItem on ProductReviewItem {
    id
    author {
      name
    }
    address {
      city
      regionCode
    }
    product {
      name
      url
      slug
    }
    text
    date
    summary
    rating
    isVerifiedPurchase
    helpfulCount
    images {
      ...fragmentProductImage
    }
  }
`;

export const GET_PRODUCT_SHIPPING_AND_RELATEDSEARCH_DATA = gql`
  query getProductShippingAndRelatedSearchData($slug: String!) {
    products {
      productBySlug(slug: $slug) {
        shippingAndReturn {
          ...shippingAndReturnFragment
        }
        relatedSearch {
          ...relatedSearchFragment
        }
      }
    }
  }
  fragment shippingAndReturnFragment on ShippingAndReturnType {
    shipping {
      title
      subtitle
    }
    return {
      title
      subtitle
      subtitleSlug
      isMattress
      url
      merchantReturnDays
    }
    popupType
    urlShippingDetails
    transitTime {
      minValue
      maxValue
    }
  }
  fragment relatedSearchFragment on RelatedSearchType {
    link
    title
    internalRoute
  }
`;
