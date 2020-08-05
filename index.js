function changeTab(evt, tabName) {
  let i, tabContent, tabLink;
  tabContent = document.getElementsByClassName("card");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";

    // alert(document.getElementById("left-shadow").style.width="285px");
    // if(  evt.currentTarget.className==="active-tab" && i>0){

    // }



    // if (i>0) {
    //   tabContent[i].childNodes[2].style.width = 285 +"px";
    // }
  }
  tabLink = document.getElementsByClassName("nav-link");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace("active-tab", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active-tab";
  if (tabName==="search" || tabName==="share") {
  document.getElementById(tabName).childNodes[3].style.width="258px";
  document.getElementById(tabName).childNodes[3].style.top="1360px";
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
  // if(answer=='q4'){
  //     document.getElementById("lastQuestion").style.borderBottom="1px solid #d6d6d6";
  // }
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
//***************************************************
