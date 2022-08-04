// This know just the state GlobalState variables (which is the initialState)

export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions : state.transactions.filter(obj => obj.id !== action.payload)
            };break; 
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions : [action.payload, ...state.transactions]
                }
        default:
            return state
    }
}