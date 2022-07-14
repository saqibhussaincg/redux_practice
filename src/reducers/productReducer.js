import { ActionTypes } from "../redux/constants/action-types";

const initialSate = {

    // products: [
    //     {
    //         id: 1,
    //         title: "Saqib",
    //         category: "programmer",
    //     },
    //     {
    //         id: 2,
    //         title: "Sajid",
    //         category: "police wala",
    //     }
    // ]

    products : []

}


export const productReducer = (state = initialSate, {type, payload}) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            // return state;
            return {...state, products: payload}
           
        default:
            return state;

           
            
    }
}


// reducer 2 parameters leta hai state and action

// ab reducer(manager) mai kaam kar rahay hain, manager ko bata rahay hain k tumhe kia kaam karna hai, managar wo form lega or dekhega k kia kia chezain avalaible hain phr unhe match karega k ye cheez ho sakti hai ya nahi.
// phr unhay store mai rakh dega.

// reducer always take the initial(ibtedai - shuruwati) state and action.

// koi state nahi hai tou state(initialSate) create kar lenge wo ek object hogi or wo object empty array hogi.

// swtich case define karenge k agar type(action) ki case actiontypes.setproduct hoti hai tou state return kardo ... yahan manager match karega k customer ne jo form fill kara hai wo wali chezain ho sakti hain ya nahi.

// destructre kar kar k action ka naam type kardia hai warna wo hai action hi hai.