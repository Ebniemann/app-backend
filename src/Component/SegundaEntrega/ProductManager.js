const fs = require("fs");
class ProductManager {
  constructor(ruta) {
    this.path = ruta;
  }
  getProduct() {
    if (fs.existsSync(this.path)) {
      const data = fs.readFileSync(this.path, "utf-8");
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    let products = this.getProduct();
    let codeUnique = products.some((prod) => prod.code === code);
    if (!codeUnique) {
      let id = 1;

      if (products.length > 0) {
        id = products[products.length - 1].id + 1;
      }
      products.push({ id, title, description, price, thumbnail, code, stock });

      fs.writeFileSync(this.path, JSON.stringify(products, null, 4));
    }
  }

  getProductById(id) {
    let products = this.getProduct();
    if (!products.find((prod) => prod.id === id)) {
      console.log("id inexistente");
    } else {
      console.log(products.find((prod) => prod.id === id));
    }
  }

  updateProduct(id, updateData) {
    let products = this.getProduct();
    let productById = products.findIndex((prod) => prod.id === id);
    if (productById === -1) {
      return "id inexistente";
    } else {
      if (updateData.id && updateData.id !== id) {
        console.log("No se puede editar el ID del producto");
      } else {
        products[productById] = { ...products[productById], ...updateData };
        console.log("Producto editado");
      }
    }
    fs.writeFileSync(this.path, JSON.stringify(products, null, 4));
  }

  deletProduct(id) {
    let products = this.getProduct();

    let deletById = products.filter((prod) => prod.id !== id);

    if (deletById.length < products.length) {
      fs.writeFileSync(this.path, JSON.stringify(deletById, null, 4));
      return deletById;
    } else {
      console.log("No se encontro el producto con ese ID");
      return null;
    }
  }
}

let productManager = new ProductManager("./archivo.json");
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
console.log(productManager.getProduct());

productManager.getProductById(2);

productManager.updateProduct(1, {
  title: "niños",
  description: "son de ninos",
  price: 99999,
  thumbnail: "img/sunglassesNiños.png",
  code: "1",
  stock: "30",
});
console.log(productManager.getProduct());

productManager.deletProduct(1);
console.log(productManager.getProduct());
