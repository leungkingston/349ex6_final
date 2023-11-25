import { useState } from 'react';
let first=-1;
let second=-1;
let result=0;
var opLast = false;
var opBool = false;
var plusBool = false;
var minusBool = false;
var multBool = false;
var divBool = false;


function Button({ value, onSquareClick, btype }) {
  return (
    <button class={btype} onClick={onSquareClick}>
      {value}
    </button>
  );
}
function Display(){
    return <textarea id="textbox" type="text"></textarea>
}

export default function Panel() {
  function handleClick(i) {
    const text = document.getElementById('textbox');
    if (Number.isInteger(i)) {
        if (opLast){
            text.value = '';
            opLast=false;
        }
        text.value += i;
    }
    else if(i == '+' || i == '-' || i == 'x' || i == '/'){
        const text = document.getElementById('textbox');
        if(opLast&&opBool){
            text.value = text.value.slice(0,-1);
            plusBool = false;
            minusBool = false;
            multBool = false;
            divBool = false;
            opBool=true;
            opLast=true;
            first = text.value;
            switch (i) {
                case '+':
                    plusBool = true;
                    break;
                case '-':
                    minusBool = true;
                    break;
                case 'x':
                    multBool = true;
                    break;
                case '/':
                    divBool = true;
                    break;
            }
            text.value += i;
        }
        if (!opBool){
            opBool=true;
            opLast=true;
            first = text.value;
            switch (i) {
                case '+':
                    plusBool = true;
                    break;
                case '-':
                    minusBool = true;
                    break;
                case 'x':
                    multBool = true;
                    break;
                case '/':
                    divBool = true;
                    break;
            }
            text.value += i;
        }
    }
    else if(i == 'C'){
        opLast = false;
        opBool = false;
        plusBool = false;
        minusBool = false;
        multBool = false;
        divBool = false;
        const text = document.getElementById('textbox');
        text.value = '';
    }
    else if(i == '='){
        const text = document.getElementById('textbox');
        if(opBool&&!opLast){
            second=text.value;
            if(second!=-1){
                if (plusBool){
                    result = +first + +second;
                }
                else if(minusBool){
                    result = first - second;
                }
                else if(multBool){
                    result = first * second;
                }
                else if(divBool){
                    result = first / second;
                }
                text.value = result;
            }
        }
        opLast = false;
        opBool = false;
        plusBool = false;
        minusBool = false;
        multBool = false;
        divBool = false;
        first=-1;
        second=-1;
    }

  }

  //const winner = calculateWinner(squares);
   let status;
//   if (winner) {
//     status = 'Winner: ' + winner;
//   } else {
//     status = 'Next player: ' + (xIsNext ? 'X' : 'O');
//   }

  return (
    <>
    <div class="background">
      <Display />
      <div className="board-row">
        <Button value={7} onSquareClick={() => handleClick(7)} btype={"num"} />
        <Button value={8} onSquareClick={() => handleClick(8)} btype={"num"} />
        <Button value={9} onSquareClick={() => handleClick(9)} btype={"num"} />
        <Button value={'+'} onSquareClick={() => handleClick('+')} btype={"op"} />
      </div>
      <div className="board-row">
        <Button value={4} onSquareClick={() => handleClick(4)} btype={"num"} />
        <Button value={5} onSquareClick={() => handleClick(5)} btype={"num"} />
        <Button value={6} onSquareClick={() => handleClick(6)} btype={"num"} />
        <Button value={'-'} onSquareClick={() => handleClick('-')} btype={"op"} />
      </div>
      <div className="board-row">
        <Button value={1} onSquareClick={() => handleClick(1)} btype={"num"} />
        <Button value={2} onSquareClick={() => handleClick(2)} btype={"num"} />
        <Button value={3} onSquareClick={() => handleClick(3)} btype={"num"} />
        <Button value={'x'} onSquareClick={() => handleClick('x')} btype={"op"} />
      </div>
      <div className="board-row">
        <Button value={'C'} onSquareClick={() => handleClick('C')} btype={"clear"} />
        <Button value={0} onSquareClick={() => handleClick(0)} btype={"num"} />
        <Button value={'='} onSquareClick={() => handleClick('=')} btype={"op"} />
        <Button value={'/'} onSquareClick={() => handleClick('/')} btype={"op"} />
      </div>
    </div>
    </>
  );
}
