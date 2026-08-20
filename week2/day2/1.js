// step -1 import expressjs

const express = require("express");
const fs = require("fs");

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
    const data = fs.readFileSync("./1.json", "utf-8");
    // console.log(data, typeof data);


// converting json data ----parse-----> js object
    const jsData = JSON.parse(data);
    console.log(jsData, typeof jsData);

    console.log(jsData.student);

    res.send({deta: jsData.student});

    // res.send({msg: "welcome to about page"});

});

// step - 4 listen
app.listen(8080, () => {
    console.log("Server started")

});
 

