const Product = require("../models/salemenaddproduct.model.js");
const path = require("path");
const fs = require('fs');
// Add new product
const addProductmen = async (req, res) => {
    try {
        const {
            maincategory,
            productname,
            price,
            quantity,
            category,
            fabric,
            styling,
            wear,
            trouser,
            color,
            season,
            productType,
            size
        } = req.body;

        const newProduct = new Product({
            maincategory,
            productname,
            price,
            quantity,
            category,
            fabric,
            styling,
            wear,
            trouser,
            color,
            season,
            productType,
            size,
            image: req.file.filename
        });

        await newProduct.save();
        res.status(200).json({ message: "Product added successfully" });
    } catch (err) {
        console.error("Error adding product:", err);
        res.status(500).json({ error: "Failed to add product" });
    }
};

// Get single product
const getshowproductmen = async (req, res) => {
    try {
        const id = req.params.id;
        const clothes = await Product.findById(id);

        if (!clothes) return res.status(400).json({ error: "Product Not Found" });
        res.json(clothes);
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
};

// Update product
const updateProductmen = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        if (req.file) {
            updatedData.image = req.file.filename;
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedProduct) return res.status(404).json({ error: "Product not found" });

        res.status(200).json({ message: "Product updated successfully" });
    } catch (err) {
        console.error("Error updating product:", err);
        res.status(500).json({ error: "Failed to update product" });
    }
};

// Delete product
const deleteProductmen = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Product not found" });
        if (deleted.image) {
            const filePath = path.join(__dirname, '..', 'uploads', deleted.image);
            console.log("Trying to delete image at:", filePath);

            fs.unlink(filePath, (err) => {
                if (err) console.log('Failed to Delete', err)
            })

        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
        console.error("Error deleting product:", err);
        res.status(500).json({ error: "Failed to delete product" });
    }
};

// Get all products
const getAllProductsmen = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;

        const total = await Product.countDocuments();
        const totalproduct = await Product.find().skip(skip).limit(limit).sort({ createdAt: -1 });
        const totalPage = Math.ceil(total / limit);

        res.json({
            total,
            page,
            limit,
            totalPage,
            totalproduct
        });
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
};


module.exports = {
    addProductmen,
    getshowproductmen,
    updateProductmen,
    deleteProductmen,
    getAllProductsmen
};
