import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { idProducto } = useParams()
    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'Productos', idProducto)
        getDoc(queryDoc)
            .then(respProd => setProduct({ id: respProd.id, ...respProd.data() }))
    }, [])
    return (
        <div className="d-flex vh-100 custom-bg">
        <Container fluid className="my-auto">
        <ItemDetail product={product} />
        </Container>
      </div>
            

    )
}

export default ItemDetailContainer