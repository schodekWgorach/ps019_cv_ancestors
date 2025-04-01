import { cvancestors } from './assets/data.js';

const imageElement = document.querySelector('.ancestores__foto');
const textElement = document.querySelector('.ancestores__text');
const nameElement = document.querySelector('.ancestores__username');

let idx = 0;

function updatecv()  {
    const { name, photoUrl, text } = cvancestors[idx];
    console.log(`Updating: ${name}`);
    if (imageElement && nameElement && textElement) {
        nameElement.innerText = name;
        imageElement.src = photoUrl;
        textElement.innerText = text;
    }
   
    idx = (idx + 1) % cvancestors.length;
    

    setTimeout(updatecv, 1000);
}

updatecv(); // Initial call to start the animation.

