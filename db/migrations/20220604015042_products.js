exports.up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    //table.increments('id');
    table.increments("id");
    table.string("product_name").notNullable();
    table.double("price").notNullable();
    table.string("description").notNullable();
    table.string("category").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
