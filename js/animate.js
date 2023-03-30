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
if(p.classList[0] =='day'){
  r.style.setProperty('--text-color', 'white');
  r.style.setProperty('--background-color', 'black');
  r.style.setProperty('--div-background-color','black');
  j.classList.remove("fa-moon");
  j.classList.add("fa-sun");
  p.classList.remove("day");
  p.classList.add("night");
}else if(p.classList[0]=='night'){
  r.style.setProperty('--text-color', 'black');
  r.style.setProperty('--background-color', '#f7fafc');
  r.style.setProperty('--div-background-color','#ffffff');
  j.classList.remove("fa-sun");
  j.classList.add("fa-moon");
  p.classList.remove("night");
  p.classList.add("day");
}


}
  
  window.addEventListener("scroll", reveal);