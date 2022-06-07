var express = require("express");
var ROUTER = express.Router();
const { get_allProducts } = require("../controller/products_controller");
const {
  get_allUserProducts,
  post_boughtProducts,
} = require("../controller/user_controller");
ROUTER.get("/all", get_allProducts);
ROUTER.get("/all/user", get_allUserProducts);
ROUTER.post("/post/user", post_boughtProducts);
module.exports = ROUTER;
