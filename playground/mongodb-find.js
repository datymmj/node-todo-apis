
const {MongoClient,ObjectId} = require('mongodb');

var url = 'mongodb://localhost:27017/Todoapp';
var dbname = 'test';

MongoClient.connect(url,(error,client) => {
    if(error){
        return console.log('Unable to make connection with MongoDB server');
    }

    console.log('Connected to DB successfully');

    const db = client.db('Todoapp');

    // db.collection('Todos').find({completed:true}).toArray().then((docs) => {
        db.collection('Todos').find({
            _id: new ObjectId('5af44327ccf01c26681fb6f1')
        }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(error) => {
        console.log('Unable to fetch Todos',error)
    });

    db.collection('Todos').count().then((count) => {
        console.log(`Total count is ${count}`)
    },(error) => {
        console.log('Unable to find',error);
    });

    db.collection('Users').find({
        name:'Anubhav Jaiswal'
        }).toArray().then((docs) => {
        console.log('Users',JSON.stringify(docs,undefined,2));
    },(error) => {
        console.log('Unable to find',error);
    })


    client.close();
});
