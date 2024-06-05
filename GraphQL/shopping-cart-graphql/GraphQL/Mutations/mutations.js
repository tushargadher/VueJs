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
