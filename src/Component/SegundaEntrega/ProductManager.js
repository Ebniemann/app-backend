const fs = require("fs").promises;
class ProductManager {
  constructor() {
    this.path = "./archivo.txt";
    this.products = [];
  }

  addProduct = async (title, description, price, thumbnail, code, stock) => {
    let id = 1;

    if (this.products.length > 0) {
      id = this.products[this.products.length - 1].id + 1;
    }
    let product = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(product);

    try {
      await fs.writeFile(this.path, JSON.stringify(this.products));
    } catch (error) {
      console.error(error.message);
    }
  };

  getProduct = async () => {
    try {
      let lectura = await fs.readFile(this.path, "utf-8");
      console.log(JSON.parse(lectura));
    } catch (error) {
      console.error(error.message);
    }
  };

  getProductById = async (id) => {
    const data = await fs.readFile(this.path, "utf-8");
    const products = JSON.parse(data);
    if (!products.find((prod) => prod.id === id)) {
      console.log("id inexistente");
    } else {
      console.log(products.find((prod) => prod.id === id));
    }
  };
}

let productManager = new ProductManager();
productManager.addProduct(
  "Lentes de Sol Mujer",
  "Estos nuevos modelos unisex",
  3000,
  "img/sunglasses.jpg",
  "1",
  "10"
);

productManager.addProduct(
  "Lentes de Sol Hombre",
  "Estos nuevos modelos unisex",
  4000,
  "img/sunglasses.jpg",
  "2",
  "20"
);

productManager.getProduct();
productManager.getProductById(3);
