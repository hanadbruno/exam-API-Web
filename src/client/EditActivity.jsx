import React, { useState } from "react";
import useLocation from "react-router";
import InputField from "../client/AddActivity";

function EditActivityForm({activity}) {
    const[task, setTask] = useState(activity.task);
    const[department, setDepartment] = useState(activity.department);
    const[hours, setHours] = useState(activity.hours);
    
    async function submit(e){
        e.preventDefault();
        console.log("Submitting" ,{task, department, hours})
       await fetch(`/api/activities${book.id}`,{
        method: "PUT",
        body: JSON.stringify({task, department, hours}),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

  return <form onSubmit={submit}><h1>Edit existing activity({task})</h1>
   <InputField label={"Task"} value={task} onChangeValue={setTask}/>
   <InputField label={"Department"}value={department} onChangeValue={setDepartment}/>
   <InputField label={"Hours"}value={hours} onChangeValue={setHours} type ="number"/>
   <button>Submit</button>
    </form>
}


export function EditActivity({activityApi}){
    const location = useLocation();
    const [activity, setActivity] = useState();
    const [error, setError] = useState();

    async function loadActivity() {
    
        try {
            let id = new URLSearchParams(location.search).get("id")
            console.log(id)
            setActivity(await activityApi.getActivity(id));
        } catch(e){
            setError(e); 
        }
    }
    
        useEffect(loadActivity, []);
        if(error){
            return<div>Oops! A malfunction happened...{error.toString()}</div>
        }
    return <EditActivityForm activity={activity}/>
}