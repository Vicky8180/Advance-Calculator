import React, { useCallback, useState } from "react";
import "./Calculate.css"
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

const Calculate = () => {
  var res;

  const [taking, setTaking] = useState("");
  const [previou, setPriviou] = useState("");
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();




  function numbers(props) {
    const temp = props;
    setTaking(temp);
    var tt = previou.concat(temp);
    setPriviou(tt);
    console.log(previou)

  }
  function plus() {
    setFirst(previou);
    setPriviou("");
    setTaking("");
    setSecond("+");


  }
  function minus() {
    setFirst(previou);
    setPriviou("");
    setTaking("");
    setSecond("-");


  }
  function multiply() {
    setFirst(previou);
    setPriviou("");
    setTaking("");
    setSecond("*");


  }
  function div() {
    setFirst(previou);
    setPriviou("");
    setTaking("");
    setSecond("/");


  }
  function percent() {
    setFirst(previou);
    setPriviou("");
    setTaking("");
    setSecond("%");


  }
  function cancel() {
    setFirst(0);
    setPriviou("");
    setTaking("");
    setSecond("!");
  }

  function erase() {

    let temp2 = previou.substring(0, previou.length - 1);
    setFirst(temp2);
    setPriviou(first);
    setTaking("");
    setSecond("@");
  }
  function equal() {
    let a = parseInt(previou);
    let b = parseInt(first);
    if (second == "*") {
      res = a * b;
    } if (second == "+") {
      res = a + b;
    }
    if (second == "/") {
      res = b / a;
    } if (second == "-") {
      res = b - a;
    }
    if (second == "%") {
      let y = b / a;
      res = y * 100;
    }
    if (second === "!") {
      setFirst("");
      setPriviou("");
      setTaking("");
      res = 0;
    }

    setPriviou(res);
    setSecond("")
    console.log(res);
  }
  return <>

    <div className="main1">
      <div className="display">
        <div className="displayinput">
          <input className="box" value={previou}></input>
        </div>

      </div>

      <div className="inputfiled">

        <div className="buttons">
          <div className="containerer">
            {/* <div className="row row-cols-3 row-cols-lg-4"> */}
            <div className="first">
              <div className="coll1">
                <button className="jh" onClick={cancel}>
                  CRr
                </button>
              </div>
              <div className="coll">
                <button className="jh" onClick={() => { numbers(7) }}>
                  7
                </button>
              </div>
              <div className="coll">  <button className="jh" onClick={() => { numbers(4) }}>
                4
              </button></div>
              <div className="coll">  <button className="jh" onClick={() => { numbers(1) }}>
                1
              </button></div>
              <div className="coll">
                <button className="jh" onClick={() => { numbers(0) }}>
                  0
                </button>
              </div>
            </div>
            <div className="first">
              <div className="coll">  <button className="jh" onClick={erase}>
                CR
              </button></div>
              <div className="coll">  <button className="jh" onClick={() => { numbers(8) }}>
                8
              </button></div>
              <div className="coll">  <button className="jh" onClick={() => { numbers(5) }}>
                5
              </button></div>
              <div className="coll">  <button className="jh" onClick={() => { numbers(2) }}>
                2
              </button></div>
              <div className="coll">  <button className="jh" onClick={() => { numbers(0) }}>
                0
              </button></div>
            </div>
            <div className="first">
              <div className="coll">  <button className="jh" onClick={percent}>
                %
              </button></div>
              <div className="coll">  <button className="jh" onClick={() => { numbers(9) }}>
                9
              </button></div>
              <div className="coll">  <button className="jh" onClick={() => { numbers(6) }}>
                6
              </button></div>
              <div className="coll">  <button className="jh" onClick={() => { numbers(3) }}>
                3
              </button></div>
              <div className="coll">  <button className="jh" onClick={() => { numbers(0) }}>
                .
              </button></div>
            </div>
            <div className="first">
              <div className="colll">  <button className="jh" onClick={minus}>
                -
              </button></div>
              <div className="colll">  <button className="jh" onClick={plus}>
                +
              </button></div>
              <div className="colll">  <button className="jh" onClick={multiply}>
                *
              </button></div>
              <div className="colll">  <button className="jh" onClick={div}>
                /
              </button></div>
              <div className="collll">  <button className="jh" onClick={equal}>
                =
              </button></div>


            </div>
          </div>
        </div>
      </div>

    </div>
  </>
}
export default Calculate;