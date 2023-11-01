const e = require("express");
const express = require("express");
const ProductManager = require("../SegundaEntrega/ProductManager.js");

let products = new ProductManager("./archivo.json");
const newProduct = products.getProduct();

const PORT = 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("prueba");
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const prod = newProduct;
  const proId = prod.find((p) => p.id == id);
  if (!proId) {
    res.send("No se encontro un producto con ese Id");
  } else {
    res.send(proId);
  }
});

app.get("/products", (req, res) => {
  const product = newProduct;
  if (req.query.limit === "") {
    res.send(product);
  } else {
    let result = product.slice(0, req.query.limit);
    res.send(result);
  }
});

const server = app.listen(PORT, () => {
  console.log("hola");
});
