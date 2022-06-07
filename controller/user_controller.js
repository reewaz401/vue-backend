const knex = require("../db/knex");
const { resMessage } = require("./resMessage");
let tableName = "user_products";
const moment = require("moment");
exports.get_allUserProducts = async (req, res) => {
  knex(tableName)
    .then((rows) => resMessage(rows, res, null))
    .catch((err) => resMessage(null, res, err));
};

exports.post_boughtProducts = async (req, res) => {
  let newDate = moment(moment().toDate()).format("YYYY-MM-DD");
  let productList = [];
  let reqBody = req.body;
  reqBody.forEach((product) => {
    console.log(product);
    productList.push({
      product_id: product.id,
      product_name: product.product_name,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      buy_date: newDate,
    });
  });

  knex(tableName)
    .insert(productList)
    .then((rows) => resMessage(rows, res, null))
    .catch((err) => resMessage(null, res, err));
};
