import gql from "graphql-tag";
import {
  LISTING_DETAILS_FRAGMENT,
  LISTING_FILTERS_FRAGEMENT,
} from "../Fragments/ListingFragments.js";
export const GET_PRODUCTS = gql`
  query getInitialListingData(
    $slug: String!
    $request: catalogSearchFilterInput
  ) {
    listing {
      listingCategory(slug: $slug, request: $request) {
        ...ListingDetails
        ...ListingFilters
      }
    }
  }
  ${LISTING_DETAILS_FRAGMENT}
  ${LISTING_FILTERS_FRAGEMENT}
`;
