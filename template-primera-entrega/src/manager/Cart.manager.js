import fs from "fs";

const fsPromise = fs.promises;

class CartManager {
  constructor(path) {
    this.path = path;
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

  async createCart() {}

  async getCartById(cid) {}

  async addProductToCart(cid, pid) {}
}

export default CartManager;
