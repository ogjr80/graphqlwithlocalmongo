const graphql = require('graphql');
// const _ = require('lodash');
const NewUser = require('../model/user');

const {
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: GraphQLString},
    firstname: {type: GraphQLString},
    lastname: {type: GraphQLString},
    middlename: {type: GraphQLString},
    age: {type: GraphQLInt}
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: GraphQLList(UserType),
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args){
        if(args.id == null){
          return NewUser.find({}); 
        }
        return NewUser.find({id: args.id});
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery
});
