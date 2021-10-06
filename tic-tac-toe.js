"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let boxes= document.querySelectorAll('#board > div');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].className = "square";
        boxes[i].addEventListener("click",clickedbox);
    } 
});

let game_arrayx=[];
let game_arrayo=[];

let current_play="1";


function clickedbox(box){
    if (box.target.innerHTML.length==0){
        if (current_play %2 ==0){
            game_arrayx.push(box.target.id);
            console.log(game_arrayx);
            box.target.innerHTML="X";
            box.target.className="square X"
        }
        else{
            game_arrayo.push(box.target.id);
            console.log(game_arrayo);
            box.target.innerHTML="O";
            box.target.className="square O"
        }
    }
    else{
        return;
    }
    current_play++;
}