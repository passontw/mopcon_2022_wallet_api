const express = require("express");
const router = express.Router();
const ethers = require("ethers");
const crypto = require("crypto");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/wallets", async function (req, res, next) {
  const id = crypto.randomBytes(32).toString('hex');
  const privateKey = "0x"+id;
  const wallet = new ethers.Wallet(privateKey);
  console.log("🚀 ~ file: index.js ~ line 9 ~ wallet", wallet)

  res.json({
    success: true,
    data: {
      address: wallet.address,
      privateKey,
    },
  });
});

module.exports = router;
