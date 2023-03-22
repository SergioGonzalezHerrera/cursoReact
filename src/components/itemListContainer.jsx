import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { Card } from "react-bootstrap"
import Loading from "./Loading"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()
    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore();
            const queryCollection = collection(db, "Productos");
            const queryFilter = idCategory
                ? query(queryCollection, where("category", "==", idCategory))
                : queryCollection;
            getDocs(queryFilter)
                .then((respCollection) =>
                    setProducts(
                        respCollection.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
                    )
                )
                .catch((err) => console.error(error))
                .finally(() => setLoading(false));
        }, 2000); // Delay de 1 segundo
    }, [idCategory]);
    return (
        <>
            {loading ?
                <Loading />
                :
                <div className="custom-bg">
                    <div className="custom-border container-fluid">
                        <Card className=" text-center bg-dark border-dark text-white">
                            <Card.Body ><h3>{greeting}</h3></Card.Body>
                        </Card>
                    </div>
                    <ItemList products={products} />
                </div>
            }
        </>
    )
}

export default ItemListContainer