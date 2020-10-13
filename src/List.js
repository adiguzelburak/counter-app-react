import React, { useState } from "react";
import "./design.css";
import Navbar from "./Navbar";
const List = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [tot, setTot] = useState(0);
  const [isShowCount1, setIsShowCount1] = useState(true);
  const [isShowCount2, setIsShowCount2] = useState(true);
  const [isShowCount3, setIsShowCount3] = useState(true);
  const [isShowCount4, setIsShowCount4] = useState(true);

  function res() {
    setCount(0);
    setCount2(0);
    setCount3(0);
    setCount4(0);
  }

  function handleincreaseCount1() {
    setCount(count + 1);
    if (count === 0) {
      setTot(tot + 1);
    }
  }
  function handleDecreaseCount1() {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count === 1) {
      setTot(tot - 1);
    }
  }

  function handleincreaseCount2() {
    setCount2(count2 + 1);
    if (count2 === 0) {
      setTot(tot + 1);
    }
  }
  function handleDecreaseCount2() {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }
    if (count2 === 1) {
      setTot(tot - 1);
    }
  }

  function handleincreaseCount3() {
    setCount3(count3 + 1);
    if (count3 === 0) {
      setTot(tot + 1);
    }
  }
  function handleDecreaseCount3() {
    if (count3 > 0) {
      setCount3(count3 - 1);
    }
    if (count3 === 1) {
      setTot(tot - 1);
    }
  }
  function handleincreaseCount4() {
    setCount4(count4 + 1);
    if (count4 === 0) {
      setTot(tot + 1);
    }
  }
  function handleDecreaseCount4() {
    if (count4 > 0) {
      setCount4(count4 - 1);
    }
    if (count4 === 1) {
      setTot(tot - 1);
    }
  }

  return (
    <div>
      <Navbar tot={tot} />

      <div className="manager">
        <i className="fas fa-sync" id="reflesh" onClick={() => res()}></i>
        <i
          className="fas fa-recycle"
          onClick={() => window.location.reload()}
          id="reset"
        ></i>
      </div>

      <div className="allProducts">
        {isShowCount1 && (
          <div className="product" id="products">
            <div id="sayac">{count}</div>
            <i
              className="fas fa-plus-square"
              id="add"
              onClick={handleincreaseCount1}
            ></i>
            <i
              className="fas fa-minus-square"
              id="subtraction"
              onClick={handleDecreaseCount1}
            ></i>
            <i
              className="far fa-trash-alt"
              id="trash"
              onClick={() => {
                setIsShowCount1(false);
                if (count !== 0) {
                  setTot(tot - 1);
                }
              }}
            ></i>
          </div>
        )}
        {isShowCount2 && (
          <div className="product2" id="products2">
            <div id="sayac">{count2}</div>
            <i
              className="fas fa-plus-square"
              id="add"
              onClick={handleincreaseCount2}
            ></i>
            <i
              className="fas fa-minus-square"
              id="subtraction"
              onClick={handleDecreaseCount2}
            ></i>
            <i
              className="far fa-trash-alt"
              id="trash"
              onClick={() => {
                setIsShowCount2(false);
                if (count !== 0) {
                  setTot(tot - 1);
                }
              }}
            ></i>
          </div>
        )}
        {isShowCount3 && (
          <div className="product3" id="products3">
            <div id="sayac">{count3}</div>
            <i
              className="fas fa-plus-square"
              id="add"
              onClick={handleincreaseCount3}
            ></i>
            <i
              className="fas fa-minus-square"
              id="subtraction"
              onClick={handleDecreaseCount3}
            ></i>
            <i
              className="far fa-trash-alt"
              id="trash"
              onClick={() => {
                setIsShowCount3(false);
                if (count !== 0) {
                  setTot(tot - 1);
                }
              }}
            ></i>
          </div>
        )}
        {isShowCount4 && (
          <div className="product4" id="products4">
            <div id="sayac">{count4}</div>
            <i
              className="fas fa-plus-square"
              id="add"
              onClick={handleincreaseCount4}
            ></i>
            <i
              className="fas fa-minus-square"
              id="subtraction"
              onClick={handleDecreaseCount4}
            ></i>
            <i
              className="far fa-trash-alt"
              id="trash"
              onClick={() => {
                setIsShowCount4(false);
                if (count !== 0) {
                  setTot(tot - 1);
                }
              }}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};
export default List;
