import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } from 'graphql';

const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: 47, firstName: 'Samantha', age: 21 }
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return users.find(user => user.id == args.id);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;