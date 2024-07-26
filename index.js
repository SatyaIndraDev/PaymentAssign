const express = require("express");
const { connection } = require("./db");

const {   ProductRouter } = require("./Routes/Products.route");



const app = express();

app.use(express.json());



app.use("/detail", ProductRouter);

app.listen(8080, async() => {
    try{
      await connection;
      console.log("Connected to the DB");
      console.log(`Running at 8080 port`);
    }catch(err){
        console.log(err);
    }
})