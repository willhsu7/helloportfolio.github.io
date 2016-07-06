var image = $('.img-profile');
var aboutPosition = $('.about-myself').offset().top/1.5;

$(window).on('scroll', function () {

  var scrollTop = $(this).scrollTop();
  image.css({ 'top': (aboutPosition - scrollTop) });

  if(scrollTop > aboutPosition){
    image.css({'top': 0})
  }
});
