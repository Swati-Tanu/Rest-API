require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req,res) => {
    res.send("Home Page from Backend Side");
});

// Middleware or to set Router
app.use("/api/products", products_routes);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server running at ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};

start()
