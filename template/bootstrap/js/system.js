$(function() {					
	$('button[type="submit"]').click(function () {
		var btn = $(this);
		btn.button('loading');
		Wait();
	});
});

var i, sec;
var anim_line, show_wait, show_wait_sec;
function Wait(stop){
	if(stop){
		if(show_wait) clearTimeout(show_wait);
		if(anim_line) clearInterval(anim_line);
		if(show_wait_sec) clearInterval(show_wait_sec);
		$('.animate_line').html(''); $('.wait').hide();
	}
	else{
		i=1;
		sec=5;
		show_wait = setTimeout( function() { 
			$('.wait').css({'opacity':0}).show().animate({'opacity':0.77}, 500); 
			$('.wait p span').html('4');
			show_wait_sec = setInterval( function() { WaitSec(); }, 1000);
		}, 4000);
		anim_line = setInterval( function() { AnimateLine(); }, 1000);
	}
}

function AnimateLine(){
	if(i>4){ i=1; $('.animate_line').html(''); }
	$('.animate_line').append('<div class="animate_line_'+i+'">');
	$('.animate_line_'+i).css({'z-index': i}).animate({'width':'100%'}, 2000);
	i++;
}
function WaitSec(){
	$('.wait p span').html(sec);
	sec++;
}
