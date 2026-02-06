const express = require("express");

const app = express();

const default_routes = require("./routes/default_routes");

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(default_routes)

app.listen(6001, ()=>{
    console.log("Server running on port 6001");
})