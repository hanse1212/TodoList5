const Sequelize = require("sequelize");
const dotenv = require("dotenv");

const Todo = require("./todo");

dotenv.config();

const nodeEnv = process.env.NODE_ENV;
const config = require("../config/config")[nodeEnv];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Todo = Todo;

Todo.initiate(sequelize);

module.exports = db;