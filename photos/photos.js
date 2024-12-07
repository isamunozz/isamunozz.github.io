$(document).ready(function(){
    $('.albums').slick({
      dots: true,           // Show pagination dots
      infinite: true,       // Infinite scrolling
      speed: 300,           // Transition speed
      slidesToShow: 3,      // Number of slides visible at once
      slidesToScroll: 1,
      arrows: true,  
      responsive: [
        {
          breakpoint: 1024, // At screen width <= 1024px
          settings: {
            slidesToShow: 2, // Show 2 slides
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,  // At screen width <= 600px
          settings: {
            slidesToShow: 1, // Show 1 slide
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  
