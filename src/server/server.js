const express = require("express");
const { dirname } = require("path");
const path =  require("path");
const bodyparser = require("body-parser");


const app = express();
const activity = [{
    id: 1,
    task: "customer-contact",
    department: "sales",
    hours: 0

}]

app.use(bodyparser.json())
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
app.get("/api/activities", (req, res) =>{
    console.log(activity);
    res.json(activity);
})

app.post("/api/activities", (req, res)=>{
    const {task, department, hours} = req.body;
   
 activity.push({task, department, hours, id: activity.length+1})
 res.status(201);
 res.end();
})

app.use((req, res, next) => {
    if(req.method != "GET"){
        return next();
    }
    res.sendFile(path.resolve(__dirname,"..","..","dist", "index.html"));
})


app.listen(3000, () => {
    console.log("Started on http://localhost:3000")
});

