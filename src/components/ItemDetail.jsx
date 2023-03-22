import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';
import { useCartContext } from "../context/CartContext"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
    const [isCount, setIsCount] = useState(true)
    const { addToCart } = useCartContext()
    function onAdd(amount) {
        addToCart({ ...product, amount })
        setIsCount(false)
    }
    return (
        <div className='container-fluid'>
            {
                isCount ?
                    <Card style={{ width: '18rem' }} className="text-center border-card-white mx-auto" bg="dark" text="white">
                        <Card.Img variant="top" src={product.picture} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush bg-dark border-dark text-white border-white">
                            <ListGroup.Item className="bg-dark text-white border-white">Disponibles: {product.stock}</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white border-white">Precio Unitario: {product.price}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <ItemCount initial={1} stock={10} onAdd={onAdd} />
                        </Card.Body>
                    </Card>
                    :
                    <div>
                        <div className='text-center'>
                            <Link to='/cart'><button className="mr-2">Ir al carrito</button></Link>
                            <br/>
                            <br/>
                            <Link to='/'><button className="ml-2">Seguir comprando</button></Link>
                        </div>
                    </div>
            }
        </div>
    );
}

export default ItemDetail;