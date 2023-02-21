import React, { useEffect, useState } from "react";

export function ListEmployees() {
    const [employees, setEmployee] = useState();
    const [error, setError] = useState();

   async function loadEmployee(){
    try{
        const res = await fetch("api/employee");
        if (!res.ok){
            throw new Error(`Something not working ${res.url}:  ${res.statusText}`);
        }
        const json = await res.json();
        setEmployee(json);
    } catch(e){
        setError(e); 
    }
}

    useEffect(loadEmployee, []);

    if(error){
        return<div>Oops! A malfunction happened...</div>
    }
    return <>
    <h1>List all Employees</h1>
    {employees.map(id, employee => (
        <li key={id}>{employee.task}</li>
        
    ))}
    </>;
}