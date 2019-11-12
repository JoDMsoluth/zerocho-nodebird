const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const dotenv = require("dotenv");
const passport = require("passport");

const passportConfig = require("./passport");
const db = require("./models");
const userAPIRouter = require("./routes/user");
const postAPIRouter = require("./routes/post");
const postsAPIRouter = require("./routes/posts");

dotenv.config();
const app = express();
// db.sequelize.drop();
db.sequelize.sync(); // 시퀄라이즈문 보고 db생성
// db.sequelize.sync({ force: true });
passportConfig();

app.use(morgan("dev"));
app.use(
  cors({
    origin: true,
    credentials: true
  })
);
app.use(express.json()); // json형식으로 넘어온 데이터 처리
app.use(express.urlencoded({ extended: true })); // form으로 넘어온 데이터 처리
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false, // 매번 세션 저장 x
    saveUninitialized: false, // 빈 세션은 저장 x
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true, // javascript로 쿠키 접근 x
      secure: false // https를 쓸 때 true
    },
    name: "rnbck"
  })
);
app.use(passport.initialize());
app.use(passport.session());

//api는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 하는 창구
app.use("/api/user", userAPIRouter);
app.use("/api/post", postAPIRouter);
app.use("/api/posts", postsAPIRouter);

app.listen(3065, () => {
  console.log("server is running on http://localhost:8080");
});
