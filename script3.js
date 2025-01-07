// const express = require('express');

`use strict`

const totalScore =localStorage.getItem(`highscore`);
const playerId = localStorage.getItem(`playerid`)

fetch(`https://gamblebox.onrender.com/scores`).then(response=> response.json()).then(data=>{
    const container = document.querySelector(`.scores`);
    data.forEach(entry => {
        const div= document.createElement('div');
        div.classList.add('rows');
        div.textContent=`${entry.name} : ${entry.score}`
        container.appendChild(div);
    });
})