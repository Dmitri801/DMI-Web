import React from "react";

function Backdrop({ closeSideNav }) {
  return <div onClick={closeSideNav} className="backdrop" />;
}

export default Backdrop;
