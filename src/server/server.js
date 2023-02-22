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
    console.log(activity );
    res.json(activity);
})
app.get("/api/activities/:id", (req, res) =>{
    const id = parseInt(req.params);
    const activity = activity.find(a => a.id == id);
    res.json(activity);
})
app.put("/api/activities/:id", (req, res) =>{
    const id = parseInt(req.params);
    const activityIndex = activity.findIndex(a => a.id == id);
    const{task, department, hours} = req.body;
    activity[activityIndex] = {task, department, hours, id}
    res.status(200).end();
})

app.post("/api/activities", (req, res)=>{
    const {task, department, hours} = req.body;
   
 activity.push({task, department, hours, id: activity.length+1})
 res.status(201).end();
 
})

app.use((req, res, next) => {
    if(req.method != "GET" || req.path.startsWith("/api")){
        return next();
    }
    res.sendFile(path.resolve(__dirname,"..","..","dist", "index.html"));
})


app.listen(3000, () => {
    console.log("Started on http://localhost:3000")
});

