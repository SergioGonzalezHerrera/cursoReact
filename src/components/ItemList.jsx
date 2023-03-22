import { memo } from "react"
import { Item } from "./Item"
import { styleCards } from "./ItemListContiner.style"

export const ItemList = memo(({ products }) => {
    return (
        <div className="justify-content-center align-item-center" style={styleCards}>
            {products.map(product => <Item key={product.id} product={product} />)
            }
        </div>
    )
})
