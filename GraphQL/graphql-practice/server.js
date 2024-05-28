import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./schemaGQL.js";
import resolvers from "./resolvers.js";
//creating schema

//resolver to send response when clinet send query,resolver is the brain and resolver is the object

//creating appollo server instance and listing on port

const server = new ApolloServer({
  // key vaule is same so just write one time
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

// listening server

server.listen().then(({ url }) => {
  console.log(`server is runing on ${url} `);
});
