import React, { useContext } from 'react'
import { Shop } from '../../contexts/Shop'
import TrashCanIcon from '../TrashCanIcon'

const CartItem = ({item}) => {

  const {removeProducts} = useContext(Shop);

  const handleRemove = () => {
    removeProducts(item.id)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 30,
      gap: 50,
      alignItems: 'center'
    }}>
        <img src={item.imageUrl} width={150} alt='cart-item'/>
        <h1>{item.fullName}</h1>
        <p>{item.quantity}</p>
        <div style={{width: 30}} onClick={handleRemove}>
          <TrashCanIcon/>
          </div>
    </div>
  )
}

export default CartItem