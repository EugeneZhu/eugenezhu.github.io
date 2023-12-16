        var cursor = $('#cursor');
		var mouseX = 0, mouseY = 0;
		var currentX = 0, currentY = 0;

		function moveCursor() {
			var distX = mouseX - currentX;
			var distY = mouseY - currentY;
			currentX += distX / 6;
			currentY += distY / 6;
			cursor.css('left', currentX - 6);
			cursor.css('top', currentY - 6);
			requestAnimationFrame(moveCursor);
		}

		$(document).on('mousemove', function(e) {
			mouseX = e.pageX;
			mouseY = e.clientY;
		});

		moveCursor();

		$('a').hover(
			function() {
				cursor.addClass('magnify');
                cursor.text("");
			},
			function() {
				cursor.removeClass('magnify');
                cursor.text("");
			}
		);

		