// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

//creo la funzione per generare 36 caselle
function generaCells() {
  for (var i = 0; i < 36; i++) {
    $(".container-cells").append('<div class="cells"></div>');
  }
  $(".cells").append('<span class="numRandom"></span>');
}


$(document).ready(function() {

  generaCells();

  $(".cells").click(function(){
    var elemento = $(this);
    elemento.off();

    $.ajax({

      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function(numero){
        if (numero.response <= 5) {
          elemento.css("background-color","yellow");
          elemento.find(".numRandom").text(numero.response);
          console.log(numero.response);
        } else {
          elemento.css("background-color","green");
          elemento.find(".numRandom").text(numero.response);
          console.log(numero.response);
        }
      },
      error: function (){
      }
    });

  });


});
