import React from 'react'

const CartItem = ({item}) => {
  return (
    <div>
        <img src={item.imageUrl} width={150} alt='cart-item'/>
        <h1>{item.fullName}</h1>
    </div>
  )
}

export default CartItem