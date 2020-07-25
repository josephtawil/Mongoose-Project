const Shoe = require('../models/shoe');
const { db } = require('../models/shoe');

module.exports = {

    //we need to call the Shoe model from the shoe js file and then use the create 
    addShoe: async (req,res)=>{
        // Shoe.create({
        //     brand: req.body.brand, price: req.body.price
        // })
        // .then((newShoe)=> res.send(newShoe))
        // .catch((err)=>res.send(err));

        //using async and await 

        const newShoe = new Shoe({brand: req.body.brand, price: req.body.price});

        try{
        console.log(newShoe);
        await newShoe.save();
        res.send(newShoe);
        }
        catch(err){
            res.send(err);
        }
    },

    getShoe: (req,res)=> {
        Shoe.find().then((allShoes)=>{
            res.send(allShoes);
        }).catch((err)=>{
            res.send(err);
        })
    },

};