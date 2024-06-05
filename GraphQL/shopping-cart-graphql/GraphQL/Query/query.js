import gql from "graphql-tag";
export const GET_PRODUCT_AND_CATEGORIES = gql`
  query getProductsAndCategories($limit: Int, $offset: Int) {
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
    categories {
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
