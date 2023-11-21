const express = require("express")
const usuarioController = {
    home: (req,res) => {
        res.sendFile(path.resolve(__dirname, "./views/home.html"))
    },
    registro: (req,res) => {
        res.sendFile(path.resolve(__dirname, "./views/register.html"))
    },
    login: (req,res) => {
        res.sendFile(path.resolve(__dirname, "./views/login.html"))
    },

};
const routes = express.Router();

routes.get("/", usuarioController.home)
routes.get("/register", usuarioController.registro )
routes.get("/login", usuarioController.login)

module.exports = usuarioController;