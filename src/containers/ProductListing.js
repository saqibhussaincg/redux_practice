import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => state);

    console.log(products);
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