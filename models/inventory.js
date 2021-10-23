let mongoose = require('mongoose')

let inventoryModel = mongoose.Schema(
    {
        name: String,
        contact: Number,
        description: String,
        email: String
        
    },
    {
        collections: "inventory"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel)