import React, { useState } from "react";
import "./design.css";
function List() {
  const zero = 0;
  const [count, setCount] = useState(zero);
  const [count2, setCount2] = useState(zero);
  const [count3, setCount3] = useState(zero);
  const [count4, setCount4] = useState(zero);

  function res(){
    setCount(0);
    setCount2(0);
    setCount3(0);
    setCount4(0);
  } 


  return (
    <div>
      <div className="manager">
        <i class="fas fa-sync" id="reflesh" onClick={() => res()}></i>
        <i
          class="fas fa-recycle"
          onClick={() => window.location.reload()}
          id="reset"
          
        ></i>
      </div>

      <div className="allProducts">
        <div className="product" id="products">
          <div id="sayac">{count}</div>
          <i
            class="fas fa-plus-square"
            id="add"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          ></i>
          <i
            class="fas fa-minus-square"
            id="subtraction"
            onClick={() => setCount((prevCount) => prevCount - 1)}
          ></i>
          <i
            class="far fa-trash-alt"
            id="trash"
            onClick={() => document.getElementById("products").remove()}
          ></i>
        </div>
        <div className="product2" id="products2">
          <div id="sayac">{count2}</div>
          <i
            class="fas fa-plus-square"
            id="add"
            onClick={() => setCount2((prevCount) => prevCount + 1)}
          ></i>
          <i
            class="fas fa-minus-square"
            id="subtraction"
            onClick={() => setCount2((prevCount) => prevCount - 1)}
          ></i>
          <i
            class="far fa-trash-alt"
            id="trash"
            onClick={() => document.getElementById("products2").remove()}
          ></i>
        </div>
        <div className="product3" id="products3">
          <div id="sayac">{count3}</div>
          <i
            class="fas fa-plus-square"
            id="add"
            onClick={() => setCount3((prevCount) => prevCount + 1)}
          ></i>
          <i
            class="fas fa-minus-square"
            id="subtraction"
            onClick={() => setCount3((prevCount) => prevCount - 1)}
          ></i>
          <i
            class="far fa-trash-alt"
            id="trash"
            onClick={() => document.getElementById("products3").remove()}
          ></i>
        </div>
        <div className="product4" id="products4">
          <div id="sayac">{count4}</div>
          <i
            class="fas fa-plus-square"
            id="add"
            onClick={() => setCount4((prevCount) => prevCount + 1)}
          ></i>
          <i
            class="fas fa-minus-square"
            id="subtraction"
            onClick={() => setCount4((prevCount) => prevCount - 1)}
          ></i>
          <i
            class="far fa-trash-alt"
            id="trash"
            onClick={() => document.getElementById("products4").remove()}
          ></i>
        </div>
      </div>
    </div>
  );
}
export default List;

/* { 
    <>
Count : {count}
    <button onClick={()=> setCount(0)}>Reset</button>
    <button onClick={()=>setCount(prevCount=>prevCount -1)}>-</button>
    <button onClick={()=>setCount(prevCount=>prevCount +1)}>+</button>

    </> }*/
