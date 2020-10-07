import React,{useState} from "react";
import count from "./List";
function Navbar() {
  
  const [total,setTotal] = useState(0);
  
  
   if (count > 0){
    setTotal((response) => response + 1)
   }


  return (
    <div className="basket">
      <i class="fas fa-shopping-cart fa-2x"></i>
      <div className="counter">{total}</div>
      <div className="text">Items</div>
    </div>
  );
}

export default Navbar;
