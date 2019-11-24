exports.up = knex =>
  knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl
      .string("username", 128)
      .notNullable()
      .unique();

    tbl.string("password").notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("users");
