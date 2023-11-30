import React from 'react';
import Button from 'react-bootstrap/Button';
import './Introduction.css'

const Introduction = () => {
  return (
    <>
    
    <div class="background fullCoverImg ai-powered-core-img dnf-digital-capabilities-lead"></div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <h2 class="home-second-heading white-color mb20 mb-xs-10">Digital Core Capabilities</h2>
          <p class="fullpage-desc white-color"> <em>Build vital capabilities to deliver digital outcomes.</em></p>
          <Button variant="warning" class="mb20 mb-xs-10 mt50 mt-xs-0 animateThird">Learn More</Button><br/>
          <br/>
          <div class="row hidden-xs">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-xs-20">
              <p class="fullpage-second-title">Case studies</p>
              <h3 class="fullpage-second-desc white-color">Pfizer's journey towards increased productivity, powered by AI</h3>
              <p class="fullpage-second-more text-uppercase black-color mt20"> <a href="/navigate-your-next/digital-capabilities/insight/intelligent-automation.html" class="view-more white-color" aria-label="Read about Pfizer's journey towards increased productivity, powered by AI" title="View">View</a></p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p class="fullpage-second-title">&nbsp;</p>
              <h3 class="fullpage-second-desc white-color">A government that contributes to the joy of parenting</h3>
              <p class="fullpage-second-more text-uppercase black-color mt20"> <a href="/navigate-your-next/digital-capabilities/accelerate/born-smart.html" class="view-more white-color" aria-label="Read about A government that contributes to the joy of parenting" title="View">View</a></p>
            </div>
          </div>
        </div>
        </>
    // <>
    //   <h5>Acetians.com</h5>
    //   <br/>
    //   <h2 class="home-second-heading white-color mb20 mb-xs-10">Digital Core Capabilities</h2>
    //   <p class="fullpage-desc white-color"> <em>Build vital capabilities to deliver digital outcomes.</em></p>
    //   <Button variant="warning">Learn More</Button>{' '} 
    // </>
  )
}

export default Introduction
