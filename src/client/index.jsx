import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import {ListActivitiesPage} from './ListActivitiesPage'
import {AddActivity} from '../client/AddActivity';
import { EditActivity } from "./EditActivity";



function App (){
    const activityApi = {
        ListActivitiesPage: async () =>{
        const res = await fetch("/api/activities");
        if(res.ok){
            throw new Error(`Something is wrong ${res.url}: ${res.statusText}`);
        }
        return await res.json();
        },
        getActivity: async (id) =>{
            const res = await fetch(`/api/activities${id}`);
            if(res.ok){
                throw new Error(`Something is wrong ${res.url}: ${res.statusText}`);
            }
            return await res.json();
            }

    }
    return <BrowserRouter>
   <nav>
<Link to={"/"}>Home</Link>
   </nav>
    <main>
          <Switch>
            <Route exact path={"/activities"}>
                <ListActivitiesPage activityApi={activityApi}/>
            </Route>
            <Route path={"/add"}>
                <AddActivity/>
            </Route>
            <Route path={"/edit"}>
                <EditActivity activityApi={activityApi}/>
               
            </Route>
            <Route exact path={"/"}>
                <h1>Activity Monitor Application home page</h1>
                <ul>
                    <li><Link to ={"/activities"}>See activities</Link></li>
                    <li><Link to ={"/add"}>Add activities</Link></li>
                    <li> <Link to ={"/edit"}>Edit activities</Link></li>
                </ul>
            </Route>

          </Switch>
          </main>
    </BrowserRouter>
}
console.log(App);
ReactDOM.render(<App/>, document.getElementById("appen"));

