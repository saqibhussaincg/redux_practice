import { ActionTypes } from "../redux/constants/action-types";

const initialSate = {

    products: [
        {
            id: 1,
            title: "Saqib",
            category: "programmer",
        }
    ]

}


export const productReducer = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return state;
         
        default:
            return state;
            
    }
}




// ab reducer(manager) mai kaam kar rahay hain, manager ko bata rahay hain k tumhe kia kaam karna hai

// reducer always take the initial(ibtedai - shuruwati) state and action.

// koi state nahi hai tou state create kar lenge wo ek object hogi or wo object empty array hogi.