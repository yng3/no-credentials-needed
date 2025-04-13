const canvas = document.getElementById('geometry');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;
let pulse = 0;
let triggering = false;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 100 + 20 * Math.sin(angle) + (triggering ? pulse : 0);

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(255, 0, 255, ${0.3 + 0.2 * Math.sin(angle)})`;
  ctx.lineWidth = 2;
  ctx.stroke();

  angle += 0.01;

  if (triggering && pulse < 100) {
    pulse += 1.5;
  }

  requestAnimationFrame(draw);
}

draw();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') return; // Skip ENTER key itself
  typed += e.key.toLowerCase();
  if (typed.includes('source')) {
    triggerMessage();
  }
});

let typed = '';

function triggerMessage() {
  if (triggering) return;
  triggering = true;
  document.getElementById('message').classList.add('reveal');
}