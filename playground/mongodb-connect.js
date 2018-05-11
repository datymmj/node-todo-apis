// const MongoClient = require('mongodb').MongoClient;

//Using  object destructuring and creating a new var
const {MongoClient, ObjectId} = require('mongodb');

// console.log(new ObjectId());
const url = 'mongodb://localhost:27017/Todoapp';
const dbname = 'test';

MongoClient.connect(url,(error,client) => {
    if(error){
    return console.log('Unable to make connection with MongoDB server');
    }
    console.log('Connected to Mongo DB sucessfully');

    const db = client.db('Todoapp');

    // db.collection('Todos').insertOne({
    //     text:'something comes here',
    //     completed:true
    // },(err,result) => {
    //     if(err){
    //         return console.log('Unable to insert todo db');
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.collection('Users').insertOne({
        name:'Anubhav Jaiswal',
        age:23,
        location:'Indore'
    },(err,result) => {
        if(err){
            return console.log('Unable to insert in the users collection');
        }

        // console.log('Inserted document id in the Users collection \n',JSON.stringify(result.ops,undefined,2));
        console.log('Inserted document id in the Users collection \n',result.ops[0]._id.getTimestamp());

    });
    client.close();
});
