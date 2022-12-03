import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail";
import {CircleLoader} from "react-spinners"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState(null)

    useEffect(() => {

       
    const getCharacterDetail = async () => {    
        // const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`)

        //Viene de la docu de firebase
        //1re generamos la referencia del documento.Tercer parametro es el ID del documento a consultar
        const docRef = doc(db, "character", id);

        //2do generar la peticion
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setCharacter({...docSnap.data(), id: docSnap.id})
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
        // const character = await response.json();
        // setCharacter(character)
    }

        getCharacterDetail()
        //hacer el fetch del detalle del producto 
    }, [id])

    return (character ? <ItemDetail character={character}/> : <CircleLoader/>)
};

export default ItemDetailContainer;