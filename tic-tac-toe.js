"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let boxes= document.querySelectorAll('#board > div');

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].className = "square";

        boxes[i].addEventListener('mouseover', function(e) {
            e.target.classList.add('hover');
          });
          
        boxes[i].addEventListener('mouseout', function(e) {
            e.target.classList.remove('hover');
          });
    } 

    boxes.forEach((box,index) =>
    {
        box.addEventListener('click', () => clickedbox(box,index));
    });


    let game_arrayx=[];
    let game_arrayo=[];
    let current_play="0";
    let game_play=true;
    let winning_rows=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    

function clickedbox(box,index){
    if (box.innerHTML.length==0 && game_play){
        if (current_play %2 ==0){
            game_arrayx.push(index);
            box.innerHTML="X";
            box.className="square X"
        }
        else{
            game_arrayo.push(index);
            box.innerHTML="O";
            box.className="square O"
        }
    }
    else{
        return;
    }
    
    current_play++;
    whoWon(game_arrayx,"X");
    whoWon(game_arrayo,"O");
    
    if (current_play==9 && game_play==true){
        let winner_name= document.querySelector('#status');
        winner_name.innerHTML="";
        winner_name.innerHTML += '\nThere is a tie!';
        winner_name.className=" you-won";
    }
}

function whoWon(game_array,play){
        for (let i=0;i<winning_rows.length;i++){
            let n=0;

            for (let m=0;m < winning_rows[i].length; m++){
                if (game_array.indexOf(winning_rows[i][m]) != -1){
                    n++;
                }
                if (n == 3){
                    game_play=false;
                    displaywin(play);
                }
            }
        }
    }

    let original= document.querySelector('#status').textContent;
    let winner_name= document.querySelector('#status');

function displaywin(name){
    winner_name.innerHTML='';
    winner_name.innerHTML += '\nCongratulations! '+name+' is the Winner!';
    winner_name.className=" you-won";
}

let reset= document.querySelector('.btn');
if (reset){
    reset.addEventListener('click', restartgame);
}

function restartgame(){
    game_arrayx=[];
    game_arrayo=[];
    current_play="0";
    game_play=true;

    boxes.forEach(box => {
        box.innerHTML="";
    });

    winner_name.classList.remove('you-won');
    winner_name.innerHTML=original;

}

});