import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router";
import {BrowserRouter, Link} from "react-router";



function Application (){
    return <BrowserRouter>
          <Switch>
            <Route path={"/employees"}>
                <h1>List all Employees</h1>
            </Route>
            <Route path={"/add"}>
                <h1>Add Employees</h1>
            </Route>
            <Route path={"/edit"}>
                <h1>Remove Employees</h1>
            </Route>
            <Route path={"/"}>
                <h1>Employee Application home page</h1>
                <ul>
                    <Link to ={"/Employes"}>See Employees</Link>
                    <Link to ={"/add"}>Add Employees</Link>
                    <Link to ={"/edit"}>Remove Employees</Link>
                </ul>
            </Route>

          </Switch>
    </BrowserRouter>
}
console.log(Application);
ReactDOM.render(<Application />, document.getElementById("root"));