import React, { useContext } from 'react';
import { Shop } from '../../../contexts/Shop';
import CartItem from '../../CartItem';

const CartContainer = () => {
    const {products} = useContext(Shop)
  return (
    <div>
        {products.map(product => {
            return <CartItem item={product}/>
        })}
    </div>
  )
}

export default CartContainer