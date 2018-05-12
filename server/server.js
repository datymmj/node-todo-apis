var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users'); 

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
    // console.log(req.body);
    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    },(error) => {
        res.status(400).send(error);
    })
});

app.get('/todos',(req,res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    },(error) => {
        res.status(400).send(e);

    })
})

app.listen(3000,() => {
    console.log('Started on port 3000');
});


// var newTodo = new Todo({
//     text:'    Edit the text    '
    // text:'Serve Dinner',
    // completed:false,
    // completedAt:123
// });

// newTodo.save().then((docs) => {
// console.log('saved todo',JSON.stringify(docs,undefined,2));
// },(error) => {
//     console.log('Unable to save todo',error);
// });



// var newUsers = new Users({
//     email:'akjais1994@gmail.com'
// });

// newUsers.save().then((docs) => {
//     console.log('saved todo',JSON.stringify(docs,undefined,2));
// },(error) => {
//     console.log('Unable to save User',error);
// });

module.exports = {app};