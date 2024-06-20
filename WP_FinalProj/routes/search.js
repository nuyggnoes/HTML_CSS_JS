let express = require("express");
let router = express.Router();
const { Product } = require("../models/productModel");

router.get("/", function (req, res) {
  const category = req.query.category;
  console.log(category);
  res.render("search", { title: "hello search page!", category: category });
});

module.exports = router;
