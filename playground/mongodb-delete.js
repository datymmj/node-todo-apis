const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017/Todoapp';

MongoClient.connect(url, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    console.log('Connected to mongo DB successfully');
    const db = client.db('Todoapp');
    //Delete Many
    // db.collection('Todos').deleteMany({text:'Eat Dinner'}).then((result) => {
    //     console.log(result);
    // },(error) => {
    //     console.log('Unable to delete',error);
    // })
    //DeleteOne
    // db.collection('Todos').deleteOne({
    //     completed:false
    // }).then((result) => {
    //     console.log(result);
    // },(error) => {
    // })

    // findOneandDelete
        // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        //      console.log(result);
        // }, (error) => {
        //     console.log('Unable to delete', error);
        // })
    db.collection('Users').deleteMany({name:'Anubhav Jaiswal'});
            // .then((result) => {
            //     console.log(result);
            // },(error) => {
            //     console.log('Unable to Delete',error);
            // });
            
    db.collection('Users')
            .findOneAndDelete({
                _id: new ObjectId('5af573885daeb132143ed837')
            }).then((result)=>{
                console.log(result);
            },(error) => {
                console.log('Unable to delete',error);
            })
})