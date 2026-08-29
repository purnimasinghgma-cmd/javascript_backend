// step - 0 npm init -y
//  step 1 - import expresjs

const express = require("express");

// step - 2 create a application through expressjs
const app = express();

// step - 4 create API/ Routing
app.get("/", (req, res) => {
    res.send("home page")
});

app.get("/about", (req, res) => {
    res.semnd("about page");
});

// step - 3 listen/ run application in port address
app.listen(8080, () => {
    console.log("server started")
});