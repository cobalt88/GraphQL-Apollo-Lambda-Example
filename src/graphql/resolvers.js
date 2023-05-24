import { resolvers as scalarResolvers } from "graphql-scalars";

const Query = {
	hello: () => "Hello world!",

	GetUserById: () => "Made it to the get user by id resolver",

	GetUsers: () => "Made it to the get users resolver",

	GetRole: () => "Made it to the get role resolver",

	GetRoles: () => "Made it to the get roles resolver",
};

export { Query };
