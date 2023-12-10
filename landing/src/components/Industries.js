import React from "react";
import './Industries.css';

const Industries = () => {
  return (
    <div className="w3-container w3-teal">
      <h1 title="investors" style={{ marginLeft: "100vh" }}> Investors </h1>
      <p className="sub-title" style={{ marginLeft: "70vh" }}>
        Maximizing shareholder value with good corporate governance
      </p>

      <div>
        <ul style={{ display: "flex", justifyContent: "space-around", padding: "10px 0" }}>
          <li className="w3-container" style={{ listStyle: "none" }}>
          <img
  src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/annual-report-2023-mob.jpg"
  alt="Image"
  className="zoomable-image"
  style={{ maxWidth: "100%", height: "auto" }}
/>

          </li>
          <li className="w3-container" style={{ listStyle: "none"}}>
            <h1 style={{margin:"13px "}}>Investor central</h1>
            <ul style={{ listStyle: "none" }}>
              <InvestorColumn title='Result' items={['Second Quarter FY24']} />
              <hr className="divider" />
              <InvestorColumn title='Archived webcast' items={['Q2 FY24 Press Conference']} />
              <hr className="divider" />
              <li>
                <h5>Event</h5>
                <h4>The 42<sup>th</sup> Annual General Meeting</h4>
              </li>
              <hr className="divider" />
              <button>VIEW ALL</button>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

const InvestorColumn = ({ title, items }) => {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ listStyle: "none", display: "flex" }}>
            <h4>{item}</h4>
          </li>
        ))}
      </ul>
    </div> 
  );
};

export default Industries;
