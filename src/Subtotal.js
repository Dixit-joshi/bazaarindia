import React from 'react'
import { useStateValue } from './StateProvider'
import { total } from './Reducer';
function Subtotal() {
    const[{basket},dispatch]=useStateValue();
  return (
    <div className='bg-light p-4'>
        <p>Subtotal({basket.length} items): <strong>Rs {total(basket)}</strong></p>
        <input type='checkbox'/>This order contains a gift
        <button className='btn btn-warning rounded-0'>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal