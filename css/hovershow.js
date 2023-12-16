const topLayer = document.querySelector(".toplayer");
var cursor = document.querySelector(".circle");
var mouseX = 0, mouseY = 0;
var currentX = 0, currentY = 0;

function moveCursor() {
    let distX = mouseX - currentX;
    let distY = mouseY - currentY;
    currentX += distX / 250;
    currentY += distY / 250;
    cursor.style.left = currentX - 250 + 'px';
    cursor.style.top = currentY - 250 + 'px';
    topLayer.style.clipPath = `circle(250px at ${currentX}px ${currentY}px)`;
    requestAnimationFrame(moveCursor);
}

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

moveCursor();