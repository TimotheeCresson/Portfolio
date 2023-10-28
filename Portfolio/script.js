"use strict"
/*
=============================
Animation Roue de compétence
=============================
*/

const roue = document.querySelector('.roue');
/**
 * options pour l'observateur d'intersection
 */
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Lorsque 50% de l'élément est visible
};
const observer = new IntersectionObserver(tourneRoue, options);
// Fonction de callback à exécuter lorsque l'élément est visible
function tourneRoue(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // L'élément est dans la vue, ajoutez la classe .rotate
      roue.classList.add('rotate');
    } else {
      // L'élément n'est plus dans la vue, supprimez la classe .rotate
      roue.classList.remove('rotate');
    }
  });
}
observer.observe(roue);

/*
=====================
Animation navigation
=====================
*/
const list = document.querySelectorAll(".list");
function activeLink() {
    list.forEach((item)=>
    item.classList.remove('hover'));
    this.classList.add('hover')
}
list.forEach((item)=>
item.addEventListener('mousemove', activeLink))

/*
==========================
Animation Title Experience
==========================
*/

const persoExp = document.querySelector(".persoExp")
const titleExp = document.querySelector(".titleexp")
const animationWork = document.querySelector(".workcontainer")

const option = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4,
}
const observer2 = new IntersectionObserver(flipExp, option);
function flipExp (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      persoExp.classList.add("animationExpPerso")
      titleExp.classList.add("animationExpTitle")
      animationWork.classList.add("animationWork")
    } else {
      persoExp.classList.remove("animationExpPerso")
      titleExp.classList.remove("animationExpTitle")
      animationWork.classList.remove("animationWork")
    }
  });
}
observer2.observe(persoExp, titleExp, animationWork);
console.log(observer2);


