import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

const CartContainer = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()

  return (
    <div>
      {cartList.length > 0 ? (
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
                  <button variant="danger" onClick={() => eliminarProducto(prodCart.id)}>Eliminar del carrito</button>
                </label>
              ))
            }
          </div>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
      ) : (
        // Si el array está vacío, mostramos estos elementos
        <div>
          <h1>Aún no has agregado productos a tu carrito!</h1>
          
          <Link to='/'><button > Volver al inicio</button></Link>
        </div>
      )}
    </div>
  );
}

// return (
//   <div>
//     <div>
//       {
//         cartList.map(prodCart => (
//           <label key={prodCart.id}>
//             <img src={prodCart.foto} className='w-25' />
//             Nombre: {prodCart.name}
//             Cantidad: {prodCart.cantidad}
//             Valor unitario: {prodCart.price}
//             <div>Valor total: {precioTotal()}</div>
//             <button variant="danger" onClick={() => eliminarProducto(prodCart.id)}>Eliminar del carrito</button>
//           </label>

//         ))
//       }

//     </div>
//     <button onClick={vaciarCarrito}>Vaciar carrito</button>
//   </div>
// )


export default CartContainer