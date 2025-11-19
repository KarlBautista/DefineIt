const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = 3000;
dotenv.config();


app.use(cors());
app.use(express.json());



















app.listen(PORT, () => {
    console.log(`Define It is listening in PORT ${PORT}`);
    
})