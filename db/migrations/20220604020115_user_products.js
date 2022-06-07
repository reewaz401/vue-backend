exports.up = function (knex) {
  return knex.schema.createTable("user_products", function (table) {
    //table.increments('id');
    table.increments("id");
    table.string("product_id").notNullable();
    table.string("product_name").notNullable();
    table.double("quantity").notNullable();
    table.double("price").notNullable();
    table.string("category").notNullable();
    table.string("buy_date").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user_products");
};
