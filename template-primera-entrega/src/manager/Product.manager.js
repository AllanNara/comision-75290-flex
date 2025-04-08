import fs from "fs";

const fsPromise = fs.promises;

class ProductManager {
  constructor(path) {
    this.path = import.meta.dirname + path;
  }

  async saveDate(doc) {
    const docToString = JSON.stringify(doc, null, 2);
    await fsPromise.writeFile(this.path, docToString);
  }

  async readData() {
    try {
      const json = await fsPromise.readFile(this.path, "utf-8");
      const data = JSON.parse(json);
      return data;
    } catch (error) {
      console.log("File not exists. Building...") 
      return []
    }
  }

  async addProduct(obj) {
    const { title, description, price, thumbnail, code, stock } = obj;

    const products = await this.readData();
    const foundCode = products.find((pr) => pr.code === code);
    if (foundCode) return console.log("Code already exists");

    let id;
    if (!products.length) id = 1;
    else {
      const lastId = products[products.length - 1].id;
      id = lastId + 1;
    }

    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id,
    };

    products.push(newProduct);
    await this.saveDate(products);
    return newProduct;
  }

  async getProducts() {
    return await this.readData()
  }

  async getProductById(pid) {
    const products = await this.readData()
    const product = products.find((pr) => pr.id === pid)
    if(!product) return console.log("Product not found")
    return product
  }

  async updateProduct(pid, obj) {
    const products = await this.readData()
    const indexProduct = products.findIndex((pr) => pr.id === pid)
    if(indexProduct === -1) return console.log("Product not found")

    products[indexProduct] = { ...products[indexProduct], ...obj }

    await this.saveDate(products)
    return products[indexProduct]
  }

  async deleteProduct(pid) {
    const products = await this.readData()
    const indexProduct = products.findIndex((pr) => pr.id === pid)
    if(indexProduct === -1) return console.log("Product not found")
    
    products.splice(indexProduct, 1)
    await this.saveDate(products)
    return { deleted: pid }
  }
}

export default ProductManager;
