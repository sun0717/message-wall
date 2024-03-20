const express = require("express");
const config = require("./config/default");
const connection = require("./db");
const app = express();
const port = config.express.port;

// connection.connect((err) => { 
//     if(err){
//       console.log("Connection error: ", err);
//     }
// });

app.listen(port, () => {
    console.log("Listening on port " + port);
});
  