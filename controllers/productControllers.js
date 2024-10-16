const Product = require ("../model/Product");

const createProduct = async (req,res)=>
    {
        try{
            const { name,quantity,price}=req.body;
          
            const newProduct = await Product.create({

                name,
                quantity,
                price,
        
            });
        
        
            res.status(200).json({
                message:"Product Created Sucessfully"
            });
        
    
        }

        catch(err){

            console.log(err);
            res.status(400).json({message:err.message})
        }
        
    };




 const totalPrice = async (req,res)=>
    {
        try{
            const products = req.body;

            if (!Array.isArray(products)) {
              return res.status(400).json({ error: "Invalid input. Expected an array of products." });
            }
        
        
        const totalValue= products.reduce((cur_sum,product)=>{
            const { name,quantity,price}=product;
            return cur_sum + price*quantity;

        },0)

        res.status(200).json({totalValue})
        
    
        }

        catch(err){

            console.log(err);
            res.status(400).json({message:err.message})
        }
        
    };

    module.exports={createProduct,totalPrice};