import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const containerStyle = {
    borderRadius:'10px',
    padding:'20px',
    backgroundColor:'orange',
    backgroundPosition:'center',
    backgroundSize:'cover',
    height : '100px'
  }

  const ulStyle={
    display: 'flex',
    listStyle :'none',
    justifyContent: 'space-between',
  }

  return (
    <div className='footer' style={containerStyle}>
     
      <ul style={ulStyle}>
        <li>gh</li>
        <li>gh</li>
        <li>gh</li>
        <li>gh</li>
        <li>gh</li>
        <li>gh</li>
        <li>gh</li>
        <li>gh</li>
      </ul>
      
    </div>
  )
}

export default Footer
