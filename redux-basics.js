const redux = require('redux');
// A store needs a reducer function first and a Reducer needs a State and Action

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}


// Store

const createStore = redux.createStore;
const store = createStore(rootReducer);

console.log(store.getState());

// Subcriptions inform you when something has change
store.subscribe(() => {
    console.log('[Subscription:]', store.getState())
});

// Dispatiching Actions
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState())