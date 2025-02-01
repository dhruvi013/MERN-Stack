const express = require("express");
const app = express();
const port = 3000;
var books = [
  {
    id: 1,
    title: "Unknown",
    author: "Me Only",
    price: 500,
    pub_name: "Pata nahi",
    pub_year: 2025,
  },
];

// to convert into json format the request
app.use(express.json())

//to fetch all books
app.get("/", (req, res) => res.jeson(books));
//to add new book
app.post("/", (req,res) => {
    const { id, title, author, price, pub_name, pub_year } = req.body;
    books = [...books, { id, title, price, pub_name, pub_name }];
    res.json(books); // response.json(books) -> we can write this as res.json(books)
});

//to update a book based on id
app.put("/:id", (req,res) => {
    const id = req.params.id;
    const { title, author, price, pub_name, pub_year } = req.body;
    books = books.map((book) =>
        book.id == id ? { id, title, author, price, pub_name, pub_year } : book
);
    
    res.json(books); // response.json(books) -> we can write this as res.json(books)
});


//to delete a book based on id
app.delete("/:id", (req,res) => {
    const id = req.params.id;
    books = books.filter((book) => book.id != id);
    
    res.json(books); // response.json(books) -> we can write this as res.json(books)
});


app.get("/", (req, res) => res.json(books));
app.listen(port, () =>
  console.log(` server started on http://localhost:${port} !`)
);


//create endpoint to display books details based on given id
//create endpoint to search books by 1)author name 2)pub_year 3)pub_name 4)title 


//create react app to perform crud operation for book