const express = require("express");
const { connection, userModel } = require("./db");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send({ msg: "welcome to express server" });
});
app.listen(8080, () => {
  console.log("Server started");
});


