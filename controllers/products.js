const getAllProducts = async (req,res) => {
    res.status(200).json({"msg":"All the Products"});
};

const getAllProductsTesting = async (req,res) => {
    res.status(200).json({"msg":"Testing: All the Products"});
};

module.exports = {
    getAllProducts, 
    getAllProductsTesting
};