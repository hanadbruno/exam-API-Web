import React, { useEffect, useState } from "react";

export function ListActivities({activityApi}) {
    const [activities, setActivity] = useState();
    const [error, setError] = useState();

   async function loadActivity() {
    
    try {
       
        setActivity(await activityApi.ListActivities());
    } catch(e){
        setError(e); 
    }
}

    useEffect(loadActivity, []);
    

    if(error){
        return<div>Oops! A malfunction happened...</div>
    }
    return <>
    <h1>List all activities</h1>
    {activities.map(({id,task}) => (
        <li key={id}>{task}</li>
        
    ))}
    </>;
}