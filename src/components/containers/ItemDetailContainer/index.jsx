import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import Loader from "../../Loader";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacterDetail = async () => {
      const docRef = doc(db, "character", id);

      //2do generar la peticion
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setCharacter({ ...docSnap.data(), id: docSnap.id });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    getCharacterDetail();
  }, [id]);

  return character ? <ItemDetail character={character} /> : <Loader />;
};

export default ItemDetailContainer;
