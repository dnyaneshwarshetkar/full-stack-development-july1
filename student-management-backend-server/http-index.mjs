//import {mul} from "dnyaneshwar-shetkar-math-package";

//console.log(mul(90,2));

import httpModule from "http";


var server = httpModule.createServer((req,res)=>{
   if(req.method === "GET" && req.url === "/students"){
     res.write(JSON.stringify([{name: "John Doe"}, {name: "Maria Doe"}]));
     res.end();
   } else  if(req.method === "POST" && req.url === "/students"){
    res.write(JSON.stringify({status : "Student Created Successfully"}));
    res.end()
    }
    else if(req.method === "DELETE" && req.url === "/students"){
        res.write(JSON.stringify({status : "Student Deleted Successfully"}));
        res.end()
    }
    else if(req.method === "PATCH" && req.url === "/students"){
        res.write(JSON.stringify({status : "Student Updated Successfully"}));
        res.end()
    }
    else if(req.method === "PUT" && req.url === "/students"){
        res.write(JSON.stringify({status : "Student Replaced Successfully"}));
        res.end()
    }
    else {
        res.write("<h1>Default Else Block</h1>");
        res.end();
   }
});


server.listen(3100,()=>{
    console.log("Server is Running");
})


