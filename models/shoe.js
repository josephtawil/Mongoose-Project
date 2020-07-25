const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// defining our Schema created our entities and how our data is put together
const shoeSchema = new Schema({
    brand: { 
        type: String,
        //unique: true
        required: "Must enter a shoe brand"
    },

    price: { 
        type: Number,
        required: "Must enter a price",
    },
    
    model: {
        type: String,
        // unique: "Cant have more of the same model"
    },
    
    colorWay: {
        type: [String],
        required: true,
        default: [],
    },
});

//we are naming our schema as Shoe
const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;