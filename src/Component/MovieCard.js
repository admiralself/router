import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useParams  } from 'react-router-dom';

const RunCrd = ({ movie: { titre, image, synopsis, id } }) => {
  
    
    return (

        
        <Card style={{ width: '18rem' }} className='Card' >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{titre}</Card.Title>
                <Card.Text>
                    {synopsis}
                </Card.Text>
                <Link to={`/Trailer/${id}`}>
                    <button >Trailer</button>
                </Link>
            </Card.Body>



        </Card>
    )
}

export default RunCrd 