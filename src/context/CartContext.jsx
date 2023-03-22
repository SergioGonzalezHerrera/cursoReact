import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const addToCart = (product) => {
        const indexProd = cartList.findIndex(product => product.id === product.id)
        if (indexProd !== -1) {
            cartList[indexProd].amount += product.amount
            setCartList([...cartList])
            return
        }
        setCartList([...cartList, product])
    }
    const totalPrice = () => cartList.reduce((count, product) => count += (product.amount * product.price), 0)
    const totalAmount = () => cartList.reduce((count, product) => count += product.amount, 0)
    const deleteProduct = (id) => setCartList(cartList.filter(prod => prod.id !== id))
    const emptyCart = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            totalPrice,
            totalAmount,
            deleteProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}