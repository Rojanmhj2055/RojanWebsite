function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }


function nightMode(){

let r = document.querySelector(':root');
let p = document.getElementById('nightmode');
let j = document.getElementById('nighticon');
if(p.classList.contains('day')){
  r.style.setProperty('--text-color', 'white');
  r.style.setProperty('--background-color', 'black');
  r.style.setProperty('--div-background-color','black');
  j.classList.replace("fa-moon","fa-sun");
  p.setAttribute('data-tooltip','Day Mode');
  p.classList.replace("day","night");
  
}else if(p.classList.contains('night')){
  r.style.setProperty('--text-color', 'black');
  r.style.setProperty('--background-color', '#f7fafc');
  r.style.setProperty('--div-background-color','#ffffff');
  p.setAttribute('data-tooltip','Night Mode');
  j.classList.replace("fa-sun","fa-moon");
  p.classList.replace("night","day");
}


}
  
  window.addEventListener("scroll", reveal);