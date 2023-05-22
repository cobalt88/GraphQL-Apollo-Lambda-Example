import { ApolloServer } from "@apollo/server";

import {
	startServerAndCreateLambdaHandler,
	handlers,
} from "@as-integrations/aws-lambda";

import { typeDefs, resolvers } from "./graphql/index.js";

// new apollo server inastance
const server = new ApolloServer({
	typeDefs,
	resolvers,
});


exports.handler = async () => {
	return {
		body: "Hello from Lambda",
	};
};
// export default startServerAndCreateLambdaHandler(
// 	server,
// 	handlers.createAPIGatewayProxyEventV2RequestHandler()
// );