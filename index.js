require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const schema = require("./schema");
const { graphqlHTTP } = require('express-graphql');


const app = express();

//---CONNECTING TO MONGO DB
mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("---[CONNECTED TO MONGODB]---"))
.catch((error) => console.error("--- CONNECTION ERROR: ", error));

//---GRAPHQL API ENDPOINTS
app.use(

    "/graphql",
    graphqlHTTP({

        schema, 
        graphql: true,

    })
)

//---SERVER START
const PORT = process.env.PORT || 3000 //<---- mongodb default

app.listen(PORT, () => {

    console.log(`--- SERVER RUNNING ON ${PORT}: http://localhost:5000/graphql`)
    
})
