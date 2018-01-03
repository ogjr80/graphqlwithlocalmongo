const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLObjectType,
} = graphql;

const users = [
  {
    "id": "1",
    "firstname": "Gideon",
    "lastname": "Ogongo",
    "middlename": "Olufemi",
    "age": 38
  },
  {
    "id": "2",
    "firstname": "Aremu",
    "lastname": "Onikoboko",
    "middlename": "Olufemi",
    "age": 10000
  }
]


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
      type: UserType,
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args){
        return _.find(users, {id:args.id}, function(res){
          return res.data;
        })
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery
});
