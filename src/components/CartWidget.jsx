import { useCartContext } from "../context/CartContext"

const CartWidget = () => {
  const { totalAmount } = useCartContext()
  return (
    <div> {totalAmount() > 0 && totalAmount()} 🛒</div>
  )
}

export default CartWidget