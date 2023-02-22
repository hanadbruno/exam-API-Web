import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

export function ListActivitiesPage({activityApi}) {
    const [activities, setActivity] = useState();
    const [error, setError] = useState();

   async function loadActivity() {
    
    try {
        setActivity(await activityApi.ListActivitiesPage());
    } catch(e){
        setError(e); 
    }
}

    useEffect(loadActivity, []);
    

    if(error){
        return<div>Oops! A malfunction happened...{error.toString()}</div>
    }
    return <>
    <h1>List all activities</h1>
    {activities.map(({id,task}) => (
        <li key={id}><Link to={`/edit?${id}=`}></Link>{task}</li>
        
    ))}
    </>;
}