
const express = require("express");
const router = express.Router();

const Product = require("../models/addproduct.model.js"); // Women
const menProduct = require("../models/menaddproduct.model.js");
const fragProduct = require("../models/fragaddproduct.model.js");
const kidProduct = require("../models/kidaddproduct.model.js");
const salemenProduct = require("../models/salemenaddproduct.model.js");
const salefragProduct = require("../models/salefragaddproduct.model.js");
const salekidProduct = require("../models/salekidaddproduct.model.js");
const saleaddProduct = require("../models/saleaddproduct.model.js");
// router.get("/test", async (req, res) => {
//   try {
//     const query = req.query.query;
//     if (!query) return res.status(400).json({ error: "Query is required" });

//     // Regex to match anything that STARTS WITH the query (case-insensitive)
//     const regex = new RegExp("^" + query, "i");

//     const [women, men, kids, frag] = await Promise.all([
//       Product.find({ productname: regex }),
//       menProduct.find({ productname: regex }),
//       kidProduct.find({ productname: regex }),
//       fragProduct.find({ productname: regex }),
//     ]);

//     const results = [...women, ...men, ...kids, ...frag];

//     res.json(results);
//   } catch (error) {
//     console.error("Search error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
// Example backend code for search route
router.get("/admin/search", async (req, res) => {
    try {
    const query = req.query.query;
    if (!query) return res.status(400).json({ error: "Query is required" });

    const regex = new RegExp("^" + query, "i");

    const [women, men, kids, frag,salewomen, salemen, salekids, salefrag] = await Promise.all([
      Product.find({ productname: regex }),
      menProduct.find({ productname: regex }),
      kidProduct.find({ productname: regex }),
      fragProduct.find({ productname: regex }),
      saleaddProduct.find({ productname: regex }),
      salemenProduct.find({ productname: regex }),
      salekidProduct.find({ productname: regex }),
      salefragProduct.find({ productname: regex }),
    ]);

    const results = [...women, ...men, ...kids, ...frag,...salewomen, ...salemen, ...salekids, ...salefrag];

    res.json(results);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
