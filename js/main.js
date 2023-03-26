$(document).ready(function(){
    $(".slide-1").owlCarousel({
      autoplay: true,
      items:1,
      smartSpeed:1000,
      autoplayTimeout: 2000
    });
  });
  $(document).ready(function(){
    $(".slide-2").owlCarousel({
      items:4,
      margin: 10
    });
  });

  $(document).ready(function(){
    $('.header-burger').click(function(event){
      $('.header-burger,.nav-menu-item').toggleClass('active')
      $('body').toggleClass('lock');
    });
  });

  $(document).ready(function(){
    $('.carousel-burger').click(function(event){
      $('.carousel-burger,.carousel-menu').toggleClass('active')
    });
  });