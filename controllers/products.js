const Product = require("../models/products")

const getAllProducts = async (req,res) => {
    const {company, name, featured, sort, select} = req.query;
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

    let apiData = Product.find(queryObject);

    if(sort){
        // let sortFix = sort.replace(","," ");
        let sortFix = sort.split(",").join(" ");
        // queryObject.sort = sortFix;
        apiData = apiData.sort(sortFix);
    }

    if(select){
        // let selectFix = select.replace(","," ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix)
    }



    console.log(queryObject);

    // console.log(req.query);
    // const myData = await Product.find(req.query);

    const myData = await apiData;

    // console.log("All the Data from DB:", myData);
    // res.status(200).json({"msg":"All the Products"});
    // console.log("User search for:",req.query);
    
    res.status(200).json({myData});
};

const getAllProductsTesting = async (req,res) => {
    const myData = await Product.find(req.query).select("name company");
    // console.log("User search for:",req.query);
    res.status(200).json({myData});
};

module.exports = {
    getAllProducts, 
    getAllProductsTesting
};