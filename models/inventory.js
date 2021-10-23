let mongoose = require('mongoose')

let inventoryModel = mongoose.Schema(
    {
        name: String,
        contact: Number,
        
        tags: [],
        status: String,
        size:{
            h: Number,
            w: Number,
            uom: String
        },
        email: String
        
    },
    {
        collections: "inventory"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel)