import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import webdev from './webdevelopment.jpg'
import videogames from './vidoegames.jpg'
import python from './python.jpg'
import ai from './AI.jpg'
import dm from './digitalmarketing.jpg'
import design from './UIUX.jpg'
const CoursCard = () => {
    return (
        <div className="Cards">
            <div className="Cardslist1">
            <Card style={{ width: '18rem',backgroundColor:'#499e6c'  }}>
  <Card.Img style={{height:'170px'}} variant="top" src={webdev} />
  <Card.Body>
    <Card.Title>Web Development</Card.Title>
    <Button variant="primary">About</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', backgroundColor:'#499e6c'  }}>
  <Card.Img style={{height:'170px'}} variant="top" src={videogames} />
  <Card.Body>
    <Card.Title>Creating Video Games</Card.Title>
    <Button variant="primary">About</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',backgroundColor:'#499e6c' }}>
  <Card.Img style={{height:'170px'}} variant="top" src={python} />
  <Card.Body>
    <Card.Title>Learning Python</Card.Title>
    <Button variant="primary">About</Button>
  </Card.Body>
</Card>
</div>
<div className="Cardslist2">
<Card style={{ width: '18rem', backgroundColor:'#499e6c' }}>
  <Card.Img style={{height:'170px'}} variant="top" src={ai} />
  <Card.Body>
    <Card.Title>Artificial intelligence</Card.Title>
    <Button variant="primary">About</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', backgroundColor:'#499e6c'  }}>
  <Card.Img style={{height:'170px'}} variant="top" src={dm} />
  <Card.Body>
    <Card.Title>Digital Marketing</Card.Title>
    <Button variant="primary">About</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',backgroundColor:'#499e6c'  }}>
  <Card.Img style={{height:'170px'}} variant="top" src={design} />
  <Card.Body>
    <Card.Title>UI+UX Design</Card.Title>
    <Button variant="primary">About</Button>
  </Card.Body>
</Card>
</div>
        </div>
    )
}

export default CoursCard
