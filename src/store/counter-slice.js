import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    increase: false,
    showCounter: true,
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },

        increaseToggle(state){
            state.increase = !state.increase;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },

        decreaseToggle(state){
            state.decrease = !state.decrease;
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload;
        },

        reset(state) {
            state.counter = 0;
        },
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;