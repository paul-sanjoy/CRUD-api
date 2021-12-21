const express = require("express");
const mongoose = require("mongoose");

//use express
const app = express();

//Connection to database
mongoose.connect("mongodb://localhost/PostDB", {useNewUrlParser : true});
const con = mongoose.connection ;
con.on("open", ()=> {
    console.log("Connected to DB...");
})


//body-parser middleware
app.use(express.json());


//use routes
const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);



//listen to server
app.listen(3001, () => {
    console.log("Server is running at port:3001 ... ");
})

