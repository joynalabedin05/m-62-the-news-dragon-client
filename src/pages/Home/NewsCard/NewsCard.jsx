import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';


const NewsCard = ({news}) => {
    const {_id,title, details, image_url,author} = news;
    return (
        <Card className=" mb-4">
        <Card.Header className='d-flex'>
        <Image style={{height:'40px'}} src={author.img} roundedCircle />
        <div>
            <p>{author?.name}</p>
            <p><small>{moment(author?.published_date).format('MMMM Do YYYY, h:mm:ss a')}</small></p>
        </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? <>{details}</> : <>{details.slice(0,250)}... <Link to={`/news/${_id}`}>Read more</Link> </>}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default NewsCard;