// const express = require("express");
// // Create a middlewere
// const app = express();
// const middlelewere = (req, res, next) => {
//     console.log("byy from middleware");
// };

// // use a middlelewere
// app.use(middlelewere);

// //Home page
// app.get("./Home", (req, res) =>{
//     console.log("Home page");
//     res.send({msg: "home page"});

// });

// // About page
// app.get("./about", (req, res) =>{
//     console.log("About page");
//     res.send({msg: "About page"});

// });

// app.listen(8080, () => {
//     console.log("server started")
// });


const express = require("express");

const app = express();
// Create a middlewere
const middlewere1 = (req, res, next) => {
  console.log(1);
  next();
  console.log(2);
};


const middlewere2 = (req, res, next) => {
  console.log(3);
  next();
  console.log(4);
};
// use a middlewere
app.use(middlewere2);
app.use(middlewere1);

// Home Page
app.get("/home", (req, res) => {
  console.log("Home Page");
  res.send({ msg: "home Page" });
});

// About Page
app.get("/about", (req, res) => {
  console.log("About Page");
  res.send({ msg: "About Page" });
});

app.listen(8080, () => {
  console.log("server started");
});