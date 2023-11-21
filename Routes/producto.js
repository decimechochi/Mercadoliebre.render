const express = require("express")
const router = express.Router();
const productosController = require("../Controller/productosController");

router.get("/detalle", function(req, res, next) {
    res.render(productosController.detalle);
  });


module.exports = productosController;
module.exports = router;