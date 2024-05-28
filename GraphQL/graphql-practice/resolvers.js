import { users, posts } from "./data.js";
import { randomBytes } from "crypto";
const resolvers = {
  Query: {
    greet: () => "Hello World , This is GraphQL ",
    book: () => {
      return {
        title: "The Book",
        author: "John Doe",
        price: 20,
      };
    },
    users: () => users,
    // because fisrt agrument is parent , but here user is root so it will undefined so we puted _
    // user: (_, args) => users.find((user) => user.id === args.id),
    user: (_, { id }) => users.find((user) => user.id == id), // destructure id from args

    usersPost: (_, { userId }) => posts.filter((post) => post.userId == userId),
    posts: () => posts,
  },
  User: {
    posts: (user) => posts.filter((post) => post.userId === user.id),
  },
  Post: {
    user: (post) => users.find((user) => user.id === post.userId),
  },
  Mutation: {
    //create user mutation
    createUser: (_, { UserData }) => {
      const id = randomBytes(2).toString("hex");
      users.push({
        id,
        ...UserData,
      });
      //return created user
      return users.find((user) => user.id == id);
    },

    //create new post mutation
    createPost: (_, { PostData }) => {
      const id = randomBytes(2).toString("hex");
      posts.push({
        id,
        ...PostData,
      });
      //return created post
      return posts.find((post) => post.id == id);
    },
  },
};

export default resolvers;
