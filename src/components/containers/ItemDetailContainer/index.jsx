import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail";
import {CircleLoader} from "react-spinners"


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState(null)

    useEffect(() => {

       
    const getCharacterDetail = async () => {    
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
        const character = await response.json();
        setCharacter(character)
    }

        getCharacterDetail()
        //hacer el fetch del detalle del producto 
    }, [id])

    return (character ? <ItemDetail character={character}/> : <CircleLoader/>)
};

export default ItemDetailContainer;