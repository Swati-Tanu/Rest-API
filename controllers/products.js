const Product = require("../models/products")

const getAllProducts = async (req,res) => {
    const {company, name, featured, sort, select} = req.query;
    const queryObject = {};

//Query
    if(company){
        queryObject.company = company;
    }

    if(featured){
        queryObject.featured = featured;
    }
    
    if(name){
        queryObject.name = {$regex: name, $options: "i"};
    }

    let apiData = Product.find(queryObject);

//Sort
    if(sort){
        // let sortFix = sort.replace(","," ");
        let sortFix = sort.split(",").join(" ");
        // queryObject.sort = sortFix;
        apiData = apiData.sort(sortFix);
    }
    
//Select
    if(select){
        // let selectFix = select.replace(","," ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix)
    }

//Pagination: page & limit
    let page = Number(req.query.page) || 1;
    let limit = (req.query.limit);

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);

    // console.log(req.query);
    // const myData = await Product.find(req.query);

    const Products = await apiData;

    // console.log("All the Data from DB:", myData);
    // res.status(200).json({"msg":"All the Products"});
    // console.log("User search for:",req.query);
    
    // res.status(200).json({myData});
    res.status(200).json({Products, nHits: Products.length});
};

//For Testing
const getAllProductsTesting = async (req,res) => {
    const myData = await Product.find(req.query).select("name company");
    // console.log("User search for:",req.query);

    // res.status(200).json({myData});
    res.status(200).json({myData, nHits: myData.length});
};

module.exports = {
    getAllProducts, 
    getAllProductsTesting
};