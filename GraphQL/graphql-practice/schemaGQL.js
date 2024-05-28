import { gql } from "apollo-server";
const typeDefs = gql`
  type Book {
    title: String
    author: String
    price: Int
  }
  type User {
    id: ID
    name: String
    email: String
    age: String
    posts: [Post]
  }
  type Post {
    id: ID
    userId: ID
    title: String
    content: String
    user: User
  }

  #query from the client side
  type Query {
    greet: String
    book: Book
    users: [User]
    #get the single user by id
    user(id: ID!): User
    usersPost(userId: ID!): [Post]
    posts: [Post]
  }

  #mutation to change data on server from clinet
  type Mutation {
    #it return the created user

    #createUser(name: String!, email: String!, age: String!): User
    createUser(UserData: UserInput!): User
    #after that we make resovler of this mutation

    createPost(PostData: PostInput!): Post
  }

  #creating user type
  input UserInput {
    name: String!
    email: String!
    age: String!
  }

  input PostInput {
    userId: ID!
    title: String!
    content: String!
  }
`;
export default typeDefs;
