import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList";
import "./styles.css";
import { CircleLoader } from "react-spinners";
import Ad from "../../Ad";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const [adWiew, setAdView] = useState(true);

  const { categoryId } = useParams();

  console.log(categoryId);

  const handleClose = () => {
    setAdView(false);
  };

  useEffect(() => {
    (async () => {
      //    try {
      //     console.log(categoryId);
      //     let response;
      //     if (categoryId) {
      //         response = await fetch(`https://thronesapi.com/api/v2/Characters/?id${categoryId}`);
      //     } else {
      //         response = await fetch(`https://thronesapi.com/api/v2/Characters/`);
      //     }
      //     console.log(response);
      //     const data = await response.json();
      //     console.log(data)
      //     setProducts(data)
      try {
        console.log(categoryId);
        // let response = await fetch("https://thronesapi.com/api/v2/Characters");
        
        // const data = await response.json();

        //Codigo añadido de la documentacion de firestore
        //1er paso armar la query
        let q;
        if (categoryId) {
          q = query(collection(db, "character"), where("lastName", "==", categoryId))
        } else { 
          q = query(collection(db, "character"));
        }
        //2do paso realizar la query
        const querySnapshot = await getDocs(q);
        const productosFirebase = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          productosFirebase.push({...doc.data(), id: doc.id})
        });
        setProducts(productosFirebase);

        //guardo por las dudas esto
        // const data = await response.json();
        // if (categoryId) {
        //   setProducts(data.filter((p) => p.lastName === categoryId));
        // } else {
        //   setProducts(data);
        // }

      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  console.log(products);

  useEffect(() => {
    const handleEsc = (event) => {
        console.log(event); //Evento nativo del browser

        if (event.keyCode === 27) {
            console.log("will close");
            setAdView(false)
            window.removeEventListener("keydown", handleEsc)
        }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
        console.log("Se desmonta el componente")
        
    };
  }, []);

  return (
    <>
      {/* // <div className="mensaje">
        //     <h1>{greeting}</h1>
        // </div> */}
      {products.length ? <ItemList products={products} /> : <CircleLoader className="loader"/>}

      {adWiew ? (
        <Ad>
          <h1>No te olvides de dejar tu LIKE</h1>
          <button className="anuncio" onClick={handleClose}>
            Cerrar Anuncio
          </button>
        </Ad>
      ) : null}
    </>
  );
}
