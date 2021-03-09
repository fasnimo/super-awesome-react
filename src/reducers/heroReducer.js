export const heroReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_HERO":
            return action.payload
        case "ADD_HERO": 
            return [...state, action.payload]
        default:
            return state
    }
}