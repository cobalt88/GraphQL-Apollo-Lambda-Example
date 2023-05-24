import { gql } from "graphql-tag";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";

const typeDefs = gql`
	${scalarTypeDefs}
	type Query {
		hello: String
		GetUserById: String
		GetUsers: String
		GetRole: String
		GetRoles: String
	}
`;

export { typeDefs };
