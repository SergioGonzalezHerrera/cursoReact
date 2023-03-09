import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { gFetch } from "../utils/gFecht"
import ItemCount from "./ItemCount"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { idProduct } = useParams()

    const { agregarCart } = useCartContext()
    // console.log(idProducto)

    useEffect(()=>{
        gFetch(idProduct)
        .then(resp => setProduct(resp))
    },[])

    function onAdd(cantidad){
        console.log(cantidad)
        // console.log(product)
        agregarCart( { ...product, cantidad } )
    }
    // console.log(product)
    return (
        <div 
        // className="border border-5 border-danger w-100" 
        >
            ItemDetailConainer id: {idProduct}
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetailContainer