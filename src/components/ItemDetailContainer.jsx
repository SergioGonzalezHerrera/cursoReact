import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { gFetch } from "../utils/gFecht"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { idProducto } = useParams()
    const [producto, setProducto] = useState([])

    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'Productos', idProducto)
        getDoc(queryDoc)
        .then(respProd => setProduct( {id: respProd.id, ...respProd.data() } ))
    },[])

    // useEffect(()=>{
    //     gFetch(idProducto)
    //     .then(resp => setProduct(resp))
    //     .catch(err => setProduct(err))
    // },[])

    return (
        <div className="container-fluid">
        <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer