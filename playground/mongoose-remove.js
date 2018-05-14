var {ObjectId} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {Users} = require('./../server/models/users');

//todo remove
// Todo.remove({}).then((result) => {
// console.log(result);
// });

//todo findOneAndRemove
// Todo.findOneAndRemove({_id:'5af93ae1ab9e231c801d60c0'}).then((todo) => {
// console.log(todo);
// });

//todo findByIdAndRemove
Todo.findByIdAndRemove('3af93a05ab9e231c801d607e').then((todo) => {
    console.log(todo);
});
