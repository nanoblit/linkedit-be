require('dotenv').config();

interface IKnexfile {
  [key: string]: object;
}

const knexfile:IKnexfile = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './src/database/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './src/data/migrations',
    },
    seeds: { directory: './src/database/seeds' },
  },
};

module.exports = knexfile;