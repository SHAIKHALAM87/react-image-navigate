import ActionTypes from "../constants/action-types";

const initialState = {
    product : []
}

export const producer = (state = initialState,{ type,payload })=>{
    console.log(ActionTypes);
    switch(type){
        
        case ActionTypes.SET_PRODUCT :
            return {...state,product:payload};
        default:
            return state;
    }
}

export const selectedproducer = (state = initialState,{ type,payload })=>{
    console.log(ActionTypes);
    switch(type){
        
        case ActionTypes.SELECTED_PRODUCT :
            return {...state,product:payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT :
            return {};
        default:
            return state;
    }
}