import { useState } from "react"


const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
    const [count, setCount] = useState(initial)
    const add = () => {
        if (count <= stock) {
            setCount(count + 1)
        }
    }
    const subtract = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }
    

    return (
        <div>
            <div className="card-body row text-center" bg="dark" text="white">
                <div className="col">
                    <button className="btn btn-outline-white w-100 bg-dark text-white border-white" onClick={subtract}> - </button>
                </div>
                <div className="col">
                    <center>
                        <label>{count}</label>
                    </center>
                </div>
                <div className="col">
                    <button className="btn btn-outline-white w-100 bg-dark text-white border-white" onClick={add}> + </button>
                </div>
            </div>
            <button className="btn btn-outline-white w-100 bg-dark text-white border-white" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

