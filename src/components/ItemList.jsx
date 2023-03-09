import { Item } from "./Item"
import { styleCards } from "./ItemListContiner.style"

export const ItemList = ({ productos }) => {
    return (
        <div className="justify-content-center align-item-center" style={styleCards}>
            {productos.map(producto => <Item key={producto.id} producto={producto} />)
            }
        </div>
    )
}
