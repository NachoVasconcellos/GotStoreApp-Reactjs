import { createContext, useState } from "react";
import React from 'react'

export const Shop = createContext({});

const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const addProducts = (productToAdd) => {
        console.log(productToAdd);
        const flagRepeated = isProductRepeated(productToAdd.id)
        if (flagRepeated) {
            //Logica para quantity
        } else {
            setProducts([...products, productToAdd])
        }
    }

    //Equivale a isInCart
    const isProductRepeated = (id) => {
        return products.some(product => product.id === id);
    }

    //Eliminar producto

    //Vaciar el Carrito

    //Calculo de Total

    //Calculo del total de items del carrito

  return  <Shop.Provider value = {{products, addProducts}}>
             {children}
          </Shop.Provider>
  
};

export default ShopProvider