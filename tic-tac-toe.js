"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let boxes= document.querySelectorAll('#board > div');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].className = "square";
    } 
});