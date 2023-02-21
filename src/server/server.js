

const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Started on http://localhost:3000")
});

app.use((req, res, next) => {
    res.json({"text": "hello world"})
})