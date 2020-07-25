const Shoe = require('../models/shoe');
const { db } = require('../models/shoe.js');
const { response } = require('express');

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

    findShoe: async (req,res)=> {
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

    updatedShoeBrand: async (req, res) =>{
        Shoe.findByIdAndUpdate({_id : req.body.id}, {brand: req.body.brand})
        .then((res) => res.send(res))
        .catch((err)=>res.send(err));


        // try{
        //     const updatedShoe = await Shoe.findById(req.body.id);
        //     updatedShoe.brand = req.body.brand
        //     await updatedShoe.save();
        //     res.send(updatedShoe);
        // }
        // catch(err){
        //     res.send(err);
        // }
    },
    
    updateShoePrice: async (req,res)=> {
        // Shoe.findOneAndUpdate({_id: req.body.id},{price: req.body.price}).then((updatedShoe)=>res.send(updatedShoe))
        // .catch((err)=> res.send(err));

        try{
            const updatedShoePrice = await Shoe.findById(req.body.id);
            updatedShoePrice.price = req.body.price;
            await updatedShoePrice.save();
            res.send(updatedShoePrice);
        }
        catch(err){
            res.send(err);
        }
    },

    deleteShoe: async (req,res)=> {
        Shoe.findByIdAndDelete( req.params.id)
        .then((res)=>{
            res.remove();
            res.send(res);
        })
        .catch((err)=>res.send(err));

        // try{
        //     const shoeToDelete = await Shoe.findById(req.params.id);
        //     shoeToDelete.remove();
        //     res.send("success");
        // }
        // catch(err){
        //     res.send(err);
        // }
    },

    addColorWay: async (req, res) => {
        try{
            const addColorWay = await Shoe.findById(req.body.id);
            addColorWay.colorWay.push(req.body.colorWay);
            console.log(req.body.colorWay);
            console.log(addColorWay);
            await addColorWay.save();
            res.send(addColorWay);
        }
        catch(err){
            res.send(err);
        };
    }

};