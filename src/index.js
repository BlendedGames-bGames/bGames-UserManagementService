const express = require("express");
const app = express();

//Settings
const port = process.env.PORT || 3010;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Routes
app.use(require('./routes/Config'))

//Starting the server
app.listen(port, () => {
 console.log(`listening on port ${port} ...... `);
});