$('.multiple-items').slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-prev.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-next.svg" alt=""></img>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});