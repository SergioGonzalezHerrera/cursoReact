import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
} 


export const CartContextProvider = ({children}) => {
    // estados y funciones globales
    const [cartList, setCartList] = useState([])

    // logica de no repetir el product
    const agregarCart = ( producto ) => {
        setCartList( [
            ...cartList,
            producto
        ] )
    }

    

    const vaciarCarrito = () =>{
        setCartList([])
    }
 
    return (
        <CartContext.Provider value={{
            cartList, 
            agregarCart,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

// crear un conteto
// inicializar con un array vacio 
// exportar e importar en app.