// step -1

const express = require("express");

// step 2
const app = express();

// step - 3 routes/API 
app.get("/", (req, res) => {
    req.send({msg: "welcome to express server"})
});

app.get("/home", (req, res) => {
    req.send({msg: "welcome to home page"})
});

app.get("/about", (req, res) => {
    req.send({msg: "welcome to about page"})
});

// step - 4 listen
app.listen(8080, () => {
    console.log("Server started")

});
 

