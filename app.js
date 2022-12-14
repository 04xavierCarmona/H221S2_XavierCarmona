const fullimg = document.getElementById("fullimg");
const fulimg = document.getElementById("fulimg");

function openimg(reference){
    fullimg.style.display="flex";
    fulimg.src = reference;
}   

function closeimg(){
    fullimg.style.display ="none";
}

/* box */

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes(); // shows initial box(es) 

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5 * 4);
  
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    
    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}

/*tiempo*/ 

var x = document.getElementById("myDIV");

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationIteration", myRepeatFunction);

// Standard syntax
x.addEventListener("animationiteration", myRepeatFunction);

function myRepeatFunction(event) {
  this.style.backgroundColor = "lightblue";
  this.innerHTML = "Tu estadia es de " + event.elapsedTime + " segundos";
}
