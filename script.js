// 🎂 Countdown
const countdown = document.getElementById('countdown');
const birthday = new Date('2025-05-25T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    countdown.innerText = "🎉 It's her special day!";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdown.innerText = `⏳ ${d}d ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 🎶 Music Toggle
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
let playing = false;

toggleBtn.addEventListener("click", () => {
  if (playing) {
    music.pause();
    toggleBtn.innerText = "🔊 Play Music";
  } else {
    music.play();
    toggleBtn.innerText = "🔈 Pause Music";
  }
  playing = !playing;
});

// 💌 Popup
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("popup-card").style.display = "flex";
  }, 4000);
});
function closeCard() {
  document.getElementById("popup-card").style.display = "none";
}

// 🎊 Confetti
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
for (let i = 0; i < 100; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 8 + 2,
    speed: Math.random() * 3 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of pieces) {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
    ctx.fill();
    p.y += p.speed;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(draw);
}
draw();