// step -1 import expressjs

const express = require("express");

// step 2 create application
const app = express();

// step - 3 routes/API 
app.get("/", (req, res) => {
    res.send({msg: "welcome to express server"})
});

app.get("/home", (req, res) => {
    res.send({msg: "welcome to home page"})
});

app.get("/read", (req, res) => {
    const data = fstat.ra

});








// step - 4 listen
app.listen(8080, () => {
    console.log("Server started")

});
 

