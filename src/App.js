import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {dataOne} from './data.js';
import './App.css';
const App = () => {

  return (
    <div className='d-flex flex-row p-2 m-2 justify-content-around flex-wrap'>
   {dataOne.map((val)=>{
return(
<div className='my-5' key={val.id}>
  <Card  style={{ width: '18rem' }}  >
  <Card.Img variant="top" src={val.image} />
  <Card.Body>
    <Card.Title>{val.title}</Card.Title>
    <Card.Text>
      {val.details}
    </Card.Text>
    <Button variant="primary" onClick={()=>{window.open('https://pixabay.com/images/search/sky/','_blank')}}>Go somewhere</Button>
  </Card.Body>
</Card>
</div>

)
   })}
   
    </div>
  )
}

export default App