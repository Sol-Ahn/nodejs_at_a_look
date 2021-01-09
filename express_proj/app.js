// 필요한 모듈 불러오기
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan"); // http request에 대해 logging하는 모듈

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express(); // app 객체를 선언하고 express() 함수 생성

// view engine setup
app.set("views", path.join(__dirname, "views")); // view template 파일들이 있는 경로를 라우팅하기 위해 그 값을 미리 정의
app.set("view engine", "pug"); // view에 사용될 기본 엔진 이름 정의

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); // 디렉토리 구조를 URL에 반영하여 쉽게 접근 가능한 정적 디렉토리 설정

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// 에러가 발생했을 때 처리하는 방식에 대한 코드
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
