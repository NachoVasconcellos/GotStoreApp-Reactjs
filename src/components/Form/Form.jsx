import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import generateOrderObject from '../../services/generateOrderObject';
import { doc, getDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './styles.css';
import { Shop } from '../../contexts/Shop';

export const FormBasic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { products, calculateTotal } = useContext(Shop);

  const confirmPurchase = (data) => {
    console.log(data);
    //Mostar un formulario de compra donde el usuario ingrese sus datos(eliminar esto hardcodeado)
    (async () => {
      const generatedOrder = generateOrderObject(
        data,
        products,
        calculateTotal()
      );
      console.log(generatedOrder);

      let productOutOfStock = [];
      //Chequear el stock de los productos del carrito

      for (const productInCart of products) {
        const docRef = doc(db, 'character', productInCart.id);
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
          const productRef = doc(db, 'character', productInCart.id);

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
          const docRef = await addDoc(collection(db, 'orders'), generatedOrder);
          alert(`se generó la orden satifactoriamente con ID: ${docRef.id}`);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert('Hay algún producto fuera de stock');
      }
    })();
  };

  return (
    <div className="container-form">
      <h2>Purchase Form</h2>

      <form onSubmit={handleSubmit(confirmPurchase)}>
        <div className="form-control">
          <label>Name</label>
          <input type="text" {...register('nombre', { required: true })} />
          {errors.name && <small>complete field</small>}
        </div>
        <div className="form-control">
          <label>Phone</label>
          <input type="number" {...register('telefono', { required: true })} />
          {errors.phone && <small>complete field</small>}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="email" {...register('email', { pattern: true })} />
          {errors.email && <small>invalid email</small>}
        </div>
        <button type="submit" className="btn">
          Confirm Purchase
        </button>
      </form>
    </div>
  );
};

export default FormBasic;





