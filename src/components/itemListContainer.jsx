import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../utils/gFecht"
import { ItemList } from "./ItemList"

import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"

const ItemListContainer = ( {greeting}) => {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState([])
    const [loading, setLoading ] = useState(true)
    const { idCategoria } = useParams()

    //Traer solo 1 elemento de la db
    // useEffect(()=>{
    //     const db = getFirestore()
    //     const queryDoc = doc(db, 'Productos', 'dI5akrrwhnwdHg0shZhW')
    //     getDoc(queryDoc)
    //     .then(respProd => setProducto( {id: respProd.id, ...respProd.data() } ))
    // }, [])

    //Traer TODOS los elementos de la db
    // useEffect(()=>{
    //     const db = getFirestore()
    //     const queryCollection = collection(db, 'Productos')
    //     getDocs(queryCollection)
    //     .then(respCollection => setProductos( respCollection.docs.map(prod => ({id: prod.id, ...prod.data()}))))
    //     .catch(err=>console.error(error))
    //     .finally(()=> setLoading(false))
    // }, [])

    //Traer elementos FILTRADOS de la db
    //     useEffect(()=>{
    //     const db = getFirestore()
    //     const queryCollection = collection(db, 'Productos')

    //     const queryFilter = query(queryCollection, where( 'categoria' , '==' , idCategoria))

    //     getDocs(queryFilter)
    //     .then(respCollection => setProductos( respCollection.docs.map(prod => ({id: prod.id, ...prod.data()}))))
    //     .catch(err=>console.error(error))
    //     .finally(()=> setLoading(false))
    // }, [])
    


    useEffect(()=>{
        if (idCategoria) {
        const db = getFirestore()
        const queryCollection = collection(db, 'Productos')

        const queryFilter = query(queryCollection, where( 'categoria' , '==' , idCategoria))

        getDocs(queryFilter)
        .then(respCollection => setProductos( respCollection.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err=>console.error(error))
        .finally(()=> setLoading(false))         
            
        } else {
        const db = getFirestore()
        const queryCollection = collection(db, 'Productos')
        getDocs(queryCollection)
        .then(respCollection => setProductos( respCollection.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err=>console.error(error))
        .finally(()=> setLoading(false))     
        }
        
    }, [idCategoria])



    // useEffect(()=>{
    //     if (idCategoria) {
    //         gFetch()
    //         .then(resp => setProductos(resp.filter(producto=> producto.categoria === idCategoria)))
    //         .catch( err => console.log(err))
    //         .finally( ()=> setLoading(false))            
            
    //     } else {
    //         gFetch()
    //         .then(resp => setProductos(resp))
    //         .catch( err => console.log(err))
    //         .finally( ()=> setLoading(false))            
    //     }
        
    // }, [idCategoria])

    return (
        <>
            { loading ? 
                    <h2>Cargando ...</h2>
                : 
                <>
                    <h2>{greeting}</h2>
                    <ItemList productos={productos}/>
                </>
            }
        </>
    )
}

export default ItemListContainer