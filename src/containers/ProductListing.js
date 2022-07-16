import React from 'react'

import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';


import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';


const ProductListing = () => {

    // useSelector for calling state.
    const products = useSelector((state) => state);

    // useDispatch hook to perform an action.
    const dispatch = useDispatch();

    const fetchProducts = async () => {
      const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch( (err) => {
        console.log('Error', err);
        
      });
      // console.log(response.data);
      dispatch(setProducts(response.data));
    }

    useEffect( () => { fetchProducts();  }, [] );
    console.log("products" , products);

  return (

    <div className='ui grid container'>
        {/* <h1>ProductListing</h1> */}
        <ProductComponent />
    </div>
  )
}

export default ProductListing

// useSelector ka kaam sirf redux store se state k through data lane ka hota hai thats it.

// useSelector ko agar kisi or component mai use karna ho tou props paas karne k li zarurat nahi direct use kar sakte hain jis tarah is component mai use kara hua hai.

// A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.

// This hook takes an optional equality comparison function as the second parameter that allows you to customize the way the selected state is compared to determine whether the component needs to be re-rendered.

// useSelector use karenge argument mai (state) define karenge. 

// state mai data store se araha hai

// wese tou kuch bhi name de sakte hain state, states ya phr saqibstorestate etc.

// use AXIOS for redux API CALL

// axios ko call kara 

// Axios is a promise based HTTP client for the browser and Node. js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React.

// api fetch kari or axios k sath async await play kara.

// use Effect k andar (fetchProducts) fetch api wala function chala dia.

// once we get the data from the server(api) we need to add that data into (store). and for that we need to (DISPATCH) an ACTION or hamara action hai (SETPRODUCTS)

// (DISPATCH) k liye redux ka hook use karenge useDispatch()

// dispatch karaye gay action or action araha hoga jahan hum ne action define kara hai, or jub dispatch ko action pass karenge tou wo productAction.js wali file mai jaye or OBJECT return karega action wala jo hum ne banaya hai or ye OBJECT will be taken by the reducer and our reducer will get the type and the payload so the type will be the SET_PRODUCTS and once we get SET_PRODUCTS as the type we need to pass the new state