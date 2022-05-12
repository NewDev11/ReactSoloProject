
// []
const reducer = (state, action) => {

    //initialize our state 

    if(state === undefined){
        state = {
            favorites : []
        }
    }

    switch(action.type){

       case "ADD_FAVORITE": 
            return {
                ...state,
                favorites: state.favorites.concat(action.favorite)
            }
        default:
            return state
    }
}


export default reducer