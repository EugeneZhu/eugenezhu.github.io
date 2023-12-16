var gifContainer = $('#gif-container');
var gifImg = $('#gif');
var mouseX = 0, mouseY = 0;
var currentX = 0, currentY = 0;

function moveGif() {
    var distX = mouseX - currentX;
    var distY = mouseY - currentY;
    currentX += distX / 8;
    currentY += distY / 8;
    gifContainer.css('left', currentX);
    gifContainer.css('top', currentY);
    requestAnimationFrame(moveGif);
}

$(document).on('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

moveGif();

$('.gif-link').hover(
    function() {
        var gifSrc = $(this).data('src');
        gifImg.attr('src', gifSrc);
        gifContainer.show();
    },
    function() {
        gifContainer.hide();
        gifImg.attr('src', '');
    }
);