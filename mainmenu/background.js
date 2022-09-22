const sourceElem = document.querySelector('video');
const ENDPOINT = "https://assets.sliceclient.com/mainmenubackground/";
const backgrounds = ["Spaceman.webm", "Zero Two.webm", "Touhou - Bad Apple.webm"];
const urlParams = new URLSearchParams(window.location.search);
const imageElem = document.querySelector('img');
const pElem = document.querySelector('p');

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function setBackground() {
    sourceElem.src = ENDPOINT + getRandomElement(backgrounds);
}

setBackground();

imageElem.src = `https://minotar.net/helm/${urlParams.get("name")}/50.png`;
pElem.innerText = urlParams.get("name");
