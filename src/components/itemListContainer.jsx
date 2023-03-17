import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

const ItemListContainer = ( {greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading ] = useState(true)
    const { idCategoria } = useParams()
    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'Productos')
        const queryFilter= idCategoria ? query(queryCollection, where( 'categoria' , '==' , idCategoria)) : queryCollection
        getDocs(queryFilter)
        .then(respCollection => setProductos( respCollection.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err=>console.error(error))
        .finally(()=> setLoading(false))         
    }, [idCategoria])
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