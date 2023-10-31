const express = require("express");

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("nuevo server");
});
app.get("/usuarios", (req, res) => {
  res.send("hola mundo");
});

const server = app.listen(PORT, () => {
  console.log("hola");
});
