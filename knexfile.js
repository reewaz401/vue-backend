// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "eu-cdbr-west-02.cleardb.net",
      database: "heroku_b8916169e33f970",
      user: "bb3332c51f14ef",
      password: "d7182929",
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
      host: "eu-cdbr-west-02.cleardb.net",
      database: "heroku_b8916169e33f970",
      user: "bb3332c51f14ef",
      password: "d7182929",
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
