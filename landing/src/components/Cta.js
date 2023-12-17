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
      <form method="post" noValidate validated={validated} onSubmit={handleSubmit}>
        {[
          { label: "Name", type: "text", placeholder: "Name", required: true },
          { label: "Email", type: "email", placeholder: "Email", required: true },
          { label: "Password", type: "password", placeholder: "Password", required: true },
          { label: "Mobile", type: "tel", placeholder: "Mobile No", required: true },
        ].map((field, index) => (
          <div key={index} className="mb-3">
            <label className="form-label">{field.label}</label><br/>
            <input type={field.type} placeholder={field.placeholder} required={field.required} />
          </div>
        ))}
        <button className="w3-btn w3-round-large w3-black" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Cta;
