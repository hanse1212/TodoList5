const Sequelize = require("sequelize");

class Todo extends Sequelize.Model {
  // 테이블 생성
  static initiate(sequelize) {
    Todo.init(
      {
        id: {
          type: Sequelize.INTEGER,     // INT
          autoIncrement: true,         // AUTO INCREMENT
          primaryKey: true,            // PK
        },
        isDone: {
          type: Sequelize.BOOLEAN,     // TINYINT => 0(false), 1(true)
          allowNull: false,            // NOT NULL
          defaultValue: false,         // 따로 지정해주지 않으면 자동으로 false
        },
        contentI: {
          type: Sequelize.STRING(40),  // VARCHAR(40)
          allowNull: false,            // NOT NULL
        },
        contentC: {
          type: Sequelize.STRING(40),  // VARCHAR(40)
          allowNull: false,            // NOT NULL
        },
      },
      {
        sequelize,          // 현재 connection 객체
        underscored: true,  // camelCase => snake_case
        modelName: "Todo",  // Node에서 쓰는 이름
        tableName: "todos", // DB에서 쓰는 이름
        charset: "utf8mb4", // 한글 & 이모티콘 허용
        collate: "utf8mb4_general_ci",  // 한글 & 이모티콘 허용
      }
    );
  }
}

module.exports = Todo;