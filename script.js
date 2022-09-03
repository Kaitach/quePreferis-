var myArray = [    'Saltar de un 4 piso',
'Matar 5 gatitos',
'Tener pies como manos',
'Que te coja el presidente',
'Caminar por braza caliente',
'Nadar con tiburones',
'Hablar como bebe por el resto de tu vida',
'Poder caminar 30 pasos al Día',
'Para hablar, solo podes gritar',
'No tener articulaciones',
'Ser consiente cuando pestañeas todo el tiempo',
'Que te coja Luciano Castro',
'No poder girar el cuello',
'Simular que masticas chicle el resto de tu vida',
'No podes caminar, solo saltar por el resto de tu vida',
'Ser el culpable de la destrucción del mundo',
'Que todo el mundo te odie por un año',
'No podes pronunciar vocales',
'No podes pronunciar consonantes',
'Cada vez que te ve un perro trata de morderte',
'No podes saciar el hambre',
'No podes saciar la sed',
'Que te den una piña en la cara en un momento random por día',
'Tener manos como pies, pero son inhábiles',
'Que te persiga un caracol imparable e inmortal, donde si te toca te mata',
'Pasar una noche en un cajón lleno de tarántulas',
'No podes usar las manos por el resto de tu vida',
'No podes cenar con Mirtha Legrand',
'Cenar con Mirtha Legrand', 
'No podes usar vehículos',
'Vivir solo en una isla el resto de tu vida sin tener contacto con personas',
'No poder escuchar música',
'Que existan los súper poderes, pero no posees ninguno',
'Cuando tocas a alguien generas dolor medianamente tolerable',
'Ver pixeleado por el resto de tu vida',
'Cuando caminas, solo podes girar como si fueras un tornado por el resto de tu vida',
'No poder contar',
'Solo podes estar agachado por el resto de tu vida',
'No importa cuánto te bañes, vas a oler a vinagre',
'Despertas en el Amazonas solo con la ropa que traes puesta',
'No entiendes lo que los demás te dicen',
'Cuando tenes un orgasmo gritas como T-Rex',
'Cada vez que miras para atrás, hay un payaso',
'Cada vez que dicen "el" o "la", te encandilas',
'Podes caminar solo como mono',
'No podes negarte a nada de lo que te pidan',
'Solo podes hablar en cámara lenta',
'Estas engripado por el resto de tu vida',
'Cada vez que tenes sexo se te cae un diente',
'Solo podes comunicarte con "si" o "no" por el resto de tu vida'

];
var rand = Math.floor(Math.random()*myArray.length);
var rValue = myArray[rand];
let boton = document.getElementById('boton');
var sonido1 = new Audio();
sonido1.src="shot1.mp3";

respuesta1 =  document.getElementById('respuesta1');
respuesta2 = document.getElementById('respuesta2');


 

function   pregunta() {
    console.clear();
    document.getElementById("alert-success").classList.remove("show");
var rand = Math.floor(Math.random()*myArray.length);
var rand2 = Math.floor(Math.random()*myArray.length);
var rValue = myArray[rand];
var rValue2 = myArray[rand2];

if (rand == rand2) {
    sonido1.play()   
    showAlertSuccess();
    respuesta1.innerHTML =  "";
    respuesta2.innerHTML = "";
   
    

}
else {    
respuesta1.innerHTML =  `Opcion 1: ` + rValue + ` `;
respuesta2.innerHTML = `Opcion 2: ` + rValue2 + ` `;
}






}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}
  
function reglas() {
    document.getElementById("reglas").classList.add("show");
    setTimeout(function(){ document.getElementById("reglas").classList.remove("show"); }, 5000);
}



function onYouTubeIframeAPIReady(){var e=document.getElementById("youtube-audio"),t=document.createElement("img");t.setAttribute("id","youtube-icon"),t.style.cssText="cursor:pointer;cursor:hand",e.appendChild(t);var a=document.createElement("div");a.setAttribute("id","youtube-player"),e.appendChild(a);var o=function(e){var a=e?"IDzX9gL.png":"quyUPXN.png";t.setAttribute()};e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};var r=new YT.Player("youtube-player",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}