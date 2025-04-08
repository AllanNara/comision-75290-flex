import { Router } from "express";
import ProductManager from "../manager/Product.manager.js";

const router = Router();
const productManager = new ProductManager("/data/products.json")

router.get("/products", async (req, res) => {
    try {
        const products = await productManager.getProducts()
        res.json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: "view console"}) 
    }
});

router.post("/products", async (req, res) => {
    try {
        const { title, description, price, thumbnail, code, stock } = req.body;
        if(!title || !description || !price || !thumbnail || !code || !stock) {
            return res.status(400).json({ status: "error", message: "Missing or invalid fields" })
        }
        const result = await productManager.addProduct(req.body);
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: "view console"}) 
    }
});

router.get("/products/:pid", async (req, res) => {});
router.put("/products/:pid", async (req, res) => {});
router.delete("/products/:pid", async (req, res) => {});

export default router;
