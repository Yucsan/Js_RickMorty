


//COMIENZO
//start();

function start(){
  $('.menu').css('transform','translateY(-100%)');
  $('.garage_1').fadeIn();
  $('.garage_1').css('transform','translateY(0%)');
}

//VOLVER AL MENU DEL GARAGE_1
function menu(){
  $('.garage_1').css('transform','translateY(100%)');
  $('.menu').fadeIn()
  $('.menu').css('transform','translateY(0%)');
  setTimeout(function(){ 
    $('.garage_1').fadeOut()
  },500) 
}

// ============================   JUEGARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
function garage1(){

 /* $('.menu').css('transform','translateY(-100%)');
  $('.garage_1').fadeIn();
  $('.garage_1').css('transform','translateY(0%)');
*/


  window.location = 'game.html';
}



//IR DEL GARAGE_1 AL 2
function ir_garage2(){
  $('.garage_1').css('transform','translateY(-100%)');
  $('.garage_2').fadeIn();
  $('.garage_2').css('transform','translateY(0%)');
}

//IR DEL GARAGE_2 AL 1
function ir_garage1(){
  $('.garage_2').css('transform','translateY(100%)');
  $('.garage_1').fadeIn();
  $('.garage_1').css('transform','translateY(0%)');
    setTimeout(function(){ 
    $('.garage_2').fadeOut()
  },500) 
}

//IR DEL GARAGE_1 AL DORMITORIO DE RICK
function ir_rickRoom(){

 //$('.d_rick').css('position','fixed');

  var r = document.getElementsByClassName('d_rick');
  $('.d_rick').fadeIn();
  r[0].style.transform = 'translateX(0%)';
  var g = document.getElementsByClassName('garage_1'); 
  g[0].style.transform = 'translateX(-100%)';
  //$('.garage_1').fadeOut();

/*
    setTimeout(function(){ 
       $('.d_rick').css('position','fixed');
  }, 500);

*/
}

//IR DEL DORMITORIO DE RICK AL GARAGE1
function ir_garage1_derick(){

  //$('.d_rick').css('position','fixed');

  $('.d_rick').css('transform','translateX(+100%)');
   setTimeout(function(){ 
    $('.d_rick').fadeOut();
  },1000) 
  $('.garage_1').fadeIn();
  $('.garage_1').css('transform','translateX(0%)')
}

//IR AL D MORTY DE RICK ROOM
function ir_mortyRoomDeRick(){

  //$('.d_morty').css('position','fixed');

  $('.d_rick').css('transform','translateY(+100%)');
  $('.d_morty').fadeIn();
  $('.d_morty').css('transform','translateY(0%)');
}

//VOLVER DE MORTY A RICK
function ir_rickRoom2(){
  $('.d_morty').css('transform','translateY(-100%)');
  $('.d_rick').css('transform','translateY(0%)');
}

//IR DE RICKROOM A EX-CASA
function ir_exCasa(){
 $('.d_rick').css('transform','translateY(-100%)');
 $('body').css('background','#6b0f62');
 $('.ExCasa').fadeIn();
 //$('.ExCasa').css('opacity','1');
 $('.ExCasa').css('transform','translateY(0%)');
}

//IR DE EX-CASA A RICKROOM
function ir_rickRoom3(){
 $('.d_rick').css('transform','translateY(0%)');
 //$('.ExCasa').fadeIn();
 $('.ExCasa').css('transform','translateY(100%)');
}

//IR DE RICKROOM A SALON
function ir_salon(){
  $('.d_rick').css('transform','translateX(-100%)');
  $('.salon').fadeIn();
  $('.salon').css('transform','translateX(0%)');


/*
  setTimeout(function(){ 
       $('.salon').css('position','fixed');
  }, 500);
*/

}

//IR DE SALON A RICKROOM
function ir_rickRoom4(){
  //$('.salon').css('position','absolute');

  $('.d_rick').css('transform','translateX(0%)');
  //$('.salon').fadeIn();
  $('.salon').css('transform','translateX(100%)');

/*
    setTimeout(function(){ 
       $('.d_rick').css('position','fixed');
  }, 500);
*/

}

//IR DE SALON A COCINA
function ir_cocina(){

  //$('.salon').css('position','absolute');

  $('.cocina').fadeIn();
  $('.salon').css('transform','translateY(100%)');

  $('.cocina').css('transform','translateY(0%)');

/*
  setTimeout(function(){ 
       $('.cocina').css('position','fixed');
  }, 500);
*/


}


//IR DE COCINA A SALON
function ir_salon2(){
  //$('.cocina').css('position','absolute');

  $('.salon').css('transform','translateY(0%)');
  //$('.salon').fadeIn();
  $('.cocina').css('transform','translateY(-100%)');

/*
  setTimeout(function(){ 
       $('.salon').css('position','fixed');
  }, 500);
*/


}

//IR DE COCINA A COMEDOR
function ir_comedor(){
  $('.cocina').css('transform','translateX(-100%)');
  $('.comedor').fadeIn();
  $('.comedor').css('transform','translateX(0%)');
}

//IR DEL COMEDOR Q COCINA
function ir_cocina2(){
  $('.comedor').css('transform','translateX(100%)');
  $('.cocina').css('transform','translateY(0%)');
}

function ir_rickpuzzle(){

  counterPlay1();

  $('.d_rick').css('transform','translateY(0%)');
 //$('.ExCasa').fadeIn();
  $('.rompecabezas').css('transform','translateY(100%)');
  $('.btn_puzzle').css('display','none');
 
}


// ROMPECABEZA JS =================================================

//VARIABLES PIEZAS

var pieza1 = '<li id="pieza1"><div><img src="assets/rsc/img/pieza1.png" alt="" class="pieza1"></div></li>';
var pieza2 = '<li id="pieza2"><div><img src="assets/rsc/img/pieza2.png" alt="" class="pieza2"></div></li>';
var pieza3 = '<li id="pieza3"><div><img src="assets/rsc/img/pieza3.png" alt="" class="pieza3"></div></li>';
var pieza4 = '<li id="pieza4"><div><img src="assets/rsc/img/pieza4.png" alt="" class="pieza4"></div></li>';
var pieza5 = '<li id="pieza5"><div><img src="assets/rsc/img/pieza5.png" alt="" class="pieza5"></div></li>';
var pieza6 = '<li id="pieza6"><div><img src="assets/rsc/img/pieza6.png" alt="" class="pieza6"></div></li>';
var pieza7 = '<li id="pieza7"><div><img src="assets/rsc/img/pieza7.png" alt="" class="pieza7"></div></li>';
var pieza8 = '<li id="pieza8"><div><img src="assets/rsc/img/pieza8.png" alt="" class="pieza8"></div></li>';
var pieza9 = '<li id="pieza9"><div><img src="assets/rsc/img/pieza9.png" alt="" class="pieza9"></div></li>';



//CLASES BOTON
document.getElementById('btn1').style.fontFamily = 'gloria';
document.getElementById('btn1').style.borderRadius = '10px';
document.getElementById('btn1').style.fontSize = '15px';

var tiempoReal = "";
var counterInterval = "";
//CONTADOR

function counter(){


var segundos = 0;
var minutos = 1;
var tiempoJuego = minutos.toString().padStart(2, '0')+segundos.toString().padStart(2, '0'); 
$("#count").html(minutos.toString().padStart(2, '0')+":"+segundos.toString().padStart(2, '0'));

  counterInterval = setInterval(function(){
  tiempoReal = $("#count").html();
  if (segundos == 0) {
    segundos = 100;
    minutos--;

  }
  segundos--;
  $("#count").html(minutos.toString().padStart(2, '0')+":"+segundos.toString().padStart(2, '0'));
  if (minutos == 0 && segundos == 0) {
    alert('Game Over');
    clearInterval(counterInterval);
    //$('.btn_rickpuzzle').fadeIn();
    $("#sortable1, #sortable2, #sortable3, #sortable4, #sortable5, #sortable6, #sortable7, #sortable8, #sortable9").removeClass("connectedSortable");
    $('.volverInt').css('display','block');
  }

}, 500);

}

var piezasValue = [pieza1, pieza2, pieza3, pieza4, pieza5, pieza6, pieza7, pieza8, pieza9];



function randomPiezas(){


//VALORES-RANDOM

  var posicionesV = ["10","11","12","13","14","15","16","17","18"];

  var posicionesTemporal = [];
  var r = posicionesV.length;
  var i;

   //random posiciones
   // Mientras queden posiciones
   while (r) {
    // elige un elemento restante
    i = Math.floor(Math.random() * r--);
   // corta y pega en el Array temporal que es el que se pintará
   posicionesTemporal.push(posicionesV.splice(i, 1)[0]);
   //console.log(posicionesTemporal)
 }

  //pintar
  j = 0;
  k = 1;
  while (j < posicionesTemporal.length){
    //console.log("pintar"+j)
    //console.log("valor "+posicionesTemporal[j])
    document.getElementById('sortable'+posicionesTemporal[j]).innerHTML = piezasValue[j];
    j++;
    k++;
  }

}

//SORTABLES
  $(function() {
      $("#sortable1, #sortable2, #sortable3, #sortable4, #sortable5, #sortable6, #sortable7, #sortable8, #sortable9, #sortable10, #sortable11,#sortable12, #sortable13, #sortable14, #sortable15, #sortable16, #sortable17, #sortable18").sortable({
        connectWith: ".connectedSortable"
      }).disableSelection();

      //LIMITA LOS BORDES DE LA PANTALLA
       $("#sortable1, #sortable2, #sortable3, #sortable4, #sortable5, #sortable6, #sortable7, #sortable8, #sortable9, #sortable10, #sortable11,#sortable12, #sortable13, #sortable14, #sortable15, #sortable16, #sortable17, #sortable18").sortable({ containment: "#containment-wrapper", scroll: false });

  });



var temporal = [];
var correcto = ["pieza1", "pieza2", "pieza3", "pieza4", "pieza5", "pieza6", "pieza7", "pieza8","pieza9",];


function comprobar(){

  var pieza1 = $('#sortable1 li').attr('id');
  temporal.push(pieza1);
  var pieza2 = $('#sortable2 li').attr('id');
  temporal.push(pieza2);  
  var pieza3 = $('#sortable3 li').attr('id');
  temporal.push(pieza3);
  var pieza4 = $('#sortable4 li').attr('id');
  temporal.push(pieza4);  
  var pieza5 = $('#sortable5 li').attr('id');
  temporal.push(pieza5);
  var pieza6 = $('#sortable6 li').attr('id');
  temporal.push(pieza6);
  var pieza7 = $('#sortable7 li').attr('id');
  temporal.push(pieza7);
  var pieza8 = $('#sortable8 li').attr('id');
  temporal.push(pieza8);
  var pieza9 = $('#sortable9 li').attr('id');
  temporal.push(pieza9);
  
  //console.log(temporal[0]);
  //console.log(correcto);

  var incorrectas = 0;
  var correctas = 0;
  var i=0;
  while (i<temporal.length){

    if( temporal[i] == correcto[i]){
      correctas++ 
    }else{
      incorrectas++
    }
  i++
  }

  if (correctas == 9){

    //document.getElementById('respuesta').style.fontFamily = 'gloria';
    document.getElementById('respuesta').style.color = 'chartreuse';  
    document.getElementById('respuesta').innerHTML = 'ES CORRECTO, NIVEL SUPERADO';
    clearInterval(counterInterval);
    console.log(tiempoReal);

    if (tiempoReal.substr(3, 2) > 50){
      $('#evaluacion').fadeIn();
      document.getElementById('obtenido').innerHTML = '100 PUNTOS';
      clearInterval(counterInterval);
      $('.btn_rickpuzzle').fadeIn();
      $('.bombi2').fadeIn();
      $('.blink2').fadeIn();
      $('.btn_mortyRoomDeRick').fadeIn();
    }else{
      $('#evaluacion').fadeIn();
      document.getElementById('obtenido').innerHTML = '50 PUNTOS';
      clearInterval(counterInterval);
      $('.btn_rickpuzzle').fadeIn();
      $('.bombi2').fadeIn();
      $('.blink2').fadeIn();
      $('.btn_mortyRoomDeRick').fadeIn();
    }

  }else{

    document.getElementById('respuesta').style.fontFamily = 'gloria';
    document.getElementById('respuesta').style.color = 'tomato';
    document.getElementById('respuesta').innerHTML = 'ES INCORRECTO,VUELVE A INTENTARLO';
    clearInterval(counterInterval);
    $('.volverInt').css('display','block');
    temporal = [];
    
  }

}


// ========================= JS TESORO FIESTA FINAL ==============================================

var personaje1 = '<img src="assets/rsc/img/squanch.png" alt="" style="height: 14vw;">';
var personaje2 = '<img src="assets/rsc/img/tammy.png" alt="" style="height: 15vw;">';
var personaje3 = '<img src="assets/rsc/img/birdman.png" alt="" style="height: 18vw;">';
var personaje4 = '<img src="assets/rsc/img/sumerDance-copy.gif" alt="" style="height: 15vw;">';
var personaje5 = '<img src="assets/rsc/img/rick_dance.gif" alt="" style="height: 18vw;">';
var personaje6 = '<img src="assets/rsc/img/Morty2.gif" alt="" style="height: 14vw;">';
var personaje7 = '<img src="assets/rsc/img/mrbutt.gif" alt="" style="height: 14vw;">';

var per = [personaje1, personaje2, personaje3, personaje4, personaje5, personaje6, personaje7]

randomPersonaje();

function randomPersonaje(){
  var personajes = ["valor1","valor2","valor3","valor4","valor5","valor6","valor7"];

  var posTemporal = [];
  var n = personajes.length;
  var i;

   //random personajes
   // Mientras queden personajes
   while (n = personajes.length) {
    // elige un elemento restante
    i = Math.floor(Math.random() * n--);
   // corta y pega en el Array temporal que es el que se pintará
   posTemporal.push(personajes.splice(i, 1)[0]);
   console.log(posTemporal)
 }

  //pintar
  j = 0;
  k = 1;
  while (j < posTemporal.length){
    console.log("pintar"+j)
    console.log("duda "+posTemporal[j][5])
    document.getElementById('pos'+posTemporal[j][5]).innerHTML = per[j];

    j++;
    k++;
  }
}

//posTemporal[j][5]

  $(".jerry").hover(function(){
    $(".c1, .c1a").show();

  }, function(){
    $(".c1, .c1a").hide();;
  });

  $(".beth").hover(function(){
    $(".c2, .c2a").show();

  }, function(){
    $(".c2, .c2a").hide();;
  });




// generate a random Number
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = function(e, target){
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return an String depending on the distances 
let getDistanceHint = distance => {
  if (distance < 80) {
    return "Boiling hot!";
  } else if (distance < 120) {
    return "Really Hot";
  } else if (distance < 180) {
    return "Hot";
  } else if (distance < 200) {
    return "Warm";
  } else if (distance < 260) {
    return "Cold";
  } else if (distance < 360) {
    return "Really Cold";
  } else {
    return "Freezing!";
  }
}

function lejos(){
  console.log('click-FUERA');
  $('#light').attr('src','assets/rsc/img/bombilla1.png')
  setTimeout(function(){ 
    $('#light').attr('src','assets/rsc/img/bombilla2.png')
  },500) 
  clicks++;
document.getElementById("distance").innerHTML = '<h2 class="clue2">Fuera del la Area</h2>';

//$('#distance').html('Fuera del la Area') ;
}

// treasure coordinates
const WIDTH = 360;
const HEIGH = 130;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)

};

$('#lugar').css('top',target.y)
.css('left',target.x);

var x = window.matchMedia("(max-width: 740px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


function myFunction(x) {
  if (x.matches) { // If media query matches
  $('#lugar').html('<button id="finalisimo">TESORO</button>')

 }
}

//onclick="finish()"

console.log(target.x);
console.log(target);



// click handler
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  $('#light').attr('src','assets/rsc/img/bombilla1.png')
  setTimeout(function(){ 
    $('#light').attr('src','assets/rsc/img/bombilla2.png')
  },500) 
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1 class="clue">${distanceHint}</h1>`;

  if (distance < 40 ) {
    document.getElementById("distance").innerHTML = '<h1 class="clue3">Lo Encontraste</h1>';
    //alert(`Found the treasure in ${clicks} clicks!`);

    Swal.fire({
      title: '¡Grandioso!',
      html: `<span>Has encontrado la Pistola </span><br><span>en: ${clicks} clicks!</span>`,
      imageUrl: 'assets/rsc/img/pistola1.png',
      //imageWidth: ,
      //imageHeight: ,
      confirmButtonText: 'CONTINUAR',

      buttonsStyling: false,
      customClass: {
        container: 'container-class',
        popup: 'popup-class_t',
        header: 'header-class',
        title: 'title-class_t',
        closeButton: 'close-button-class',
        icon: 'icon-class',
        image: 'image-class_t',
        content: 'content-class_t',
        input: 'input-class',
        actions: 'actions-class',
        confirmButton: 'confirm-button-class_t',
        cancelButton: 'cancel-button-class',
        footer: 'footer-class'

      },
      }).then((result) => {

  if (result.value) {
   $('.fiesta').fadeOut();

   $('.finish_screen').fadeIn();

   glow();
    
  }

    });


    // FUNCTION FINAL

   // $('.fiesta').css('display','none');
 
      function glow(){
    setInterval(function(){
      var logo3 = document.querySelector('.final12');
      logo3.style.filter = 'hue-rotate(290deg)';


      setTimeout(function(){
        logo3.style.filter = 'hue-rotate(0deg)';


      }, 1500);
    }, 3000);
    
  }
 
  }



});

  document.getElementById("finalisimo").addEventListener("click", function(){
 


  //function finish(){


  alert('ganaste');

    document.getElementById("distance").innerHTML = '<h1 class="clue3">Lo Encontraste</h1>';
    //alert(`Found the treasure in ${clicks} clicks!`);

    Swal.fire({
      title: '¡Grandioso!',
      html: `<span>Has encontrado la Pistola </span><br><span>en: ${clicks} clicks!</span>`,
      imageUrl: 'assets/rsc/img/pistola1.png',
      //imageWidth: ,
      //imageHeight: ,
      confirmButtonText: 'CONTINUAR',

      buttonsStyling: false,
      customClass: {
        container: 'container-class',
        popup: 'popup-class_t',
        header: 'header-class',
        title: 'title-class_t',
        closeButton: 'close-button-class',
        icon: 'icon-class',
        image: 'image-class_t',
        content: 'content-class_t',
        input: 'input-class',
        actions: 'actions-class',
        confirmButton: 'confirm-button-class_t',
        cancelButton: 'cancel-button-class',
        footer: 'footer-class'

      },
      }).then((result) => {

  if (result.value) {
   $('.fiesta').fadeOut();

   $('.finish_screen').fadeIn();

   glow();
    
  }

})

});

//}

