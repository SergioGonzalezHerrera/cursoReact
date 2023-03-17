import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const agregarCart = (producto) => {
        const indexProd = cartList.findIndex(product => product.id === producto.id)
        if (indexProd !== -1) {
            cartList[indexProd].cantidad += producto.cantidad
            setCartList([...cartList])
            return
        }
        setCartList([...cartList, producto])
    }
    const precioTotal = () => cartList.reduce((count, producto) => count += (producto.cantidad * producto.price), 0)
    const cantidadTotal = () => cartList.reduce((count, producto) => count += producto.cantidad, 0)
    const eliminarProducto = (id) => setCartList(cartList.filter(prod => prod.id !== id))
    const vaciarCarrito = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}