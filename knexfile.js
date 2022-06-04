// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      database: "shop_db",
      user: "root",
      password: "first1974",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: "localhost",
      database: "shop_db",
      user: "root",
      password: "first1974",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
