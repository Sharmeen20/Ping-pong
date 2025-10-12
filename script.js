import Ball from "./ball.js";

const ball = new Ball(document.getElementById("ball"));

let lastTime = null;

function update(time) {
  if (lastTime !== null) {
    const delta = time - lastTime;

    ball.update(delta);

    // Ball boundary check
    const ballRect = ball.rect();
    if (ballRect.left <= 0 || ballRect.right >= window.innerWidth) {
      ball.direction.x *= -1; // Reverse horizontal direction
    }
    if (ballRect.top <= 0 || ballRect.bottom >= window.innerHeight) {
      ball.direction.y *= -1; // Reverse vertical direction
    }

    // Future: Add paddle collision logic here
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
