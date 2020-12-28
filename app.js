/*fader stuff*/
const faders = document.querySelectorAll('.fade-in');

/*slider stuff*/
const sliders = document.querySelectorAll('.slide-in')

/* nav bar stuff */
const navSlide = ()=>{
  const burger = document.querySelector(".burger");
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
 burger.addEventListener('click', ()=>{
   
//Toggle Nav 
    nav.classList.toggle('nav-active');

     //Animate Links
  navLinks.forEach((link, index)=>{
    if(link.style.animation){
      link.style.animation = '';}else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      }
  });
   //Burger Animation
   burger.classList.toggle('toggle');
});
  };


//Fade in animation
const appearOptions = {
  threshold: 0
};

const appearOnScroll = new IntersectionObserver(function(
  entries, appearOnScroll){
    entries.forEach(entry => {
      if (!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, 
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/*slider animation*/
sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})

navSlide();


