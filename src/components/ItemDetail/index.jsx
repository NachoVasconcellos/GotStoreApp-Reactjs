import React from 'react'
import { useState } from 'react';
import ItemCount from '../ItemCount';
import "./styles.css"

const ItemDetail = ({character}) => {

  const [quantityItemDetail, setQuantityItemDetail] = useState(0);

  const confirmPurchase = (quantity) => {
    console.log(quantity)
    setQuantityItemDetail(quantity)
  }

  console.log(character);
  return (
    <div className='item-detail'>
      <img src={character.imageUrl} alt="character" className='img-detail'/>
      <h1>{character.fullName}</h1>
      {/* <p className='description'>{character.family}</p> */}
      {/* <button className='btn'>Add to Cart</button> */}
      {quantityItemDetail ?
      <button className='btn'>Add to Cart</button>
      :
      <ItemCount
        onAdd={confirmPurchase}
        initial={1}
        stock={10}
      />}
    </div>
  )
}

export default ItemDetail