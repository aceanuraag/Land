import React from "react";
import "./../assets/css/custom.css";

const Cta = () => {
  const containerStyle = {
    padding: "20px",
    backgroundColor: "brown",
    backgroundPosition: "center",
    backgroundSize: "cover",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    backgroundImage:
      "url('https://th.bing.com/th/id/R.a4ccea5c4521f42034f6a44ae4811801?rik=oFwykgkakbJhRQ&riu=http%3a%2f%2fmedia.istockphoto.com%2fvectors%2fpanorama-of-foggy-mountain-ridges-vector-id479704900%3fk%3d6%26m%3d479704900%26s%3d170667a%26w%3d0%26h%3dVi9RRQUQptBFEVfMeiT1XXMPO6dAf6dENaNz9ev36tQ%3d&ehk=T2a7kEe3vdjW1tRIFPWBQ37tMKlebPvgkUED1ngJ1BU%3d&risl=&pid=ImgRaw&r=0')",
  };
  return (
    <div className="cta">
      <h1>Don't hesitate to reach Us</h1>
      <form method="post">
        <div>
          <label>Label 1</label>
          <input placeholder="Input 1" />
        </div>
        <div>
          <label>Label 2</label>
          <input placeholder="Input 2" />
        </div>
        <div>
          <label>Label 3</label>
          <input placeholder="Input 3" />
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Cta;
