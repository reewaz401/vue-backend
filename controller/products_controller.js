const knex = require("../db/knex");
const { resMessage } = require("./resMessage");
exports.get_allProducts = async (req, res) => {
  let tableName = "products";
  let newRows;
  let newErr;
  knex(tableName)
    .then((rows) => resMessage(rows, res, null))
    .catch((err) => resMessage(null, res, err));
};
