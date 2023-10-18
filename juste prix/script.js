"use strict"


const aleatoire = Math.floor(Math.random() * 100) + 1;
console.log(aleatoire);
let tentative = 0;
const tentativeMax = 7;

function Nombreàdeviner() {
    const number = parseInt(prompt("Devinez le nombre entre 1 et 100 : "));

    if(isNaN(number) || aleatoire < 1 || aleatoire >100){
    alert("Veuillez entrer un nombre valide entre 1 et 100")
    } else {
    tentative++;

    if (number < aleatoire) {
    alert("le nombre à deviner est plus grand");
    }
    else if (number > aleatoire) {
       alert("le nombre à deviner est plus petit");
    }
    else {
        alert(`Vous avez deviné le nombre ${number} en ${tentative} tentatives`);
        return;
    }
    
    if (tentative < tentativeMax){
        Nombreàdeviner()
    }
    else {
        alert("Désolé, vous avez utilisé le maximum de tentative soit 7 tentatives");  
    }
    }
}
Nombreàdeviner()

