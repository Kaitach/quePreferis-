var myArray = [  'Saltar de un 4° piso',
'Matar 5 gatitos',
'Tener pies como manos',
'Que te coja el presidente',
'Caminar por brasa caliente',
'Nadar con tiburones',
'Hablar como bebé por el resto de tu vida',
'Poder caminar solo 30 pasos al día',
'Para hablar, solo podés gritar',
'No tener articulaciones en rodillas y codos',
'Ser consciente cuando pestañeas todo el tiempo',
'Que te coja Luciano Castro',
'No poder girar el cuello',
'Simular que masticas chicle el resto de tu vida',
'No poder caminar, solo saltar por el resto de tu vida',
'Ser el culpable de la destrucción del mundo',
'Que todo el mundo te odie por un año',
'No poder pronunciar vocales',
'No poder pronunciar consonantes',
'Cada vez que te ve un perro trata de morderte',
'No poder saciar el hambre',
'No poder saciar la sed',
'Que te den una piña en la cara en un momento random por día',
'Tener manos como pies, pero son inhábiles',
'Que te persiga un caracol imparable e inmortal, donde si te toca te mata',
'Pasar una noche en un cajón lleno de tarántulas',
'No poder usar las manos por el resto de tu vida',
'No poder cenar con Mirtha Legrand',
'Cenar con Mirtha Legrand', 
'No poder usar vehículos',
'Vivir solo en una isla el resto de tu vida sin tener contacto con personas',
'No poder escuchar música',
'Que existan los súper poderes, pero no poseer ninguno',
'Cuando tocas a alguien generas dolor medianamente tolerable',
'Ver pixeleado por el resto de tu vida',
'Cuando caminas, solo podes girar como si fueras un tornado por el resto de tu vida',
'No poder contar',
'Solo poder estar agachado por el resto de tu vida',
'No importa cuánto te bañes, vas a oler a vinagre',
'Despertar en el Amazonas solo con la ropa que traes puesta',
'No entender lo que los demás te dicen',
'Cuando tenés un orgasmo gritas como T-Rex',
'Cada vez que miras para atrás, hay un payaso',
'Cada vez que dicen "el" o "la", te encandilas',
'Poder caminar solo como mono',
'No poder negarte a nada de lo que te pidan',
'Solo podés hablar en cámara lenta',
'Estar engripado por el resto de tu vida',
'Cada vez que tenés sexo se te cae un diente',
'Solo podes comunicarte con "si" o "no" por el resto de tu vida'


];
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
    setTimeout(function(){ document.getElementById("reglas").classList.remove("show"); }, 10000);
}

let musica = document.getElementById('youtube-audio');
musica.addEventListener("click", function(e) {
});


function onYouTubeIframeAPIReady(){var e=document.getElementById("youtube-audio"),t=document.createElement("img");t.setAttribute("id","youtube-icon"),t.style.cssText="cursor:pointer;cursor:hand",e.appendChild(t);var a=document.createElement("div");a.setAttribute("id","youtube-player"),e.appendChild(a);var o=function(e){var a=e?"IDzX9gL.png":"quyUPXN.png";t.setAttribute()};e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};var r=new YT.Player("youtube-player",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}
