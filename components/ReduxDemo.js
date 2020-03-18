import React, { Component} from 'react';

import { createStore } from 'redux';

class ReactDemo extends Component {
    render() {

        
        

        // step2: create reducer, require state and action


        const reducer = function(state, action) {
            if(action.type == "ATTACK") {

                // do some ajax call if needed using parameters passed in payload .

                // using informatin passed in payload that is "Iron Man"
                // we can do other calculations and calculat ethe final value for state
                // state =  action.payload; // there may be action.something or anything like that
                state.protector = action.payload;
                state.destruction_level = "High";

            } else if(action.type == "GREENATTACK") { // just to make it clear what is going on

                // state =  action.payload; // there may be action.something or anything like that

                state.protector = action.payload;
                state.destruction_level = "Medium";
            }

            return state; // current state if no action type passed
        }

        // Step 1 Store create a store

        const store = createStore(reducer, {
            protector: "God",
            destruction_level: "low"
        }); // "Peace is current state"
        // step  3: Subscribe

        store.subscribe(() => {
            console.log("Store is now ", store.getState().protector);
        });
 

        // step 4 - Dispatch the action

        store.dispatch({ type: "ATTACK", payload: "Iron Man"}); // when action type is attach when gonna launch Iron Man
        store.dispatch({ type: "GREENATTACK", payload: "Super Man"});

        return (
            <div>
                Redux Demo
            </div>
        )
    }
}
export default ReactDemo;