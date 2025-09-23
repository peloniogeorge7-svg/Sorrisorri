const messages = [
"Hi Nicole I'm sorry for what I've done to you over the past 2 years ,like avoiding you. I'm not avoiding you because I didn't like you or anything, I'm avoiding you because Im shy to talk to you. I know things might be different now, but I hope you're doing well. I hope you forgive me."
];

const letterEl = document.getElementById("letter");
let line = 0;
let charIndex = 0;
let isDeleting = false;

function typeLetter() {
  let currentLine = messages[line];
  let displayText = currentLine.substring(0, charIndex);
  
  letterEl.innerHTML = displayText;
  
  if (!isDeleting) {
    if (charIndex < currentLine.length) {
      charIndex++;
      setTimeout(typeLetter, 70);
    } else {
      isDeleting = true;
      setTimeout(typeLetter, 1500);
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(typeLetter, 40);
    } else {
      isDeleting = false;
      line = (line + 1) % messages.length;
      setTimeout(typeLetter, 500);
    }
  }
}

typeLetter();

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s"; 
  document.body.appendChild(heart);
  
  setTimeout(() => heart.remove(), 9000);
}

setInterval(createHeart, 500);
