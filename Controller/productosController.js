const path = require("path");

const productoController = {
    detalle: (req,res) => {
        res.sendFile(path.resolve(__dirname, "./views/detale.html"))
    },
}

const routes = express.Router();

routes.get("/", productoController.detalle)

module.export = productoController;