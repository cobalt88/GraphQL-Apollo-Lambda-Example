import { ApolloServer } from "@apollo/server";

import {
	startServerAndCreateLambdaHandler,
	handlers,
} from "@as-integrations/aws-lambda";

import { typeDefs, resolvers } from "./schema/index.js";

const PORT = process.env.PORT || 4003;

// standalone server starter
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(
	server,
	// We will be using the Proxy V2 handler
	handlers.createAPIGatewayProxyEventV2RequestHandler()
);
