
//Logo Shift on Click Annimation
let logo = document.getElementById("logo");
let logoLeft = 8;

logo.addEventListener('click',()=> {
  let id = setInterval(move,20);
  function move() {
    if(logoLeft == 50) {
      clearInterval(id);
    }
    logoLeft++
    logo.style.left = logoLeft+'%';
  }
});
