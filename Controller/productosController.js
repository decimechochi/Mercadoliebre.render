const path = require("path");

const productosController = {
    detalle: (req,res) => {
        res.sendFile(path.resolve(__dirname, "./views/detale.html"))
    },
}

const routes = express.Router();

routes.get("/", productosController.detalle)

module.export = productosController;