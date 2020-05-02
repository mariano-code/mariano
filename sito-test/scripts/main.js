var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/andrew-lincoln-rick-grimes-walking-dead.jpg') {
      myImage.setAttribute ('src','images/215004-Rick-Grimes.jpg');
    } else {
      myImage.setAttribute ('src','images/andrew-lincoln-rick-grimes-walking-dead.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Inserisci il tuo nome.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ciao ' + storedName + ' da Rick Grimes';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ciao ' + storedName + ' da Rick Grimes';
}
myButton.onclick = function() {
  setUserName();
}