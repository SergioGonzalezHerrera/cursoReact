import { useCartContext } from "../context/CartContext"

const CartContainer = () => {
  
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()

  return (
    <div>
      <div>
        {
          cartList.map(prodCart => (
              <label key={prodCart.id}>
                <img src={prodCart.foto} className='w-25' />
                Nombre: {prodCart.name}
                Cantidad: {prodCart.cantidad}
                Valor unitario: {prodCart.price}  
                <div>Valor total: {precioTotal()}</div>
                <button variant="danger" onClick={ () =>eliminarProducto(prodCart.id)}>Eliminar del carrito</button>
              </label>
              
          ))
        }
        
        </div>
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  )
}

export default CartContainer