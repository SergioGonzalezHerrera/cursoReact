import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const Item = ({ producto }) => {
    return (
        <Card style={{ width: '18rem' }} className="m-3 text-center border-card-white" bg="dark" text="white">
            <Card.Img variant="top" src={producto.picture} />
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush bg-dark border-dark text-white border-white">
                <ListGroup.Item className="bg-dark border-dark text-white border-white">Disponibles: {producto.stock}</ListGroup.Item>
                <ListGroup.Item className="bg-dark border-dark text-white border-white">Precio: {producto.price}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Link to={`/detalle/${producto.id}`}>
                    <button className="btn btn-outline-white w-100 text-white border-white">Detalle</button>
                </Link>
            </Card.Body>
        </Card>
    )
}
