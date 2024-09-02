/** 
 * Using Redux without Redux Toolkit.
 * ! IMPORTANT : Don't mutate original state, never! Always copy/create a new object
 * ! Redux Toolkit do this, we write code like mutation the original state 
*/

import { createStore } from 'redux';

const initialState = {
    counter: 0,
    showCounter: true,
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'increment' :
            return {
                counter: state.counter + 1,
                showCounter: state.showCounter,
            }

        case 'increase' :
            return {
                counter: state.counter + action.value,
                showCounter: state.showCounter,
            }

        case 'decrement' :
            return {
                counter: state.counter - 1,
                showCounter: state.showCounter,
            }

        case 'toggle' :
            return {
                showCounter: !state.showCounter,
                counter: state.counter,
            }

        default: return state;
    }
};

const store = createStore(counterReducer);

export default store;


/** In the files need to use Dispatch like:
 * 
 *  import { useDispatch, useSelector } from 'react-redux';
 * 
 *  const dispatch = useDispatch();
 * 
 *  const incrementHandler = () => {
        dispatch({type: 'increment'});
    }
 */