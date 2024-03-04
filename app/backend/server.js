const express = require("express");
const dotenv = require("dotenv");
// const connectDatabase = require("./src/config/database");
const app = express();
const hostname = "localhost";
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json());


//config
dotenv.config({ path: './src/config/config.env' })

//Database
// connectDatabase();

//server
const PORT = 4000;
app.listen(PORT, hostname, () => {
    console.log(`Server is working on http://${hostname}:${PORT}`);
});
