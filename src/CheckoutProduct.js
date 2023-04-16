import React from 'react'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,title,image,rating,price}) {
    const[{basket},dispatch]=useStateValue();
    const RemoveFromCart=()=>{
        dispatch({
            type: "Remove_From_Cart",
            id: id
        })
    }
  return (
    <div className='d-flex mb-3'>
        <div style={{width:"160px"}}>
            <img src={`/images/${image}`} className='w-100' alt="macbook" />
        </div>
        <div className='ms-4'>
            <h4>{title}</h4>            
            <span>Rs<strong>{price}</strong></span>
            <p>
                {Array(rating).fill().map((_,i)=>(
                    <span>⭐</span>
                ))}
            </p>
            <button className='btn btn-sm btn-warning' onClick={RemoveFromCart}>Remove from cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct