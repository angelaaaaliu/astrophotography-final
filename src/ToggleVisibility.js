import { useState, useEffect } from "react";


export default function ToggleVisibility({ children }) {
    const [show, setShow] = useState();

    function toggleShow() {
        setShow(!show);
    }
    
    return (
      <div className="component-container">
        {show && children}
      </div>
    );
  }