 // jQuerySlider - main.js

console.log('Hello from main.js');

$('.slider_cnt .fas').click(function(){

  var frecciaPremuta = $(this);

  var classiFrecciaPremuta = frecciaPremuta.attr('class');

  (classiFrecciaPremuta.includes('right')) ? slideVerso('destra') : slideVerso('sinistra');

});

function slideVerso(direzione) {
  //immagini
  var containerImmagini = $('.slider_cnt .slider_images_cnt');
  var immagineAttuale = $('.slider_cnt .slider_img.active');
  var primaImmagine = $('.slider_cnt img:first-child');
  var ultimaImmagine = $('.slider_cnt img:last-child');
  var tutteLeImmagini = $('.slider_cnt .slider_img');

  //icone pallini
  var tuttiIPallini =$('.fa-circle');
  var pallinoAttuale = $('.fas.fa-circle');
  var primoPallino = $('.slider_indicators i:first-child');
  var ultimoPallino = $('.slider_indicators i:last-child');

  tutteLeImmagini.removeClass('active');
  pallinoAttuale.removeClass('fas').addClass('far');


  if (direzione == 'destra') {
    if (immagineAttuale.next().length == 1 ) {
       immagineAttuale.next().addClass('active');
       pallinoAttuale.next().addClass('fas').removeClass('far');
      } else {
        primaImmagine.addClass('active');
        primoPallino.addClass('fas').removeClass('far');
        }
  } else if (direzione == 'sinistra') {
    if (immagineAttuale.prev().length == 1) {
      immagineAttuale.prev().addClass('active');
      pallinoAttuale.prev().addClass('fas').removeClass('far');
      } else {
        ultimaImmagine.addClass('active');
        ultimoPallino.addClass('fas').removeClass('far');
      }
  }

}
