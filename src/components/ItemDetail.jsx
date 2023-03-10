import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';
import { useCartContext } from "../context/CartContext"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {

    const [isCount, setIsCount] = useState(true)
    const { agregarCart } = useCartContext()

    function onAdd(cantidad) {
        // console.log(cantidad);
        agregarCart({ ...product, cantidad })
        setIsCount(false)
    }

    return (
        <div className='container-fluid'>
            <Card className="card text-white bg-dark mb-3 w-50">
                <Card.Img variant="top" src={product.foto} />
                <Card.Body>
                    <Card.Title className='text-center'>{product.name}</Card.Title>
                    <Card.Text className='text-center'>
                        {product.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className='text-center'>$ {product.price}</ListGroup.Item>
                    {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item> */}
                    {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
            </Card>
            <div>
                {
                    isCount ?
                        <ItemCount initial={1} stock={10} onAdd={onAdd} />
                        :
                        <>
                            <Link to='/cart'>Ir al carrito  </Link>
                            <Link to='/'>Seguir comprando</Link>
                        </>
                }

            </div>

        </div>
    );
}

export default ItemDetail;