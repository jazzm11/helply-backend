const express = require("express");
const app = express();

// App setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB(process.env.MONGO_URI);

// Import routes
const default_routes = require("./routes/default_routes");

const user_routes = require("./routes/user_routes")
// Use routes
app.use(default_routes)

app.use("/user", user_routes)
// Start the server
app.listen(6001, ()=>{
    console.log("Server running on port 6001");
})