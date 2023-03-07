import { createContext, useContext, useState } from "react";

const CartContext = createContext ([]);

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList]= useState([])

    const agregarCart = (producto) => {
        setCartList( [ 
            ...cartList, 
            producto
        ])
    }

    const vaciarCarrito = () =>{
        setCartList([])
    }

    return (
        <CartContext.Provider value = {{
            cartList,
            agregarCart,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}