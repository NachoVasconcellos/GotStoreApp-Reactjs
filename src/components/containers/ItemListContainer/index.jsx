import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList";
import './styles.css';
import {CircleLoader} from "react-spinners"



export default function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    console.log(categoryId);

    useEffect(() => {
        ( async  () => {
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
        try{
            console.log(categoryId)
            let response = await fetch('https://thronesapi.com/api/v2/Characters')
            const data = await response.json()
            if(categoryId){
            setProducts(data.filter( p => p.lastName === categoryId))
            }else{
            setProducts(data)
            }
        } catch (error) {
            console.log(error)
        }
        })()
    }, [categoryId])

    console.log(products);

    return (
        <>
        {/* // <div className="mensaje">
        //     <h1>{greeting}</h1>
        // </div> */}
        {products.length ? <ItemList products={products}/> : <CircleLoader/>}
        </>
    )
}