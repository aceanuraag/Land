import React from 'react';
import {Container} from 'react-bootstrap'

const Carr = () => {
  const containerStyle = {
    borderRadius:'10px',
    padding:'20px',
    backgroundColor:'orange',
    backgroundPosition:'center',
    backgroundSize:'cover',
  }
  return (
    <div className='carousel-box-container'>
      <Container style={containerStyle}>
      <h1>This is Carr Pages</h1>
      </Container>
    </div>
  )
}

export default Carr
