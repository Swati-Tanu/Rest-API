const Product = require("../models/products")

const getAllProducts = async (req,res) => {
    const {company, name, featured} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
        }

    if(featured){
        queryObject.featured = featured;
    }
    
    if(name){
        queryObject.name = {$regex: name, $options: "i"};
        }

    console.log(queryObject);

    // console.log(req.query);
    // const myData = await Product.find(req.query);

    const myData = await Product.find(queryObject);

    // console.log("All the Data from DB:", myData);
    // res.status(200).json({"msg":"All the Products"});
    // console.log("User search for:",req.query);
    
    res.status(200).json({myData});
};

const getAllProductsTesting = async (req,res) => {
    const myData = await Product.find(req.query);
    // console.log("User search for:",req.query);
    res.status(200).json({myData});
};

module.exports = {
    getAllProducts, 
    getAllProductsTesting
};