const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://localhost:27017/Todoapp';

MongoClient.connect(url,(error,client) => {
    if(error) {
        return console.log('Unable to connect to DB');
    }

    console.log('Connected to DB successfully');

    const db = client.db('Todoapp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId('5af44327ccf01c26681fb6f1')   
    },{
        $set : {
            completed: false
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });
})