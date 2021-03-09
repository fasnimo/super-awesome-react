export const heroReducer = (state) => {
    switch(action.type){
        case "FETCH_HERO":
            return action.payload
        case "ADD_HERO": 
            return [...state, action.payload]
        default:
            return state
    }
}