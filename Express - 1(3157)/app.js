const express = require('express');
const app = express();
const router = require("./Routes/routes.js")
const PORT = 3000;

var cors = require('cors')

app.use(express.json());
app.use(express.urlencoded());
app.use(router);
app.use(cors());


app.listen(PORT,()=>{
    console.log(`Listening at portNumber ${PORT}`);
})