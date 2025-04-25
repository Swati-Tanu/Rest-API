require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const { uploadProducts } = require("./productDB");

const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const yaml = require("yaml");
const swaggerDocument = yaml.parse(fs.readFileSync("./swagger.yaml", "utf8"));

const products_routes = require("./routes/products");

const PORT = process.env.PORT || 5000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Home Page from Backend Side");
});

// Middleware or to set Router
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server running at ${PORT}`);
    });
    await uploadProducts();
  } catch (err) {
    console.log(err);
  }
};

start();
