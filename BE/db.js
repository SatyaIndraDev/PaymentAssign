const mongoose=require("mongoose")


const connection=mongoose.connect(`mongodb+srv://satya:indra@cluster0.j3zgcwb.mongodb.net/paymentAssign?retryWrites=true&w=majority&`)

module.exports={
    connection
}