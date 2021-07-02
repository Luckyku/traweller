console.log('script.js ready');


var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentslide = 1;

var manualNav=function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        });
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        manualNav(i);
        currentslide=i;
    })
});

// autoslide
var repeat = function(activeClass){
    let active= document.getElementsByClassName('active');
  
    var repeater = () => {
      setTimeout(function(){
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active');
        })
  
        slides[currentslide].classList.add('active');
        btns[currentslide].classList.add('active');
        currentslide++;
  
        if(slides.length == currentslide){
          currentslide=0;
        }
        if (currentslide >= slides.length) {
          return
        }
        repeater();
      }, 10000);
    }
    repeater();
  }
  repeat();