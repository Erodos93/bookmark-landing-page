function changeTab(evt, tabName) {
  let i, tabContent, tabLink;

  tabContent = document.getElementsByClassName("card");
  NodeList.prototype.forEach = Array.prototype.forEach;
  var children = document.getElementById(tabName).parentNode.childNodes;

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";


  }
  tabLink = document.getElementsByClassName("nav-link");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace("active-tab", "");

  }
  document.getElementById(tabName).style.display = "flex";


  evt.currentTarget.className += " active-tab";
  if (tabName==="search" || tabName==="share") {
    children.forEach(function(item){
      if (tabName===item.id) {

      if (window.innerWidth>=375) {
        item.children[0].children[0].style.left="22%";
        item.children[0].children[0].style.bottom="3rem";

      }else{
        item.children[0].children[0].style.left="12rem";
        item.children[0].children[0].style.bottom="4rem";

      }
      }

    })

  }
}

//Function open Answer to Question
function openAnswer( evt,answer,close) {

document.getElementById(answer).classList.toggle("show");
let isOpen=document.getElementById(answer).classList.contains("show");

if (isOpen) {
  document.getElementById(close).src='./images/icon-close.png';

 // if(answer=='q4'){
evt.currentTarget.style.borderBottom="none";
    document.getElementById(answer).style.borderBottom="1px solid #d6d6d6";
 // }
} else {
  document.getElementById(close).src='./images/icon-arrow.svg';
evt.currentTarget.style.borderBottom="1px solid #d6d6d6";

}

}
//Function control true/false email
function contactUs(){

arr.forEach(function(equale){

  if (equale!==value) {

   document.getElementById("wrong").style.display="block";
document.getElementById("input").style.border=" solid 2px red";
  }
})

}
//Function to Login
function login(){
  if(!arr.includes(value)){
    alert("push");
      arr.push(value);
  }
}
//Function onLoad
function startLoaded(){
  var i, extension, margin,question,lastQuestion;

  const arr=["michal.horcicka19@gmail.com","ultigamer12@gmail.com"];
  const value=document.getElementById("input").value;
  extension = document.getElementsByClassName("item");
  question=document.getElementsByClassName("question");
  margin = 0;
  for (i = 1; i < extension.length; i++) {
    margin += 50;
    extension[i].style.top = margin + "px";
  }
  for (var i = 0; i < question.length; i++) {


    if(i===3){

      question[i].style.borderBottom="1px solid #d6d6d6";
    }
  }

  document.getElementById("bookmark").style.display = "flex";

}
//Function change menu to extend button
function changeToMobile(){
  var widthDisplay;
  widthDisplay=document.getElementsByClassName("menu")[0];
  if (widthDisplay.className==="menu" ) {
    widthDisplay.className+="response";
  } else {
    widthDisplay.className=="menu";
  }
}
function openMobileMenu(){
  var backgroundMenu,navMenu;
  backgroundMenu=document.getElementById("background-menu");
backgroundMenu.style.display="block";
navMenu=document.getElementById("nav");
navMenu.style.display="none";
}
function closeMobileMenu(){
  var backgroundMenu;
  backgroundMenu=document.getElementById("background-menu");

  if (window.innerWidth>=1130) {
    backgroundMenu.style.display="none";
  }
}
//***************************************************
function exit(){
  var exitBackgroundMenu,navMenu;
  exitBackgroundMenu=document.getElementById("background-menu");
  navMenu=document.getElementById("nav");
  exitBackgroundMenu.style.display="none";
  navMenu.style.display="flex";
}
