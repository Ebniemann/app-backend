class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    let codeUnique = this.products.some((prod) => prod.code === code);

    if (
      !codeUnique &&
      title &&
      description &&
      price &&
      thumbnail.match(/\.(jpeg|jpg|gif|png)$/) &&
      code &&
      stock
    ) {
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
      return this.product;
    }
  }

  getProductById(id) {
    const findId = this.products.find((prod) => prod.id === id);
    if (findId) {
      return findId;
    } else {
      return "El producto no existe 😭";
    }
  }
}

let productManager = new ProductManager();
productManager.addProduct(
  "Lentes de Sol",
  "Estos nuevos modelos unisex tienen una forma inspirada en el Clubmaster cuadrado con monturas de metal de calidad superior con un elegante esmaltado y acabados contrastantes, con una selección de lentes de un solo color, degradadas, de espejo y polares.",
  3000,
  "img/sunglasses.jpg",
  "123",
  "10"
);
productManager.addProduct(
  "Lentes de Sol",
  "Estos nuevos modelos unisex tienen una forma inspirada en el Clubmaster cuadrado con monturas de metal de calidad superior con un elegante esmaltado y acabados contrastantes, con una selección de lentes de un solo color, degradadas, de espejo y polares.",
  3000,
  "img/sunglasses.jpg",
  "124",
  "10"
);

//ruta de img invalida
productManager.addProduct(
  "Lentes de Sol",
  "Estos nuevos modelos unisex tienen una forma inspirada en el Clubmaster cuadrado con monturas de metal de calidad superior con un elegante esmaltado y acabados contrastantes, con una selección de lentes de un solo color, degradadas, de espejo y polares.",
  3000,
  "img-img-img",
  "123",
  "10"
);
//code repetido
productManager.addProduct(
  "Lentes de Sol",
  "Estos nuevos modelos unisex tienen una forma inspirada en el Clubmaster cuadrado con monturas de metal de calidad superior con un elegante esmaltado y acabados contrastantes, con una selección de lentes de un solo color, degradadas, de espejo y polares.",
  3000,
  "img/sunglasses.jpg",
  "124",
  "10"
);
//Sin la propiedad titulo
productManager.addProduct(
  "Estos nuevos modelos unisex tienen una forma inspirada en el Clubmaster cuadrado con monturas de metal de calidad superior con un elegante esmaltado y acabados contrastantes, con una selección de lentes de un solo color, degradadas, de espejo y polares.",
  3000,
  "img/sunglasses.jpg",
  "126",
  "10"
);

console.log(productManager.getProducts());

console.log(productManager.getProductById(4));

console.log(productManager.getProductById(1));
