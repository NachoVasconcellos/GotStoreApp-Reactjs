import React from 'react'
import "./styles.css"

const ItemDetail = ({character}) => {
  console.log(character);
  return (
    <div className='item-detail'>
      <img src={character.imageUrl} alt="character" className='img-detail'/>
      <h1>{character.fullName}</h1>
      <p className='description'>{character.family}</p>
    </div>
  )
}

export default ItemDetail