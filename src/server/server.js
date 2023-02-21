

const express = require("express");
const { dirname } = require("path");
const path =  require("path")

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.listen(3000, () => {
    console.log("Started on http://localhost:3000")
});

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname,"..","..","dist", "index.html"));
})