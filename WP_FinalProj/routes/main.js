let express = require("express");
let router = express.Router();

router.get("/", function (req, res) {
  res.render("main", { title: "Main page" });
});

module.exports = router;
