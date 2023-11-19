const express = require("express")
const router = express.Router();
const usuarioController = require("../Controller/usuarioController");

router.get("/", usuarioController.home)
router.get("/", usuarioController.registro)
router.get("/", usuarioController.login)