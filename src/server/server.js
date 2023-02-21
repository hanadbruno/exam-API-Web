

const express = require("express");
const { dirname } = require("path");
const path =  require("path")

const app = express();
const activity = [{
    id: 1,
    task: "customer-contact",
    department: "sales",
    hours: 0

}]

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
app.get("/api/employees", (req, res) =>{
    res.json(activity);
})

app.listen(3000, () => {
    console.log("Started on http://localhost:3000")
});

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname,"..","..","dist", "index.html"));
})