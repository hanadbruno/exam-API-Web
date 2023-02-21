import React, { useEffect, useState } from "react";

export function ListActivities() {
    const [activities, setActivity] = useState();
    const [error, setError] = useState();

   async function loadActivity() {
    
    try {
        const res = await fetch("/api/activities");
        if (!res.ok){
            throw new Error(`Something is not working ${res.url}:  ${res.statusText}`);
        }
        const json = await res.json();
        setActivity(json);
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