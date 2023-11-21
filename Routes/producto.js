const express = require("express")
const router = express.Router();
const productoController = require("../Controller/productoController");

router.get("/", usuarioController.home)
router.get("/", usuarioController.registro)
router.get("/", usuarioController.login)

