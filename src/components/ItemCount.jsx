

const ItemCount = ({ initial= 1, stock=10, onAdd}) => {
    return (
        <div className="card mt-5 w-100" >
            <div className="card-body row">
                <div className="col">
                <button className="btn btn-outline-dark w-100" onClick={()=>{}}> + </button>

                </div>
                <div className="col">
                <center>
                <label>{1}</label>

                </center> 
    
                </div>
                <div className="col">
                <button className="btn btn-outline-dark w-100" onClick={()=>{} }> - </button>

                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-dark w-100" onClick={()=>onAdd(2)}>Agregar al carrito</button>
            </div>


        </div>
    )
}

export default ItemCount