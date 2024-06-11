import gql from "graphql-tag";
export const GET_PRODUCT_AND_CATEGORIES = gql`
  query getProductsAndCategories(
    $limit: Int
    $offset: Int
    $fetchCategory: Boolean = true
  ) {
    products(limit: $limit, offset: $offset) {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
    categories @include(if: $fetchCategory) {
      id
      name
      image
    }
  }
`;

export const GET_PRODUCT_BY_CATEGORIES = gql`
  query getProductsByCategory($categoryId: Float!) {
    products(categoryId: $categoryId) {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }
`;

export const SEARCH_PRODUCT = gql`
  query searchProduct($title: String, $categoryId: Float) {
    products(title: $title, categoryId: $categoryId) {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }
`;
