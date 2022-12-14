import React from "react";
import { Shop } from "../../contexts/Shop";
import { useContext } from "react";
import { useState } from "react";
import ItemCount from "../ItemCount";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ character }) => {
  const { addProducts } = useContext(Shop);
  const [quantityItemDetail, setQuantityItemDetail] = useState(0);

  const navigate = useNavigate();

  const confirmPurchase = (quantity) => {
    addProducts({ ...character, quantity });
    setQuantityItemDetail(quantity);
  };

  const handleNavigate = () => {
    navigate("/cart");
  };

  return (
    <div className="item-detail">
      <img src={character.imageUrl} alt="character" className="img-detail" />
      <div className="texts">
        <h1>{character.fullName}</h1>
        <p>{character.title}</p>
        {quantityItemDetail ? (
          <button className="btn" onClick={handleNavigate}>
            Add to Cart
          </button>
        ) : (
          <ItemCount onAdd={confirmPurchase} initial={1} stock={10} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
