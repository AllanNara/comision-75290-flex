import { Router } from "express";
import CartManager from "../manager/Cart.manager.js";

const router = Router();

router.post("/carts", async (req, res) => {});
router.get("/carts/:cid", async (req, res) => {});
router.post("/carts/:cid/product/:pid", async (req, res) => {});

export default router;
