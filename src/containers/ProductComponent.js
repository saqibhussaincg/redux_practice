import React from 'react'
import { useSelector } from 'react-redux/es/exports';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const {id, title} = products[0];
   

  return (
    <div className='four column wide'>
        <h1>ProductComponent</h1>

        <div className='ui link cards'>
            <div className='card'>
                <div className='image'>

                </div>
                <div className='content'>
                    <div className='header'>
                       {title}         
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProductComponent