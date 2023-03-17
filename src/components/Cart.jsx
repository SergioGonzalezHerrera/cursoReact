import { useCartContext } from "../context/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Cart = () => {
    const [id, setId] = useState('')
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()
    const generateOrder = (event) => {
        event.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.precioTotal = precioTotal()
        order.productos = cartList.map(({ id, name, price }) => ({ id, name, price }))
        const db = getFirestore()
        const queryCollection = collection(db, 'Orders')
        addDoc(queryCollection, order)
            .then(resp => setId(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                vaciarCarrito()
                setDataForm({
                    name: '',
                    phone: '',
                    email: ''
                })
            })
    }
    const handleOnChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            {id !== '' && <h1> Orden de compra: {id}</h1>}
            {cartList.length > 0 ? (
                <div>
                    <div>
                        {
                            cartList.map(prodCart => (
                                <label key={prodCart.id}>
                                    <img src={prodCart.picture} className='w-25' />
                                    Nombre: {prodCart.name}
                                    Cantidad: {prodCart.cantidad}
                                    Valor unitario: {prodCart.price}
                                    <button variant="danger" onClick={() => eliminarProducto(prodCart.id)}>Eliminar del carrito</button>
                                </label>
                            ))
                        }
                    </div>
                    <h3>Valor total: {precioTotal()}</h3>
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                    <div>
                        <form onSubmit={generateOrder}>
                            <input type='text' name='name' placeholder="Ingrese su nombre" onChange={handleOnChange} required value={dataForm.name} /><br />
                            <input type='text' name='phone' placeholder="Ingrese su telefono" onChange={handleOnChange} required value={dataForm.phone} /><br />
                            <input type='text' name='email' placeholder="Ingrese su e-mail" onChange={handleOnChange} required value={dataForm.email} /><br />
                            {/* <input type='text' name='validarEmail' placeholder="Ingrese su e-mail nuevamente" onChange={handleOnChange} required value={dataForm.validarEmail} /> */}
                            <button>Confirmar compra</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div>
                    <h1>Aún no has agregado productos a tu carrito!</h1>
                    <Link to='/'><button > Volver al inicio</button></Link>
                </div>
            )}
        </div>
    )
}

export default Cart

