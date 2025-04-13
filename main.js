const canvas = document.getElementById('geometry');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 100 + 20 * Math.sin(angle);

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(255, 0, 255, 0.3)`;
  ctx.lineWidth = 2;
  ctx.stroke();

  angle += 0.01;
  requestAnimationFrame(draw);
}

draw();