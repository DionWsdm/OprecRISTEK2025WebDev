require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const app = express();
const tryOutRoutes = require("./route/tryOuts.js");

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use("/tryOuts", tryOutRoutes);

app.listen(PORT, () => {
    console.log(`Server berhasil running di port ${PORT}`)
})
