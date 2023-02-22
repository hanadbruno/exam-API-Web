import TestRenderer from 'react-test-renderer'

import React from 'react'
import { ReactDOM } from 'react-dom'
import {act} from "react-dom/test-utils"
import { ListActivities } from '../client/ListActivities'


const activityApi = {
    listActivities: async () => [ 
        {id:"1",
        task:"Customer-contact"
         }
    ]
};

describe("List activities side", ( ) =>{
    it("show activities", async () => {
        let view;
        await TestRenderer.act( async () => {
        view = TestRenderer.create(<ListActivities activityApi={activityApi} />)
        });
        expect(view.toJSON()).toMatchSnapShot();
        expect(view.root.findByType("li").children[0]).toEqual("Customer-contact");
    });

    it("show activities on site", () => {
     
        const container = document.createElement("div");
        document.body.appendChild(container);
        act(()=>{
            ReactDOM.render(<ListActivities activityApi={activityApi}/>, container)
        
        });
        expect(container.querySelector("li")).toMatchSnapShot("Customer-contact")
        expect(container.innerHTML).toMatchSnapShot();
    })
})