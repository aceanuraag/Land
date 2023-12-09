import React from "react";
// import Link from "react-bootstrap/Link"

const Industries = () => {
  return (
    <div class="w3-container w3-teal">
    
      <h1 title="investors" style={{marginLeft:"100vh"}}> Investors </h1>
      <p className="sub-title" style={{marginLeft:"70vh"}}>
        Maximizing shareholder value with good corporate governance
      </p>
     
      <div>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li class="w3-container" style={{ listStyle: "none" }}>
          <img src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/annual-report-2023-mob.jpg" class="w3-round" alt="Norway"/>
          </li>
          <li class="w3-container" style={{ listStyle: "none" }}>
            <h1>Investor central</h1>
            <ul style={{ listStyle: "none" }}>
              <li>
                <h5>Results</h5>
                <h4>Second Quarter FY24</h4>
              </li>
              <h6>_______________________________________________________</h6>
              <li>
                <h5>Archived webcast</h5>
                <h4>Q2 FY24 Press Conference</h4>
              </li>
              <h6>_______________________________________________________</h6>
              <li>
                <h5>Event</h5>
                <h4>The 42<sup>th</sup> Annual General Meeting</h4>
              </li>  
              <h6>_______________________________________________________</h6> 
              <button>VIEW ALL</button>       
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Industries;
