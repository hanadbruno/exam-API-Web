import React, {useState} from "react";

export function AddActivity() {
    const[task, setTask] = useState("");
    const[department, setDepartment] = useState("");
    const[hours, setHours] = useState("");
    
    function submit(e){
        e.preventDefault();
        console.log("Submitting")
        fetch("/api/employees",{
        method: "POST",
        body: JSON.stringify({task, department, hours}),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

    return <form onSubmit={submit}>
    <h1>Add new activity</h1>
   <div><label>Task:<input type="text" value={task} onChange={e => setTask(e.target.value)}/></label></div>
   <div><label>Department:<input type="text"value={department} onChange={e => setDepartment(e.target.value)}/></label></div>
   <div><label>Hours:<input type="number"value={hours} onChange={e => setHours(e.target.value)}/></label></div>
   <button>Submit</button>
    </form>
}