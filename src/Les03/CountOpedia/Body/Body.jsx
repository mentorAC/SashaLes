import React, { useState } from "react";
import defence from "../../../images/defend.png";
import attack from "../../../images/attack.png";
import style from "./Body.module.css";
export function Body() {

    const[counter, changeCounter] = useState(0);
    //якщо counter> 10 - виграємо
    //якщо counter< 10 - програємо

    let handlerAttack = ()=> changeCounter(counter+(Math.floor(Math.random()*10))) 
    let handleDefence = () => changeCounter(counter-(Math.floor(Math.random()*10)))
    let randomPlay = () => changeCounter(counter + (Math.floor(Math.random()*20)-10));
    let reset = () => changeCounter(0);
  return (
    <div className="text-center">
      <div className="row">
        <h1>Game Score: ...</h1>
      </div>
      <div className="row">
        <p>You win at +10 points and lose at -10 points!</p>
        <p>Last Play:</p>
      </div>
      <div className="row">
        <h2 className="mb-5">Game Status: {counter}</h2>
        <div className="col">
          <button className="btn btn-outline-success" onClick={handlerAttack}>
        <img src={attack}  className={style.attack}></img>
          </button>
        </div>
        <div className="col">
          <button className="btn btn-outline-danger" onClick={handleDefence}>
            <img src={defence} className={style.defence}></img>
          </button>
        </div>
      </div>
      <div className="row text-center">
        <button className={"btn btn-secondary mt-2 w-100 "+style.inlineBlock} onClick={randomPlay} >Random Play</button>
        <br />
        <button className="btn btn-warning mt-2 w-100" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
