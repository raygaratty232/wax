var overlay = document.getElementById('overlay');
var vid = document.getElementById('video');
var vidText = document.querySelector('.video-text')
if(overlay.addEventListener){
		overlay.addEventListener("click", play)
	}else if(overlay.attachEvent){
		overlay.attachEvent("onclick", play)
	}

function play() { 
    if (vid.paused){
        vid.play(); 
        overlay.className = "o";
        vidText.classList.add("n");
        vidText.addEventListener('transitioneod', function(){
            vidText.style.display = 'none'
        })
    }else {
        vid.pause(); 
        overlay.className = "";
        vidText.classList.remove("n");
    }
} 

jQuery("document").ready(function($){
    var nav = $('#fixmenu');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
 
});