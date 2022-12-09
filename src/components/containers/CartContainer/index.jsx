import React, { useContext } from "react";
import { Shop } from "../../../contexts/Shop";
import CartItem from "../../CartItem";
import "./styles.css";
import { FormBasic } from "../../Form/Form";


const CartContainer = () => {
  const {products} = useContext(Shop);


  //de no haber item deberia mostrarse de manera condicional un mensaje "no hay item en la lista"
  return (
    <div>
      {products.map((product) => {
        return <CartItem key={product.id} item={product} />;
      })}
      {/* <button className="button" onClick={confirmPurchase}>
        Confirm Purchase
      </button> */}
      <FormBasic/>
    </div>
  );
};

export default CartContainer;
