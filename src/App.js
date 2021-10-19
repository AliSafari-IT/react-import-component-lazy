import React, { useState } from "react";
import "./styles.css";
function App() {
  const [Com, setCom] = useState(null);
  const [Show, setShow] = useState(false);

  const handleClick = () => {
    import("./A.js").then((c) => {
      //console.log(c.default)
      setCom(c.default);
      setShow((prev) => !prev);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Load</button>
      {/* <Comp /> */}
      {Show && Com}
    </div>
  );
}

export default App;
