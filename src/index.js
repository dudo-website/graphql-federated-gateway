import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "technologies", url: process.env.TECH_SERVER_URL },
      { name: "skills", url: process.env.SKILL_SERVER_URL },
      { name: "events", url: process.env.EVENT_SERVER_URL }
    ],
  }),
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen({ port: process.env.SERVER_PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
