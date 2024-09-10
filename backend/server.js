// const express = require('express');
// const dotenv = require('dotenv');
// Load .env file
// dotenv.config();

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from 'path';
// import Product from './models/product.model.js';
// import mongoose from "mongoose";

import productRoutes from "./routes/product.routes.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json()); // allows us to accept json data in th req.body

app.use("/api/products",productRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT,()=>{
    connectDB();
    console.log("server is running on port 5000");
});


// 9SMQDuOHg30dsu5U

