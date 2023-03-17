import { Link } from "react-router-dom"

export const Item = ({ producto }) => {
    return (
        <div key={producto.id} className="card w-25 m-5">
            <div className="card-header">
                Nombre: {producto.name}
            </div>
            <div className="card-body">
                <img className="w-100" src={producto.picture} />
                <br />
                <label>Categoría: {producto.category}</label>
                <label>Precio: {producto.price}</label>
                <label>Stock: {producto.stock}</label>
            </div>
            <div className="card-footer">
                <Link to={`/detalle/${producto.id}`}>
                    <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
            </div>
        </div>
    )
}
