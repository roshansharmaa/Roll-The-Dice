import React, { useState, useEffect } from "react";
import "./Play.css";
import dice from "../imgs/dice_1.png";
import dice2 from "../imgs/dice_2.png";
import dice3 from "../imgs/dice_3.png";
import dice4 from "../imgs/dice_4.png";
import dice5 from "../imgs/dice_5.png";
import dice6 from "../imgs/dice_6.png";
const Play = () => {
  const [btnval, setbtnval] = useState(false);
  const [score, setscore] = useState(0);
  const [currdice, setcurrdice] = useState(dice);
  const [result, setresult] = useState(false);
  const [randomnumis, setrandomnumis] = useState(false);
  const [errondice, setErrondice] = useState(false);
  const [continewDice, setcontinewDice] = useState(false);

  useEffect(() => {}, [btnval]);
  let value = [1, 2, 3, 4, 5, 6];//isse le raha hu
  let randomgen = () => {
     
    if (!btnval) {
      setErrondice(true);//ye 
      setTimeout(() => {
        setErrondice(false);
      }, 1500);
      return;
    } else {


      continewDice?console.log('count true'):console.log('count false');;
      
      let dices = [dice, dice2, dice3, dice4, dice5, dice6];
      console.log(dices.length,'fds');
      let randval = Math.floor(Math.random() * dices.length);//1 to6 ok
      let finalval = dices[randval];
      console.log(randval,finalval,'im');
      console.log(finalval,randval,'final');
      setcurrdice(finalval);
      setcontinewDice(true);
      console.log(continewDice,'i am');
      let forscore = randval + 1;//dispy hai
      setrandomnumis(forscore);
      if (btnval == forscore) {//score btnvaluekah hai random 0 se st hia ki 1 se 0 tu faltu me +1 kiya hai
        setscore(score + forscore);
        setresult("You Won");
      } else {
        setscore(score - btnval);
        setresult("You Loose");
      }
    }
  };
  let handleonnewgame = () => {
    setbtnval(false);
    setresult(null);
    setcurrdice(dice);
  };
  let handelreset = () => {
    setscore(0);
  };
  return (
    <>
      <div className="centerldiv">
        <nav>
          <div className="score">
            <h1>{score}</h1>
            <p>SCORE</p>
          </div>
          <div className="new">
            <div className="btns xp">
              {value.map((val, i ) => (//ye pehel value or dusra index leta hai? ha
                <button
                  key={i}//index key kya hau  sepcific key of speciffic val lik class ya id
                  className="btn"
                  onClick={() => {
                    setbtnval(val);
                    setcontinewDice(false)
                    console.log(continewDice,'im 2');
                  }}
                >
                  {val}  
                </button>
              ))}
            </div>
            {errondice ? (
              <>
                <h4 className="shake">Select a Number</h4>
              </>
            ) : (
              <>
                <h4>Select a Number</h4>
              </>
            )}
          </div>
        </nav>
        <div className="playtime">
          <div className="main_img">
            <img
              src={currdice}
              alt={`Dice`}
              onClick={randomgen}
              className="image"
            />
          </div>
          <div className="game_btn">
            <button onClick={handleonnewgame}>New Game</button>
            <button onClick={handelreset}>Reset Score</button>
          </div>
        </div>
      </div>
      <div className="result-Section">
        {btnval ? (
          <div className="result">
            {" "}
            <h3>Your choice: {btnval}</h3>
          </div>
        ) : (
          <></>
        )}
        {!result ? (
          <></>
        ) : (
          <div className="result2">
            <h1>{result}</h1> <h3>Dice: {randomnumis}</h3>{" "}
          </div>
        )}
      </div>
    </>
  );
};
export default Play;

//acha smjha mai valur or index ka use akne ke bad set kiya hai jo random value ho ha smarty boy
// smarty boysmarty boysmarty boyt but index 0 se satrt ho hai tu -1 kiya random value 1 se  chal log krke dikata hu vo alg hai disply ke liye hai
 