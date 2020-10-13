import React from "react";

function Navbar(props) {
  return (
    <div className="basket">
      <i className="fas fa-shopping-cart fa-2x"></i>
  <div className="counter">{props.tot}</div>
      <div className="text">Items</div>
    </div>
  );
}

export default Navbar;
