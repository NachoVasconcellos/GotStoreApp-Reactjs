import { createContext, useState } from "react";
import React from "react";

export const Shop = createContext({});

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProducts = (productToAdd) => {
    console.log(productToAdd);
    const flagRepeated = isProductRepeated(productToAdd.id);
    if (flagRepeated) {
      //Logica para quantity y no agregar producto entero cuando se repita
      //1ro encontramos el producto repetido y le adicionamos la cantidad correspondiente
      const productoRepetidoModificado = products.find(
        (productInCart) => productInCart.id === productToAdd.id
      );
      productoRepetidoModificado.quantity += productToAdd.quantity;
      //2do quitamos el producto repetido del carrito y colocamos el producto repetido pero modificado
      const productosCartSinRepetido = products.filter(
        (productsInCart) => productsInCart.id !== productToAdd.id
      );
      setProducts([...productosCartSinRepetido, productoRepetidoModificado]);
    } else {
      setProducts([...products, productToAdd]);
    }
  };

  //Equivale a isInCart
  const isProductRepeated = (id) => {
    return products.some((product) => product.id === id);
  };

  //Eliminar producto
  const removeProducts = (id) => {
    const productosCart = products.filter(
      (productsInCart) => productsInCart.id !== id
    );
    setProducts(productosCart);
  };

  //Vaciar el Carrito
  const emptyCart = () => {
    setProducts([]);
  };

  //Calculo de Total
  const calculateTotal = () => {
    const total = products.reduce(
      (acc, productoActual) =>
        (acc += productoActual.quantity * productoActual.price),
      0
    );
    return total;
  };

  //Calculo del total de items del carrito
  const totalItemCart = () => {
    let total = 0;
    products.forEach((product) => (total += product.quantity));
    return total;
  };

  return (
    <Shop.Provider
      value={{
        products,
        addProducts,
        removeProducts,
        emptyCart,
        calculateTotal,
        totalItemCart,
      }}
    >
      {children}
    </Shop.Provider>
  );
};

export default ShopProvider;
