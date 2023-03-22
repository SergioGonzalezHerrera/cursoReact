import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { idProduct } = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'Productos', idProduct)
        getDoc(queryDoc)
            .then(respProd => setProduct({ id: respProd.id, ...respProd.data() }))
            .catch(err => console.error(error))
            .finally(() => setLoading(false))
    }, [])
    return (
        <>
            {loading ?
                <Loading />
                :
                <div className="d-flex vh-100 custom-bg">
                    <Container fluid className="my-auto">
                        <ItemDetail product={product} />
                    </Container>
                </div>
            }
        </>
    )
}

export default ItemDetailContainer