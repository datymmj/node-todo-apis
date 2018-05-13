var {ObjectId} = require('mongodb');

var {Todo} = require('./../server/models/todo');
var {Users} = require('./../server/models/users');
var {mongoose} = require('./../server/db/mongoose');

var id = '5af6c4114d26cb307872986a';

// if(ObjectId.isValid(id)){
// // Todo.find({
// //     _id:id
// // }).then((todos) => {
// //     console.log(`Todos ${todos}`);   
// // });

// // Todo.findOne({
// //     _id:id
// // }).then((todo) => {
// //     console.log(`todo ${todo}`);
// // });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log(`todo ${todo}`);
// }).catch((e) => console.log('error',e));
// }
// else{
// console.log('Id Not valid');
// }

Users.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log(`User ${JSON.stringify(user,undefined,2)}`);
}).catch((e)=> console.log('Error might have occured'));
