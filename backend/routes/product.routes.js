import express from "express";
import { createProduct, deleteProduct, getproducts, updateproduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get('/' ,getproducts)
router.post('/',createProduct)
// console.log(process.env.MONGO_URI);
router.put('/:id',updateproduct);
router.delete("/:id" , deleteProduct)

export default router;