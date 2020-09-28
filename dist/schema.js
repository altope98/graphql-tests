import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';
const typeDefs = `
    type Query{
        name: String
        greet(name: String): String
    }
    
    type Task{
        _id:ID
        title: String!
        description: String!
        number: Int
    
    }

`;
export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
//# sourceMappingURL=schema.js.map