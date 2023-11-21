require("dotenv").config();

const express = require("express");
const path = require ("path");

const producto = require("./routes/producto");
const usuario = require("./routes/usuario")

const app = express ();

/*viwe engine setup*/
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs")

app.use(express.static(__dirname + "/public"));
app.use("/", usuario);
app.use("/producto", producto);

const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, ()=>{
    console.log(
        `Servidor corriendo en el puerto ${port}`);
});
