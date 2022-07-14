import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
   allProducts : productReducer,
});

export default reducers;

// jub hum application banaye ge tou hosakta hai os application mai multiple reducers(managers) hoon tou un reducers ko ek jagah combine kar lenge 

// combineReducers redux ka official reducer(manager) hai or productReducer hamara apna banaya hua reducer(manager) hai.

// ek variable mai sub reducers(managers) ko jama kar lenge magar in ka HEAD MANAGER combineReducers hai jo REDUX se araha hai os k under hamare reducers(managers) kaam karenge. 