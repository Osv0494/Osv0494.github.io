
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

//esta funcion se encarga de si el menu esta abierto lo va a cerrar y si esta
//cerrado lo va abrir,buscara en el elemento menu si tiene la clase menu_opened,
//si tiene la clase la va a quitar pero si no la va a poner.
function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//Interactividad en el menu
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
//cera un nodo con todos los elementos dentro del menu

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });
});
//form
let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email");
  const name = document.querySelector("#name");
  const message = document.querySelector("#message");
  window.location.href = `mailto:jesusperez0494@gmail.com?subject=envioDesdeFormulario&body=name%3A${name}%0Aemail%3A${email}%0Amessage%3A${message}`;
});