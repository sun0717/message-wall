const express = require("express");
const cors = require('cors');
const config = require("./config/default");
// const connection = require("./db");
const app = express();
const port = config.express.port;
const IndexRouter = require('./routers/index')
app.use(cors());
// connection.connect((err) => { 
//     if(err){
//       console.log("Connection error: ", err);
//     }
// });
app.use(IndexRouter)
app.listen(port, () => {
    console.log("Listening on port " + port);
});