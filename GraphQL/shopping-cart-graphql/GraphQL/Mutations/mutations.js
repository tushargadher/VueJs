import gql from "graphql-tag";

export const ADD_USER_LOGIN = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $avatar: String!
  ) {
    addUser(
      data: { name: $name, email: $email, password: $password, avatar: $avatar }
    ) {
      id
      name
      avatar
    }
  }
`;

export const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: ID!
    $title: String!
    $price: Float!
    $description: String!
    $images: [String!]!
  ) {
    updateProduct(
      id: $id
      changes: {
        title: $title
        price: $price
        description: $description
        images: $images
      }
    ) {
      id
      title
      price
      description
      images
    }
  }
`;
