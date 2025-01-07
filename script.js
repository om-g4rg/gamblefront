'use strict'

const input= document.querySelector('.input');
input.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
        const playerId=input.value;
        console.log(playerId);

        localStorage.setItem('playerid', playerId);

        window.location.href="index2.html";
    }
})
