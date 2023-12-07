import React, { useState } from "react";
import "./../assets/css/custom.css";

const Cta = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="cta container">
      <h1>Don't hesitate to reach Us</h1>
      <form
        method="post"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Name</label><br/>
          <input type="text"  placeholder="Name" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label><br/>
          <input type="email" className="form" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label><br/>
          <input type="password"  placeholder="Password" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile</label><br/>
          <input type="tel"  placeholder="Mobile No" required />
        </div>
        <button className="w3-btn w3-round-large w3-black" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Cta;
