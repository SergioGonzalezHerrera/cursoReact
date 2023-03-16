import OrderForm from "./OrderForm";
import Cart from "./Cart";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const CartContainer = () => {

  const { cartList } = useCartContext()
  return (
    <div>
      {cartList.length > 0 ? (
        <div>
          <Cart />
          <OrderForm />
        </div>
      ) : (
        <div>
          <h1>Aún no has agregado productos a tu carrito!</h1>
          <Link to='/'><button > Volver al inicio</button></Link>
        </div>
      )
      }
    </div>
  )
}

export default CartContainer