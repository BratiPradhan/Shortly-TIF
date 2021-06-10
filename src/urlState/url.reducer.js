export const reducer = (state, action) => {
    switch(action.type){
        case("ADD_URL"):
            return {...state, urls: state.urls.concat([action.payload])};
        default:
            return state;
    }
}