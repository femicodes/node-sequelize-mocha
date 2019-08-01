"use strict";

require('dotenv').config();

module.exports = {
  development: {
    database: 'books',
    username: 'femi',
    password: 'oluwafemi',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    database: 'books_test',
    username: 'femi',
    password: 'oluwafemi',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    },
    logging: false
  }
};