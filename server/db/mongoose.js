var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://<firstmongodbuser>:<fmdbu123>@ds121960.mlab.com:21960/todoapi')
module.exports = {mongoose};