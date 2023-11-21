const express = require("express")
const router = express.Router();
const usuarioController = require("../Controller/usuarioController");

router.get("/", usuarioController.home)
router.get("/register", usuarioController.registro)
router.get("/login", usuarioController.login)

module.exports = router;