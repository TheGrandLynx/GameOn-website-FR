function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// make the modal form disappear with the fade out effect
function fadeOutModal(){
  modalbg.style.animation = "fadeOut 0.4s";
  modalbg.addEventListener("animationend", closeModal);
  
}

// close the modal form
function closeModal() {
  modalbg.style.display = "none";
  modalbg.style.animation = "";
  modalbg.removeEventListener("animationend", closeModal);
}


