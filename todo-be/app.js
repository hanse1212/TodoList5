const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

const { sequelize } = require("./models");
const indexRouter = require("./routes");
const todoRouter = require("./routes/todo");

dotenv.config();

const port = process.env.PORT;

// 서버 생성
const app = express();

// DB 연결
const driver = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("[DB] 연결 성공!");
  } catch (err) {
    console.error("[DB] 연결 실패...");
    console.error(err);
  }
}
driver();

// 미들웨어 연결
app.use(cors());  // 다른 도메인으로부터 들어오는 요청 허용해주는 옵션
app.use(morgan("dev"));
app.use(express.json());
app.use("/", indexRouter);
app.use("/todos", todoRouter);

// 404 Not Found
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`);
});