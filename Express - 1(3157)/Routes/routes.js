const express = require('express');
const router = express.Router()
const {v4:uuidv4} = require('uuid');
const myLogger = require('../MiddleWares/myLogger');
const data = require("../jsonData/MOCK_DATA.json");

router.use(myLogger)

// router.get("/",(req,res)=>{
//     const authors = [];
//     for(let key in data){
//         authors.push(data[key].author);
//     }
//     res.send(authors)
// })

router.get("/books",(req,res)=>{
    
    res.send(data);
})

router.get("/books/:id",(req,res)=>{
    const id = req.params.id;
    const user = data.find(user=>user.id === id);
    res.send(user);
});

router.post("/books",(req,res)=>{
    const {author,book_name,pages,published_year} = req.body;
    if(!author){
        res.send("'Author' field is Required");
        return;
    }
    if(!book_name){
        res.send("'book_name' field is Required")
        return;
    }
    if(!pages){
        res.send("'pages' field is Required")
        return;
    }
    if(!published_year){
        res.send("'published_year' field is Required")
        return;
    }
    const newUser = {
        "id": uuidv4(),
        author,
        book_name,
        pages,
        published_year
    }
    data.push(newUser);
    res.send(newUser)
})

router.delete("/books/:id",(req,res)=>{
    const id = req.params.id;
    const user = data.find(user=>user.id === id);
    if(!user){
        res.send(`No user found with the id {${id}}`);
    }
    for(let key in data){
        if(data[key] === user){
            data.splice(key,1);
            break;
        }
    }
    res.json(user);
})

router.patch("/books/:id",(req,res)=>{
    const id = req.params.id;
    const {author,published_year} = req.body;
    if(!author){
        res.send("Author name is required");
    }
    if(!published_year){
        res.send("published_year name is required");
    }
    data.forEach((user)=>{
        if(user.id === id){
            user.author = author,
            user.published_year = published_year;
            res.json(user);
        }
    })
})

module.exports = router