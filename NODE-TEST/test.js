// var a = 10;  
// let b = 20;
// const c = 30;
// console.log(a + "+" + b + "=" + (a  + b));
// console.log('${a} + ${b} = $(a+b)');  //string interpolation ()

//we nedd express for creating api
const express = require("express"); // using express creating api, also possible without express
const app = express(); //object of express
const port = 3000;

app.get("/", (req, res) => res.send("Hello Word"));
// I am calling using get method
//endpoint - api
// res.send = send response who is requesting for it
app.get("/student", (req, res) => res.send("Dhruvi PAtel"));

//create endpoint to display university name
app.get("/uni", (req, res) => res.send("MU"));

//create endpoint to display faculty of enginnering
app.get("/uni/faculty", (req, res) => res.send("Faculty of Technology"));

app.get("/student", (req, res) => res.json({name: "Dhruvi Patel", city: "Rajkot"}));

// create endpoints(apis) to display information of all students
// to display specific student with given id 


app.listen(port, () => console.log('Example app listening on port no 3000 '));  // app.listen - for assigining tat port
// () => console.log = call back fun 
//3000 - popular port number for web application
//if we run second time it shows that the port is already used
//hello world shows on server
//if do any changes then we have to update the server bcoz it doesn't know that the code is updated


