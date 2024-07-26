const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
    alternate_pay1: String,
    alternate_pay2: String,
    city: String,
    street: String,
    country: String,
    ifsc_code: String,
    ban_account_number: String,
    reference: String,
    select_card: String,
    Gl_desc: String,
    Gl_code: String,
    text: String,
    
},{
    versionKey: false
});


const ProductsModel = mongoose.model("products", ProductsSchema);


module.exports = {
    ProductsModel
}