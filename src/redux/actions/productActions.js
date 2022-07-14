import { ActionTypes } from "../constants/action-types"



export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};


export const selectedProduct = (product) => {
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};


// action types action-types.js ki file se arahi hongi.

// action always (return) a object a plain javascript object which has a key type and a payload.

// key value pair bhi keh sakte hain (type) ki value mai wo ayega jo action perform karwana hai.

// other will be the (payload) the data that we are getting.

// action kia perform karna hai wo bata rahay hain.

// ab ye banda form mai dekhega k kia kia cheez avalaible hain os ko mark kar k redcuer(manager) ko de dega.