import React from 'react';
import './Footer.css'; // Import a separate CSS file for styling (you can adjust the file name)

const Footer = () => {
  // const footer-container ={
  //   padding: '30px',
  //   backgroundColor: 'white',
  //   height: 'auto',
  // }
  return (
    <div className="footer-container">
      <div className='footer'>
        <FooterColumn title='Company' items={['Navigate Your Text', 'About Us', 'Careers', 'ESG', 'Investors', 'Newsroom', 'Alumni']} />
        <FooterColumn title='Subsidiaries' items={['EdgeVerve System', 'Infosys BPM', 'Infosys Consulting', 'Infosys Public Services']} />
        <FooterColumn title='Programs' items={['Infosys Foundation', 'Infosys Foundation USA', 'Infosys Science Foundation', 'Infosys Leadership Institute']} />
        <FooterColumn title='Support' items={['Terms of Use', 'Privacy Statements', 'Cookie Policy', 'Site Map', 'Modern Slavery Statements', 'Payment Guide for Suppliers']} />
        <FooterColumn title='Connect with us' items={['X', 'f', 'in', 'Youtube']} />
      </div>
    </div>
  );
};

const FooterColumn = ({ title, items }) => {
  return (
    <div className='footer-column'>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
