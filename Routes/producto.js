const express = require("express")
const router = express.Router();
const productosController = require("../Controller/productosController");

router.get("/detalle", productosController.detalle)


module.exports = productosController;
