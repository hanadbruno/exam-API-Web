import React, { useState } from "react";

export function ListEmployees() {
    const [employees, setEmployee] = useState();

   async function loadEmployee(){
        const res = await fetch("api/employee");
        if (!res.ok){
            throw new Error(`Something not working ${res.url}:  ${res.statusText}`);
        }
    }

    if(!employees){
        return<div>..Loading..</div>
    }
    return <h1>List all Employees</h1>;
}