$(document).ready(function(){

  $('.owl-portfolio').owlCarousel({
    items: 5,
    dots: true,
    responsiveClass:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
    }
  });

  $('.owl-testimonials').owlCarousel({
    items: 1,
    dots: true,
  });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

});
