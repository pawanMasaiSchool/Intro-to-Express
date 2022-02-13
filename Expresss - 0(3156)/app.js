const express = require('express');
const allUsers = require('./usersArray');
const app = express();
const PORT = 3000;


app.get("/",(req,res)=>{
    res.send("Welcome to Home page")
});
app.get("/users",(req,res)=>{
    res.send(allUsers)
});
app.get("/users/:userId",(req,res)=>{
    const currentUser = allUsers.find(user=>user.id === Number(req.params.userId));
    res.send(`Hello ${JSON.stringify(currentUser.name)} Your userId is ${req.params.userId}`);
});


app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`);
})