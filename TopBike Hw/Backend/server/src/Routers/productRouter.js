import express from "express";
import { CreateProduct, DeleteProductByID, GetAllProducts, GetProductByID, GetProductByTitle } from "./../Controllers/productController.js";
import { CheckAdmin } from "../middleware/checkAdmin.js";
import { CheckToken } from "../middleware/checkToken.js";

const router = express.Router()


// Get

router.get("/", GetAllProducts)

router.get("/:id", GetProductByID)

router.get("/by-title", GetProductByTitle)

// Post

router.post("/", CheckToken, CheckAdmin, CreateProduct)

// Delete

router.delete("/:id", CheckToken, CheckAdmin, DeleteProductByID)


export default router
