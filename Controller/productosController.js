const path = require("path");
const productosController = {
    detalle: (req,res) => {
        res.sendFile(path.resolve(__dirname, "../views/detale.html"))
    },
}

module.export = productosController;