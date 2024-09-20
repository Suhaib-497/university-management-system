import React, { useState } from "react";
import { useContext } from "react";

const showContext = React.createContext();
const showUpdateContext = React.createContext();

export function useshowContext(){
    return useContext(showContext)
}

export function useshowUpdateContext(){
    return useContext(showUpdateContext);
}


const ShowContext = ({ children }) => {
  const [show, setShow] = useState(false);

  

  function toggleShow() {
    setShow((prevShow) => !prevShow);
  }
  return (
    <showContext.Provider value={show}>
      <showUpdateContext>
        {children}

      </showUpdateContext>
    </showContext.Provider>
  );
};

export default ShowContext;
