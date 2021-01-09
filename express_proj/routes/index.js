var express = require("express");
var router = express.Router();

// routing은 클라이언트로부터 요청받은 URL에 대해 특정한 view로 연결하는 것
// "/" root page
router.get("/", function (req, res, next) {
  res.render("index.jade", { title: "Main" });
});

router.get("/test", function (req, res, next) {
  res.render("test.jade", { title: "Test" });
});

module.exports = router;
