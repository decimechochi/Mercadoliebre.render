require("dotenv").config();

const express = require("express");
const app = express ();
const path = require ("path");

app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 4000;


app.use(express.static(path.join(__dirname, "public")));

const producto = require("./routes/producto");
const usuario = require("./routes/usuario")

app.use("/", producto)

app.use("/", usuario)

app.listen(port, ()=>{
    console.log(
        `Servidor corriendo en el puerto ${port}`);
});
