// Import the React library to create React components
import React from 'react';

// Import a separate CSS file for styling (you can adjust the file name)
import './Footer.css';

// Define a functional component named Footer
const Footer = () => {
  return (
    // Outer container for the entire footer
    <div className="footer-container">
      {/* Inner container for the footer content */}
      <div className='footer'>

        {/* Create a FooterColumn component with the title 'Company' and specific items */}
        <FooterColumn title='Company' items={['Navigate Your Text', 'About Us', 'Careers', 'ESG', 'Investors', 'Newsroom', 'Alumni']} />

        {/* Create a FooterColumn component with the title 'Subsidiaries' and specific items */}
        <FooterColumn title='Subsidiaries' items={['EdgeVerve System', 'Infosys BPM', 'Infosys Consulting', 'Infosys Public Services']} />

        {/* Create a FooterColumn component with the title 'Programs' and specific items */}
        <FooterColumn title='Programs' items={['Infosys Foundation', 'Infosys Foundation USA', 'Infosys Science Foundation', 'Infosys Leadership Institute']} />

        {/* Create a FooterColumn component with the title 'Support' and specific items */}
        <FooterColumn title='Support' items={['Terms of Use', 'Privacy Statements', 'Cookie Policy', 'Site Map', 'Modern Slavery Statements', 'Payment Guide for Suppliers']} />

        {/* Create a FooterColumn component with the title 'Connect with us' and specific items */}
        <FooterColumn title='Connect with us' items={['X', 'f', 'in', 'Youtube']} />
      </div>
    </div>
  );
};

// Define a functional component named FooterColumn that takes title and items as props
const FooterColumn = ({ title, items }) => {
  return (
    // Container for each column in the footer
    <div className='footer-column'>

      {/* Display the title of the column */}
      <h3>{title}</h3>

      {/* Create an unordered list to display items */}
      <ul>
        {/* Map through the items array and create a list item for each item */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Export the Footer component to make it available for use in other files
export default Footer;
