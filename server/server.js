var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users'); 

var app = express();

var port = process.env.PORT || 3000;
app.use(bodyParser.json());

//POST - /todos
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

//GET - /todos
app.get('/todos',(req,res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    },(error) => {
        res.status(400).send(e);

    })
})

//GET - /todos/id
app.get('/todos/:id',(req,res) => {
    // res.send(req.params);
    var id = req.params.id;

    if(!ObjectId.isValid(id)){
        return res.status(404).send();
        }else{
        Todo.findById(id).then((todo) => {
            if(!todo){
                return res.status(404).send();
            }
            // res.send(JSON.stringify(todo));
            res.send({todo});
        })
        .catch((e) => res.status(400).send());
    }
},(error) => {
    res.status(400).send();
});

app.listen(port,() => {
    console.log(`Started on port ${port}`);
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