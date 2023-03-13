import { useCartContext } from "../context/CartContext"

const CartWidget = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <div> { cantidadTotal() > 0 && cantidadTotal() } 🛒</div>
  )
}

export default CartWidget