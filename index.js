const MongoClient = require("mongodb").MongoClient;
require('dotenv').config()

let url = process.env.KEY

console.log(url)

MongoClient.connect(url , (err,db) => {
    if(err) throw err;

    console.log("Database created")
    db.close();
})

