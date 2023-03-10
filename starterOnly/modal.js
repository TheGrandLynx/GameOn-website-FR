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

// make the modal form disappear with the fade out effect and create a listener on animation end to open closemodal
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

//check if every input, component of the form to see if if it validates
function validate(){
  let cptErrors = 0;
  if(!validateFirst()){
    cptErrors += 1;
  }
  if(!validateLast()){
    cptErrors += 1;
  }
  if(!validateEmail()){
    cptErrors += 1;
  }
  if(!validateBirthDate()){
    cptErrors += 1;
  }
  if(!validateQuantity()){
    cptErrors += 1;
  }
  if(!validateCheckboxes()){
    cptErrors += 1;
  }
  if(!validateCheckbox1()){
    cptErrors += 1;
  }
  
  if (cptErrors > 0){
    return false;
  }else{
    return true;
  }
}


const inputFirst = document.querySelector("#first");
inputFirst.addEventListener("input", validateFirst);
// check the validation of the first name
function validateFirst(){  
  let lg = inputFirst.value  
  if (lg.length <= 2 || lg === undefined || !lg.replace(/\s+/, '').length){    
    borderWrong(inputFirst);
    return false;
  }else {    
    borderGood(inputFirst);
    return true;
  }
}

const inputLast = document.querySelector("#last");
inputLast.addEventListener("input", validateLast);
// check the validation of the last name
function validateLast(){
  let lg = inputLast.value
  if (lg.length <= 2 || lg === undefined || !lg.replace(/\s+/, '').length){
    borderWrong(inputLast);
    return false;
  }else {
    borderGood(inputLast);
    return true;
  }
}

const inputEmail = document.querySelector("#email");
inputEmail.addEventListener("input", validateEmail);
// check the validation of the email
function validateEmail(){
  let lg = inputEmail.value
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (re.test(lg) ){
    borderGood(inputEmail);
    return true;
  }else {
    borderWrong(inputEmail);
    return false;
  }
}

const inputBirthDate = document.querySelector("#birthdate");
inputBirthDate.addEventListener("focus", validateBirthDate);
inputBirthDate.addEventListener("input", validateBirthDate);
// check the validation of the birth date
function validateBirthDate(){  
  if (inputBirthDate.value){
    borderGood(inputBirthDate);
    return true;
  }else{
    borderWrong(inputBirthDate);
    return false;
  }
}

const inputQuantity = document.querySelector("#quantity");
inputQuantity.addEventListener("input", validateQuantity);
// check the validation of the quantity of event
function validateQuantity(){
  let lg = inputQuantity.value
  let re = /^\d+$/;
  if (re.test(lg) ){    
    borderGood(inputQuantity);
    return true;
  }else {
    console.log(lg);
    borderWrong(inputQuantity);
    return false;
  }
}

const checkboxes = document.querySelectorAll(".checkbox-input");
checkboxes.forEach((checkbox) => {
  if (checkbox.type == "radio"){
  checkbox.addEventListener("change", validateCheckboxes);
  }
});

// check if one of the location checkboxes is checked
function validateCheckboxes() {
  if (Array.from(checkboxes).some((checkbox) => checkbox.checked)){
    return true;
  }else {
    return false;
  }
}

const checkbox1 = document.querySelector("#checkbox1")
// check if conditions générales is checked = accepted
function validateCheckbox1(){
  if (checkbox1.checked){
    return true ;
  }else {
    return false;
  }
}




//set the color of the border of a dom element as red or green
function borderGood(wDom){
  wDom.style.border = "3px solid green";
}

function borderWrong(wDom){
  wDom.style.border = "3px solid red";
}

