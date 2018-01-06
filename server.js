const express  = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const NewUser = require('./model/User');
const NewUser = require('./model/user');


mongoose.connect('mongodb://localhost:27017/usersdb', function(){
});
console.log('database connection succesfull');


const app = express();
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/users', function(req, res){
   NewUser.find({}, function(err,data){
    if(err) return next(err);
    return res.json(data);
  })

})
app.post('/createuser', function(req, res){
  var users = new NewUser(req.body);
  users.save(function(err, user){
    if(err) return next(err);
    return res.json(user);
  })
})

app.listen(3000, function(){
  console.log('serve running graphql on port 3000');
})
