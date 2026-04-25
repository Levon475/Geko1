const ball = document.getElementById(`curs`)
let mouseX = 0
let mouseY = 0
let ballX = 0
let ballY = 0

window.addEventListener(`mousemove`, function(e) {

    mouseX = e.clientX
    mouseY = e.clientY


})

function animate() {
    ballX +=  (mouseX - ballX) * 0.1
    ballY +=  (mouseY - ballY) * 0.1

    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)