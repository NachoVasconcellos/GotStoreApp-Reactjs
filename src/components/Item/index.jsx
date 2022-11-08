import React from 'react'

//Card
const Item = ({product}) => {
  return (
    <div>
      <img src={product.imageUrl} alt="character"/>
      <p key={product.id}>{product.fullName}, stock: {10}</p>
    </div>
  )
}

export default Item