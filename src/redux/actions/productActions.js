import { ActionTypes } from "../constants/action-types"



export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};


export const selectedProduct = (product) => {
    return {
        type : ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    };
};




// action always (return) a object a plain javascript object which has a key type and a payload.

// key value pair bhi keh sakte hain (type) ki value mai wo ayega jo action perform karwana hai.

// other will be the (payload) the data that we are getting.