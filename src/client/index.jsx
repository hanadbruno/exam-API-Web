import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import {ListActivities} from './ListActivities'
import {AddActivity} from '../client/AddActivity';



function App (){
    return <BrowserRouter>
   <nav>
<Link to={"/"}>Home</Link>
   </nav>
    <main>
          <Switch>
            <Route path={"/activities"}>
                <ListActivities/>
            </Route>
            <Route path={"/add"}>
                <AddActivity/>
            </Route>
            <Route path={"/edit"}>
                <h1>Remove activity</h1>
            </Route>
            <Route exact path={"/"}>
                <h1>Activity Monitor Application home page</h1>
                <ul>
                    <li><Link to ={"/activities"}>See activities</Link></li>
                    <li><Link to ={"/add"}>Add activities</Link></li>
                    <li> <Link to ={"/edit"}>Remove activities</Link></li>
                </ul>
            </Route>

          </Switch>
          </main>
    </BrowserRouter>
}
console.log(App);
ReactDOM.render(<App/>, document.getElementById("appen"));

