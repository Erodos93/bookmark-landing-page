function changeTab(evt, tabName) {
  let i, tabContent, tabLink;
  tabContent = document.getElementsByClassName("card");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLink = document.getElementsByClassName("nav-link");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace("active-tab", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active-tab";
}

function openAnswer( answer,close) {

document.getElementById(answer).classList.toggle("show");
let isOpen=document.getElementById(answer).classList.contains("show");

if (isOpen) {
  document.getElementById(close).src='./images/icon-close.png';
 if(answer=='q4'){
     document.getElementById("lastQuestion").style.borderBottom="none";
 }
} else {
  document.getElementById(close).src='./images/icon-arrow.svg';
  if(answer=='q4'){
      document.getElementById("lastQuestion").style.borderBottom="3px solid #d6d6d6";
  }
}

}
function contactUs(){

arr.forEach(function(equale){

  if (equale!==value) {

   document.getElementById("wrong").style.display="block";
document.getElementById("input").style.border=" solid 2px red";
  }
})

}
function login(){
  if(!arr.includes(value)){
    alert("push");
      arr.push(value);
  }
}
//***************************************************

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

    question[i].style.borderBottom="3px solid #d6d6d6";
  }
}

document.getElementById("bookmark").style.display = "flex";
