const Product = require("../models/skincaresaddproduct.model.js");
const path = require("path");
const fs = require('fs');

// Add new skincares product
const addProduct = async (req, res) => {
    try {
        const {
            maincategory,
            productname,
            price,
            quantity,
            category,
            productType,
            brand,
            skinType,
            concern,
            size
        } = req.body;

        const newProduct = new Product({
           maincategory,
            productname,
            price,
            quantity,
            category,
            productType,
            brand,
            skinType,
            concern,
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

// Get single skincares product
const getshowproduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ error: "Product Not Found" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
};

// Update skincares product
const updateProduct = async (req, res) => {
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

// Delete skincares product
const deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Product not found" });

        if (deleted.image) {
            const filePath = path.join(__dirname, '..', 'uploads', deleted.image);
            fs.unlink(filePath, (err) => {
                if (err) console.error('Failed to delete image:', err);
            });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
        console.error("Error deleting product:", err);
        res.status(500).json({ error: "Failed to delete product" });
    }
};

// Get all skincares products (paginated)
const getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;

        const total = await Product.countDocuments();
        const totalproduct = await Product.find().skip(skip).limit(limit).sort({ createdAt: -1 });
        
        res.json({
            total,
            page,
            limit,
            totalPage: Math.ceil(total / limit),
            totalproduct
        });
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
};

module.exports = {
    addProduct,
    getshowproduct,
    updateProduct,
    deleteProduct,
    getAllProducts
};
