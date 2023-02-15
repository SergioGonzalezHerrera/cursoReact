import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../utils/gFecht"
import { styleCards } from "./ItemListContiner.style"

const ItemListContainer = ( {greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading ] = useState(true)
    const { idCategoria } = useParams()
    
    useEffect(()=>{
        if (idCategoria) {
            gFetch()
            .then(resp => setProductos(resp.filter(producto=> producto.categoria === idCategoria)))
            .catch( err => console.log(err))
            .finally( ()=> setLoading(false))            
            
        } else {
            gFetch()
            .then(resp => setProductos(resp))
            .catch( err => console.log(err))
            .finally( ()=> setLoading(false))            
        }
        
    }, [idCategoria])
    return (
        <>
            { loading ? 
                    <h2>Cargando ...</h2>
                : 
                <>
                    <h2>{greeting}</h2>
                    <div className="justify-content-center align-item-center" style={styleCards}>
                        { productos.map( producto =>  (
                                <div key={producto.id} className="card w-25 m-5">
                                    <div className="card-header">
                                        Nombre: {producto.name}
                                    </div>
                                    <div className="card-body">
                                        <img className="w-100" src={producto.foto} />
                                        <br />
                                        <label>Categoría: {producto.categoria}</label>
                                        <label>Precio: {producto.price}</label>
                                        <label>Stock: {producto.stock}</label>
                                    </div>
                                    <div className="card-footer">
                                        <Link to={`/detalle/${producto.id}`}>
                                            <button className="btn btn-outline-dark w-100">Detalle</button>
                                        </Link>
                                    </div>
                                    
                                </div>
                            )) 
                        }
                    </div>
                </>
            }
        </>
    )
}

export default ItemListContainer