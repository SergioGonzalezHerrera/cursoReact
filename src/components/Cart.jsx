import { useCartContext } from "../context/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";

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
        <div className=" custom-bg">
            {id !== '' &&
                <div className="container-fluid">
                    <Card className=" text-center bg-dark text-white border-card-white">
                        <Card.Body ><h3> Orden de compra: {id}</h3></Card.Body>
                    </Card>
                </div>
            }
            {cartList.length > 0 ? (
                <div>
                    <div>
                        {
                            cartList.map(prodCart => (
                                <div key={prodCart.id}>
                                    <Card style={{ width: '18rem' }} className="text-center border-card-white mx-auto" bg="dark" text="white">
                                        <Card.Img variant="top" src={prodCart.picture} />
                                        <Card.Body>
                                            <Card.Title>{prodCart.name}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush bg-dark border-dark text-white border-white">
                                            <ListGroup.Item className="bg-dark text-white border-white">Cantidad: {prodCart.cantidad}</ListGroup.Item>
                                            <ListGroup.Item className="bg-dark text-white border-white">Precio Unitario: ${prodCart.price}</ListGroup.Item>
                                        </ListGroup>
                                        <Card.Body>
                                            <button variant="danger" onClick={() => eliminarProducto(prodCart.id)}>Eliminar del carrito</button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                    <div className="container-fluid mt-3">
                        <Card className=" text-center bg-dark text-white border-card-white">
                            <Card.Body ><h3>Valor total: ${precioTotal()}</h3></Card.Body>
                        </Card>
                    </div>
                    <div className=" text-center mt-3">
                        <button className="border-card-white" onClick={vaciarCarrito}>Vaciar carrito</button>
                    </div>
                    <div className=" text-center mt-3">
                        <form onSubmit={generateOrder}>
                            <input type='text' name='name' placeholder="Ingrese su nombre" onChange={handleOnChange} required value={dataForm.name} /><br />
                            <input type='text' name='phone' placeholder="Ingrese su telefono" onChange={handleOnChange} required value={dataForm.phone} /><br />
                            <input type='text' name='email' placeholder="Ingrese su e-mail" onChange={handleOnChange} required value={dataForm.email} /><br />
                            {/* <input type='text' name='validarEmail' placeholder="Ingrese su e-mail nuevamente" onChange={handleOnChange} required value={dataForm.validarEmail} /> */}
                            <br />
                            <button className="border-card-white">Confirmar compra</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="d-flex vh-100 custom-bg mt-3" >
                    <div className="container-fluid">
                        <Card className=" text-center bg-dark text-white border-card-white">
                            <Card.Body ><h3>Aún no has agregado productos a tu carrito!</h3></Card.Body>
                        </Card>
                        <div className=" text-center mt-3">
                            <Link to='/'><button className="border-card-white" > Volver al inicio</button></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart

