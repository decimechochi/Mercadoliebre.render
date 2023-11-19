require("dotenv").config();

const express = require("express");
const app = express ();
const path = require ("path");
const usuarioController = require("./Controller/usuarioController");

app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(
        `Servidor corriendo en el puerto ${port}`);
});


app.get("/", usuarioController.home)

app.get("/register", usuarioController.registro )

app.get("/login", usuarioController.login)

