import * as actionType from '../actions';

const initialState = {
    result: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({ id: new Date(), value: action.result})
            }
        case actionType.DELETE_RESULT:
            return {
                ...state,
                result: state.result.filter(res => res.id !== action.id)
            }
    }
    return state;
}

export default reducer;