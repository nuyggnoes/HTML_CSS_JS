const User = require("../models/userModel");
let express = require("express");
let router = express.Router();

// 로그인 페이지
router.get("/login", function (req, res) {
  res.render("login", { title: "Login" });
});

// 회원가입 페이지
router.get("/register", function (req, res) {
  res.render("register", { title: "Register" });
});

// 로그인 처리
router.post("/login", function (req, res) {
  // 로그인 로직 추가
  res.redirect("/main");
});

// 회원가입 처리
router.post("/register", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  console.log(username, password, email);
  User.createUser(username, password, email);
  res.redirect("/auth/login");
});

module.exports = router;
