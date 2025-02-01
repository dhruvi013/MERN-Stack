// create endpoints(apis) to display information of all students
// to display specific student with given id 

var students = [
    {
      id: 1,
      name: "Jay",
      city: "Rajkot",
      age: 14,
    },
    {
      id: 2,
      name: "Jay",
      city: "Rajkot",
      age: 14,
    },
    {
      id: 3,
      name: "Vijay",
      city: "Morbi",
      age: 10,
    },
    {
      id: 4,
      name: "Ajay",
      city: "Rajkot",
      age: 12,
    },
    {
      id: 5,
      name: "Raj",
      city: "Jamnagar",
      age: 12,
    },
  ];
  const express = require("express");
  const app = express();
  const port = 3000;
  
//   app.get("/", (req, res) => res.json(students));
//   app.get("/student/:id", (req, res) => {
//     var stud_id = req.params.id;
//     var student = students.filter((s) => s.id == stud_id);
//     res.json(student);
//   });
  
//   app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  


  //create endpoint which will display user's from the given city
  app.get("/", (req, res) => res.json(students));
  app.get("/student/:id", (req, res) => {
    var stud_id = req.params.id;
    var student = students.filter((s) => s.id == stud_id);
    res.json(student);
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));


  //create endpoint which will display all the students above given age
  
