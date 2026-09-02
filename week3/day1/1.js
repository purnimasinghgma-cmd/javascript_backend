const express = require("express");

const app = express();
const middlelewere = (req, res, next) => {
    console.log("byy from middleware");
};

// use a middlelewere
app.use(middlelewere);

//Home page
app.get("./Home", (req, res) =>{
    console.log("Home page");
    res.send({mesg: "home page"});

});

// About page
app.get("./about", (req, res) =>{
    console.log("About page");
    res.send({mesg: "About page"});

});

app.listen(8080, () => {
    console.log("server started")
});