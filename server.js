const express  = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');


const app = express();
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(3000, function(){
  console.log('serve running graphql on port 3000');
})
