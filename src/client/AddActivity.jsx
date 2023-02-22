import React, {useState} from "react";



function InputField({label, onChangeValue, value, type = "text"}){
   return <div><label>{label}:<input type={type} value={value} onChange={e =>onChangeValue(e.target.value)}/></label></div>

}

export function AddActivity() {
    const[task, setTask] = useState("");
    const[department, setDepartment] = useState("");
    const[hours, setHours] = useState("");
    
    async function submit(e){
        e.preventDefault();
        console.log("Submitting" ,{task, department, hours})
       await fetch("/api/activities",{
        method: "POST",
        body: JSON.stringify({task, department, hours}),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

    return <form onSubmit={submit}>
    <h1>Add new activity</h1>
   <InputField label={"Task"} value={task} onChangeValue={setTask}/>
   <InputField label={"Department"}value={department} onChangeValue={setDepartment}/>
   <InputField label={"Hours"}value={hours} onChangeValue={setHours} type ="number"/>
   <button>Submit</button>
    </form>
}