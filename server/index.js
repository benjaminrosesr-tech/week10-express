import express from "express";
import cors from "cors";
import db from "./dbConnection.js";
import studentrouter from "./router/studentrouter.js";
import coursesrouter from "./router/coursesrouter.js";



const server = express();
server.use(cors());

server.use ("/students", studentrouter);
server.use ("/courses", coursesrouter) ; 

server.get("/", (req, res) => {
  // "This code tells the server what to do when someone visits the home page."
  res.send("The server is running ");
});




server.listen(4000, () => {
  console.log("Server is listening at port 4000 ...");
});



//server.get ("/students", (req, res  )=> {
  //res.send ("the get request for students recieved")
//});
//server.get("/courses", (req, res) => {
   // res.send("the get request for courses recieved");
  //});

// "this is for post requests" 
//server.post("/students",  (req, res) => {
  //res.send("the post request for students recieved");
//});
//server.post("/courses", (req, res) => {
 // res.send("the post request for courses recieved");
//});