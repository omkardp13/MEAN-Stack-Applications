const express = require('express');

const app = express();

const { MongoClient } = require("mongodb");

const URL = "mongodb://127.0.0.1:27017";

const client =new MongoClient(URL);


port=5100;

app.listen(5100,function(req,res)
{
  console.log("Marvellous Server is started Successfully");
});


//Handling cors

app.use((req,res,next)=>
{
  res.header("Access-Control-Allow-Origin","http://localhost:4200");

  res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept");

  next();
});


async function getConnection()
{
    let result = await client.connect();
    let db = result.db("Marvellous");
    let collection = db.collection("Batches");
    return collection;
}

app.get('/getBatches',readData);
async function readData(req,res)
{
    var data= await getConnection();
    data = await data.find().toArray();
    res.send(data);

}



