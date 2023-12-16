const links = document.querySelectorAll('.hover-link');
const popupImages = document.querySelectorAll('.popupImages');

links.forEach((link, index) => {
link.addEventListener('mouseover', (e) => {
popupImages[index].style.display = 'block';
fadeIn(popup-image);
});

link.addEventListener('mousemove', (e) => {
const mouseX = e.clientX;
const mouseY = e.clientY;

popupImages[index].style.left = `${mouseX}px`;
popupImages[index].style.top = `${mouseY}px`;
});

link.addEventListener('mouseout', () => {
popupImages[index].style.display = 'none';
fadeOut(popup-image);
});
});

function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.05;
        element.style.opacity = opacity;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust the interval for smoother animation
  }
  
  function fadeOut(element) {
    let opacity = 1;
    const interval = setInterval(() => {
      if (opacity > 0) {
        opacity -= 0.05;
        element.style.opacity = opacity;
      } else {
        element.style.display = 'none';
        clearInterval(interval);
      }
    }, 50); // Adjust the interval for smoother animation
  } 
  
  
  
  