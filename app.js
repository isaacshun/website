/*fader stuff*/
const faders = document.querySelectorAll('.fade-in');

/*slider stuff*/
const sliders = document.querySelectorAll('.slide-in');

/*bar stuff*/
const bar = document.querySelectorAll('.bar');
const progress = document.querySelectorAll('.progress-line');

/*skill stuff*/
const skill = document.getElementById('.innerskillbox');
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

/* Portfolio filter */
$(document).ready(function(){
  $('.proj-list').click(function(){
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.itemBox').show('1000');
    }
    else{
      $('.itemBox').not('.'+value).hide('1000');
      $('.itemBox').filter('.'+value).show('1000');
    }
  })

  $('.proj-list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/*slider animation*/
sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

/*skillbox animation*/
skill.forEach(skill => {
  appearOnScroll.observe(skill);
});