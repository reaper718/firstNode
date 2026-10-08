const path = require("path");

const getProducts = (req,res) => {
    res.sendFile(path.join(__dirname,"..","views","products.html"))
}

const getProductById = (req,res) => {
    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`);
}

const addProduct = (req,res) => {
    const data = req.body;
    console.log(data);
    res.json({value:data.value});
}

module.exports ={
    getProducts,
    getProductById,
    addProduct
}