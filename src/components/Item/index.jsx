import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../contexts/Theme'
import "./styles.css"

//Card
const Item = ({product}) => {

  const navigate = useNavigate()

  const {themeColor} = useContext(Theme);

  const navigateDetail = () => {
    //Navegar hacia el detalle del articulo
    navigate(`/detail/${product.id}`)
  }

  return (
    <div onClick={navigateDetail} className={ themeColor === "dark" ? "card-detail" : "card-detail-light"}>
      <img src={product.imageUrl} alt="character" className='img'/>
      <p key={product.id}>{product.fullName}, stock: {product.quantity}</p>
    </div>
  )
}

export default Item