let express = require("express");
let router = express.Router();
const { Product, findProductByCategory } = require("../models/productModel");

router.get("/", async function (req, res) {
  const category = req.query.category;
  console.log(`Requested category: ${category}`);
  try {
    const products = await findProductByCategory(category);
    console.log(products);
    res.render("search", { category: category || null, products: products });
  } catch (error) {
    res.status(500).render("search", { errorMessage: "서버 오류가 발생했습니다." });
  }
});

module.exports = router;
