const Shoe = require('../models/shoe');
const { db } = require('../models/shoe.js');

module.exports = {

    //we need to call the Shoe model from the shoe js file and then use the create 
    addShoe: async (req,res)=>{
        // Shoe.create({
        //     brand: req.body.brand, price: req.body.price
        // })
        // .then((newShoe)=> res.send(newShoe))
        // .catch((err)=>res.send(err));

        //using async and await 


        try{
            const newShoe = new Shoe({brand: req.body.brand, price: req.body.price});
        console.log(newShoe);
       let saveShoe =  await newShoe.save();
        res.send(saveShoe);
        }
        catch(err){
            res.send(err);
        }
    },

    getShoe: async (req,res)=> {
        // Shoe.find().then((allShoes)=>{
        //     res.send(allShoes);
        // }).catch((err)=>{
        //     res.send(err);
        // })
        try
        {
            const allShoes = await Shoe.find();
        allShoes[0].colorWay.push("blue");
        // await allShoes.save();
        res.send(allShoes);
        }
        catch(err){
            res.send(err);
        }
    },

    findShoe: (req,res)=> {
        //can use find or findById
        // Shoe.findById({_id: req.params.id})
        // .then((foundShoe)=> res.send(foundShoe))
        // .catch((err)=>res.send(err));
        try
        {
        const foundShoe = await Shoe.findById(req.params.id);
        res.send(foundShoe);
        }
        catch(err){
            res.send(err);
        }
    },


};