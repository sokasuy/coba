/* const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello Yessica!';

for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = "Button " + i;
  button.onclick = function () {
    alert(i);
  };
  document.body.appendChild(button);
}

document.querySelector('html').onclick = function() {
  alert('Ouch! Stop poking me!');
} */

let myImage = document.querySelector('img');
//let myHeading = document.querySelector('h1');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/apple-icon.png');
        //myHeading.textContent = 'Apple is Cool!';
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
        //myHeading.textContent = 'Mozilla is Cool!';
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
};