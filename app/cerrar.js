let container = document.getElementById("container");
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

setTimeout(function(){
    container.classList.add("cerrar");
},5000);



abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.getElementsByClassName.opacity = "1";
    modalC.getElementsByClassName.visibility = "visible";
    modal.classList.toggle("modal-close");
});