import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
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
      <h1>This is Footer Pages</h1>
      </Container>
    </div>
  )
}

export default Footer
