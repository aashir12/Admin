import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="lftHead">
          <h3>Free Trial | 2days Left</h3>
          <h4> extend free Trial</h4>
        </div>
        <div className="rftHeadLogo">
          <FaRegUserCircle />
        </div>
      </div>
    </>
  );
}

export default Header