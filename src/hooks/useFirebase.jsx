import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../firebase/config'


const useFirebase = (categoryId) => {

    const [error, setError] = useState("")
    const [data, setData] = useState ([])

    useEffect(() => {
        (async () => {
          try {
            //Codigo añadido de la documentacion de firestore
            //1er paso armar la query
            let q;
            if (categoryId) {
              q = query(
                collection(db, "character"),
                where("lastName", "==", categoryId)
              );
            } else {
              q = query(collection(db, "character"));
            }
            //2do paso realizar la query
            const querySnapshot = await getDocs(q);
            const productosFirebase = [];
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              productosFirebase.push({ ...doc.data(), id: doc.id });
            });
            setData(productosFirebase);
          } catch (error) {
            setError(error.message);
          }
        })();
      }, [categoryId]);

    return [data, error]
}

export default useFirebase