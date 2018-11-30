 // jQuerySlider - main.js

console.log('Hello from main.js');

$('.slider_cnt .fas').click(function(){

  var frecciaPremuta = $(this);

  var classiFrecciaPremuta = frecciaPremuta.attr('class');

  (classiFrecciaPremuta.includes('right')) ? slideVerso('destra') : slideVerso('sinistra');

});

function slideVerso(direzione) {

  var containerImmagini = $('.slider_cnt .slider_images_cnt');
  var immagineAttuale = $('.slider_cnt .slider_img.active');
  var primaImmagine = $('.slider_cnt img:first-child');
  var ultimaImmagine = $('.slider_cnt img:last-child');
  var tutteLeImmagini = $('.slider_cnt .slider_img');

  tutteLeImmagini.removeClass('active');

  if (direzione == 'destra') {
    (immagineAttuale.next().length == 1 ) ? immagineAttuale.next().addClass('active') : primaImmagine.addClass('active');
  } else if (direzione == 'sinistra') {
    (immagineAttuale.prev().length == 1) ? immagineAttuale.prev().addClass('active') : ultimaImmagine.addClass('active');
  }

}
