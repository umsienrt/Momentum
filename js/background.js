const images = ["kiki1.jpg", "kiki2.jpg","kiki3.jpg","kiki4.jpg","kiki5.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);