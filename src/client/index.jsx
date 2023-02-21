import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import {ListEmployees} from '../client/ListEmployees'
import {AddActivity} from '../client/AddActivity';



function App (){
    return <BrowserRouter>
   <nav>
<Link to={"/"}>Home</Link>
   </nav>
    <main>
          <Switch>
            <Route path={"/employees"}>
                <ListEmployees/>
            </Route>
            <Route path={"/add"}>
                <AddActivity/>
            </Route>
            <Route path={"/edit"}>
                <h1>Remove Employees</h1>
            </Route>
            <Route exact path={"/"}>
                <h1>Employee Application home page</h1>
                <ul>
                    <li><Link to ={"/Employes"}>See Employees</Link></li>
                    <li><Link to ={"/add"}>Add Employees</Link></li>
                    <li> <Link to ={"/edit"}>Remove Employees</Link></li>
                </ul>
            </Route>

          </Switch>
          </main>
    </BrowserRouter>
}
console.log(App);
ReactDOM.render(<App/>, document.getElementById("appen"));

