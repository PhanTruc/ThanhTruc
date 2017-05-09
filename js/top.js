// bg top
$(document).ready(function () {
	"use strict";
		var scrollSpeed = 1; 
	    var posX = 50;
	    setInterval(function(){
			posX -= scrollSpeed; 
			$('#header').css("background-position",posX+"px 100px");
		}, 50);
	});
	
// bubble01
$(document).ready(function() {
	"use strict";
    function loop() {
        $('.bubble01').css({top:0});
        $('.bubble01').animate ({
            top: '+=5',
        }, 1500, 'linear', function() {
            loop();
        });
    }
    loop();
});
// bubble02
$(document).ready(function() {
	"use strict";
    function loop() {
        $('.bubble02').css({top:0});
        $('.bubble02').animate ({
            top: '-=5',
        }, 1500, 'linear', function() {
            loop();
        });
    }
    loop();
});





















