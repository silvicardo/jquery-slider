 // jQuerySlider - main.js

console.log('Hello from main.js');

var modalitaScrollAuto = false; //var per monitorare se l'utente ha scelto auto (true) o Manuale (false)
var isScrolling = false; //var per registrare lo stato di scrolling in modalità auto
var infiniteScrollingFunction; //var destinata alla timing function

//Al click del bottone per switchare tra modalità Scroll Auto o Manuale
$('.scroll_mode').click(function () {

  //Toggla la classe auto e....
  $(this).toggleClass('auto');

  //in base al suo valore attuale gestisci i testi del bottone e area feedback utente
  var classiBottoneScrollMode = $(this).attr('class');
  modalitaScrollAuto = (classiBottoneScrollMode.includes('auto')) ? true : false;
  $('.scroll_mode span').text((modalitaScrollAuto) ? 'Manuale' : 'Automatica');
  $('.slider_options h2 span').text((modalitaScrollAuto) ? 'Automatica' : 'Manuale');

  //e se sei tornato a modalità Manuale imposta su false la var isScrolling
  if (!modalitaScrollAuto) {
    isScrolling = false;
  }
});

//Al click di una delle due frecce direzionali
$('.slider_cnt .fas').click(function () {

  //Otteniamo le classi del bottone premuto per poter controllare
  //successivamente la direzione richiesta dall'utente
  var frecciaPremuta = $(this);
  var classiFrecciaPremuta = frecciaPremuta.attr('class');


  //Al Click abbiamo 3 possibilità
  //1.La modalità di scrolling è Manuale
  if (modalitaScrollAuto == false) {
    //quindi compi un singolo slide nella direzione scelta dall'utente
    (classiFrecciaPremuta.includes('right')) ? slideVerso('destra') : slideVerso('sinistra');
  }//2.La modalità di Scrolling è Automatica ma
    //non è già in corso una scrollata automatica
   else if (modalitaScrollAuto == true && !isScrolling) {
    //avvio una scrollata automatica nella direzione scelta dall'utente
    //e setto la var isScrolling su vero
    isScrolling = true;
    infiniteScrollingFunction = setInterval(function () {

      if (modalitaScrollAuto == true) {
        (classiFrecciaPremuta.includes('right')) ? slideVerso('destra') : slideVerso('sinistra');
      } else {
        clearInterval(infiniteScrollingFunction);
      }}, 2000);

  } //3.La modalità di Scrolling è Automatica ed è
    //stata avviata una scrollata verso una direzione qualsiasi
    else  if (modalitaScrollAuto == true && isScrolling && infiniteScrollingFunction != null) {
    //stoppo la precedente scrollata infinita
    clearInterval(infiniteScrollingFunction);
    //e ne avvio una nuova nella direzione scelta dall'utente
    infiniteScrollingFunction = setInterval(function () {

      if (modalitaScrollAuto == true) {
        (classiFrecciaPremuta.includes('right')) ? slideVerso('destra') : slideVerso('sinistra');
      } else {
        clearInterval(infiniteScrollingFunction);
      }}, 2000);
  }



});

//Gestsce immagini e indicatori di avanzamento in base a direzione scelta dall'utente
function slideVerso(direzione) {

  //immagini
  var containerImmagini = $('.slider_cnt .slider_images_cnt');
  var immagineAttuale = $('.slider_cnt .slider_img.active');
  var primaImmagine = $('.slider_cnt img:first-child');
  var ultimaImmagine = $('.slider_cnt img:last-child');
  var tutteLeImmagini = $('.slider_cnt .slider_img');

  //icone pallini
  var tuttiIPallini = $('.fa-circle');
  var pallinoAttuale = $('.fas.fa-circle');
  var primoPallino = $('.slider_indicators i:first-child');
  var ultimoPallino = $('.slider_indicators i:last-child');

  //Azioni preliminari
  tutteLeImmagini.removeClass('active');
  pallinoAttuale.removeClass('fas').addClass('far');

  //Azioni in base a direzione
  if (direzione == 'destra') {
    //Direzione destra, se immagine attuale non è ultima dello slider
    if (immagineAttuale.next().length == 1) {
      immagineAttuale.next().addClass('active');
      pallinoAttuale.next().addClass('fas').removeClass('far');
    } else {//Direzione destra, se immagine attuale è ultima immagine, ricomincia
      primaImmagine.addClass('active');
      primoPallino.addClass('fas').removeClass('far');
    }
  } else if (direzione == 'sinistra') {
    //Direzione sinistra, se immagine attuale non è la prima dello slider
    if (immagineAttuale.prev().length == 1) {
      immagineAttuale.prev().addClass('active');
      pallinoAttuale.prev().addClass('fas').removeClass('far');
    } else {//Direzione sinistra, se immagine attuale è la prima dello slider, riparti dalla fine
      ultimaImmagine.addClass('active');
      ultimoPallino.addClass('fas').removeClass('far');
    }
  }
}
