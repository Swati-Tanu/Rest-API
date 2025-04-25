require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/products");
const ProductJSON = require("./products.json");

const uploadProducts = async () => {
  try {
    //? Deleteing all docs before inserting to avoid duplicacy of data.
    await Product.deleteMany();
    await Product.create(ProductJSON);
    console.log("All products");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { uploadProducts };
