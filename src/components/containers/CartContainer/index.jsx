import React, { useContext } from "react";
import { Shop } from "../../../contexts/Shop";
import generateOrderObject from "../../../services/generateOrderObject";
import CartItem from "../../CartItem";
import "./styles.css";
import { doc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { FormBasic } from "../../Form/Form";
import { useForm } from 'react-hook-form'


export const CartContainer = () => {
  const { products, calculateTotal } = useContext(Shop);

  const buyer =  useForm()
  
  const confirmPurchase = () => {
    //Mostar un formulario de compra donde el usuario ingrese sus datos(eliminar esto hardcodeado)
    (async () => {
      await FormBasic()

      const generatedOrder = generateOrderObject(
        FormBasic(),
        // nombreComprador,
        // email,
        // telefono,
        products,
        calculateTotal()
      );
      console.log(generatedOrder);

      let productOutOfStock = [];
      //Chequear el stock de los productos del carrito

      for (const productInCart of products) {
        const docRef = doc(db, "character", productInCart.id);
        const docSnap = await getDoc(docRef);
        console.log(docSnap);
        const productInFirebase = { ...docSnap.data(), id: doc.id };
        if (productInCart.quantity > productInFirebase.quantity)
          productOutOfStock.push(productInCart);
      }

      console.log(productOutOfStock);

      if (productOutOfStock.length === 0) {
        //Disminuir el stock existente
        console.log(products);

        for (const productInCart of products) {
          const productRef = doc(db, "character", productInCart.id);

          const docSnap = await getDoc(productRef);
          const productInFirebase = { ...docSnap.data(), id: doc.id };

          // Set the "capital" field of the city 'DC'
          await updateDoc(productRef, {
            quantity: productInFirebase.quantity - productInCart.quantity,
          });
        }

        //generar la orden

        // Add a new document with a generated id.

        try {
          const docRef = await addDoc(collection(db, "orders"), generatedOrder);
          alert(`se generó la orden satifactoriamente con ID: ${docRef.id}`);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Hay algún producto fuera de stock");
      }
    })();
  };

  //de no haber item deberia mostrarse de manera condicional un mensaje "no hay item en la lista"
  return (
    <div>
      {products.map((product) => {
        return <CartItem key={product.id} item={product} />;
      })}
      {/* <button className="button" onClick={confirmPurchase}>
        Confirm Purchase
      </button> */}
      <FormBasic confirmPurchase={confirmPurchase} buyer={buyer}/>
    </div>
  );
};

export default CartContainer;
