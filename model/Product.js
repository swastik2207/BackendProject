const mongoose=require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    quantity:Number,
    price: Number,
    quality:String
  
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports =  Product;