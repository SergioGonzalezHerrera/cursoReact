import { useCartContext } from "../context/CartContext"

const CartContainer = () => {
  
  const { cartList, vaciarCarrito } = useCartContext()

  return (
    <div>
        {
          cartList.map(prodCart => (
              <label key={prodCart.id}>
                <img src={prodCart.foto} className='w-25' />
                Nombre: {prodCart.name}
                cantidad: {prodCart.cantidad}
                precio: {prodCart.price}  
              </label>
          ))
        }
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  )
}

export default CartContainer