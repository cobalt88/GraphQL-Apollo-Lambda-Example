import { gql } from "graphql-tag";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";

const typeDefs = gql`
	${scalarTypeDefs}
	type Query {
		hello: String
		GetUserById(id: ID!): String
		GetUsers(limit: Int!): String
		GetRole(id: ID!): String
		GetRoles(limit: Int!): String
	}
`;

export default typeDefs;
