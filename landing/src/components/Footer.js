import React from 'react';

const Footer = () => {
  const containerStyle = {
    padding:'30px',
    backgroundColor:'white',
    backgroundPosition:'center',
    backgroundSize:'cover',
    height : 'auto'
  }

  const ulStyle={
    fontSize:'30px',
    fontWeight:'bold',
    display: 'flex',
    listStyle :'none',
    justifyContent: 'space-between',
  }

  return (
    <div className='footer' style={containerStyle}>
     
      <ul style={ulStyle}>
        <li style={{backgroundColor:"white"}}>Company
          <ul style={{listStyle:'none', marginLeft:'10px', fontSize:'18px', }}>
            <li>Navigate Your Text</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>ESG</li>
            <li>Investors</li>
            <li>Newsroom</li>
            <li>Alumni</li>
          </ul>
        </li>
        <li>Subsidiaries
          <ul style={{listStyle:'none', margin:'0', fontSize:'18px'}}>
            <li>EdgeVerve System</li>
            <li>Infosys BPM</li>
            <li>Infosys Consulting</li>
            <li>Infosys Public Services</li>
          </ul>
        </li>
        <li>Programs
          <ul style={{listStyle:'none', margin:'0', fontSize:'18px'}}>
            <li>Infosys Foundation</li>
            <li>Infosys Foundation USA</li>
            <li>Infosys Science Foundation</li>
            <li>Infosys Leadership Institute</li>
          </ul>
        </li>
        <li>Support
          <ul style={{listStyle:'none', margin:'0', fontSize:'18px'}}>
            <li>Terms of Use</li>
            <li>Privacy Statements</li>
            <li>Cookie Policy</li>
            <li>Site Map</li>
            <li>Modern Slavery Statements</li>
            <li>Payment Guide for Suppliers</li>
          </ul>
        </li>
        <li>Connect with us
          <ul style={{listStyle:'none', margin:'0', fontSize:'18px', display:"flex", justifyContent:'space-between'}}>
            <li>X</li>
            <li>f</li>
            <li>in</li>
            <li>Youtube</li>
          </ul>
        </li>
      </ul> 
    </div>
  )
}

export default Footer
