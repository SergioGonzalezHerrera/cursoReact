import React from 'react'
import CartWidget from './CartWidget'

function Navbar() {
    return (
        <nav>
            <h1>Potterheads Articulos</h1>
            <ul>
                <li>
                    <a>Inicio</a>
                </li>
                <li >
                    <a>Productos</a>
                </li>
                <li>
                    <a>Sobre Nosotros</a>
                </li>
                <li>
                    <a>Contacto</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar