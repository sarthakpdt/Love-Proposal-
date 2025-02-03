const parentElement = document.getElementById("parentElement");
const showMessage = document.getElementById("showMessage");
const changeColor = document.body.style;
const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

// Function to show love message when user clicks "Yes!"
function propose() {
  parentElement.style.display = "none";
  showMessage.style.display = "block";
  changeColor.background = "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";
}

// Move "No" button randomly on hover (within screen bounds)
noButton.addEventListener("mouseenter", () => {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    
    const maxX = window.innerWidth - buttonWidth - 20; // Ensuring it stays within width
    const maxY = window.innerHeight - buttonHeight - 20; // Ensuring it stays within height

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});

// Animate Text with Anime.js
var textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
