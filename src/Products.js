import React from 'react'
import { useStateValue } from './StateProvider'

function Products({id,title,image,rating,price}) {
    const[state,dispatch]=useStateValue();
    function addProduct(){
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                rating:rating,
                price:price
            }
        })
    }
  return (
    <div className='d-flex flex-column'>
        <h2>{title}</h2>
        <strong>Rs{price}</strong>
        <p>
            {Array(rating).fill().map((_,i)=>(
                    <span>⭐</span>
                ))}
        </p>
        <div className='d-flex flex-column align-items-center'>
            <img src={`/images/${image}`} className= 'w-50 mt-1' style={{height:"280px"}} alt="macbook" />
            <button onClick={addProduct} className='btn btn-warning w-auto mt-3'>Add Product</button>
        </div>       
    </div>
  )
}

export default Products