import React, {useEffect, useState} from "react";
import ItemList from "../../ItemList";
import './styles.css';



export default function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([])

    

    useEffect(() => {
        ( async  () => {
           try {
            const response = await fetch('https://thronesapi.com/api/v2/Characters/');
            console.log(response);
            const data = await response.json();
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
        })()
    }, [])

    console.log(products);

    return (
        <>
        {/* // <div className="mensaje">
        //     <h1>{greeting}</h1>
        // </div> */}
        <ItemList products={products}/>
        </>
    )
}