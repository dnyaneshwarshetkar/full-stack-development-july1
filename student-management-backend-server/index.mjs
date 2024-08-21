import express from "express";
import bodyParser from "body-parser";
import { MongoClient, ObjectId } from "mongodb";

let url = "mongodb://localhost:27017";

let client = new MongoClient(url);

let database = (async function connectToDBServer(){
    let connection = await client.connect();
    console.log("Connected Successfully");
    let db =  connection.db("college");
    return db;
})();

let app = express();

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get("/", (req,res)=>{
    res.send("<h1>Hello World From ExpressJS</h1>");
});

app.post("/students", async (req,res)=>{
    let db = await database;
    let serverRespponse = await db.collection("students").insertOne(req.body);
    console.log(serverRespponse);
    console.log(req.url, req.method, req.body, req.form);
    res.send(JSON.stringify({message: "Student Created Successfully"}));
})

app.patch("/students/:id", async (req,res)=>{
    let db = await database;
    await db.collection("students").updateOne(
        {_id: new ObjectId(req.params.id)},
        {$set: req.body});
    res.send(JSON.stringify({message: "Student Updated Successfully"}));
})

app.delete("/students/:id", async (req,res)=>{
    let db = await database;
    await db.collection("students").deleteOne(
        {_id: new ObjectId(req.params.id)});
    res.send(JSON.stringify({message: "Student Deleted Successfully"}));
})



app.get("/students", async (req,res)=>{
let db = await database;
let students = await db.collection("students").find().toArray();
console.log(students);
res.send(students);
})

app.get("/students/:id", async (req,res)=>{
    let db = await database;
    let student = await db.collection("students").findOne({_id: new ObjectId(req.params.id)});
    console.log(student);
    res.send(student);
})

app.patch("/students",()=>{

})

app.listen(3100,()=>{
    console.log("Express Server is running");
})