/*fader stuff*/
const faders = document.querySelectorAll('.fade-in');

/*slider stuff*/
const sliders = document.querySelectorAll('.slide-in')

/* nav bar stuff */

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


