import React, { Component} from 'react';

import { createStore } from 'redux';

class ReactDemo extends Component {
    render() {

        // step2: create reducer, require state and action

        const reducer = function(state, action) {

            // reducer can have api logic and functinal logic

            // reducer merely are dependent on action types
            // there may be multiple reducer, they stays unique based on action type provided to them, never change state directly in the reducer :), use if else to confirm action type first
            // state is also uniqe and only one, keep the state attributes unique
            if(action.type == "ATTACK") {

                // do some ajax call if needed using parameters passed in payload .

                // using informatin passed in payload that is "Iron Man"
                // we can do other calculations and calculat ethe final value for state
                // state =  action.payload; // there may be action.something or anything like that
                state.protector = action.payload;
                state.enemy_power = "Medium";

            } else if(action.type == "GREENATTACK") { // just to make it clear what is going on

                // state =  action.payload; // there may be action.something or anything like that

                state.protector = action.payload;
                state.enemy_power = "High";
            }

            return state; // current state if no action type passed
        }

        // Step 1 Store create a store

        const store = createStore(reducer, { //can only called once in whole app as there is only one store in whole app
            protector: "Common Man",
            enemy_power: "low"
        }); // "Peace is current/default state"
        // step  3: Subscribe

        store.subscribe(() => {
            console.log("Store is now ", store.getState().protector);
        });
 

        // step 4 - Dispatch the action

        
        store.dispatch({ type: "SOMETHINGELSE", payload: "Common Man"});
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