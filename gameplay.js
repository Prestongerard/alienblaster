$(document).ready(function() {

// scoreboard
var myScore = 0;

// timer
var sec = 200;


//  game audio
var level_1_track = document.getElementById("level-1-track");
var level_2_track = document.getElementById("level-2-track");
var level_3_track = document.getElementById("level-3-track");

// leveling up functions 
$('.guitar').hide();
$('.bass').hide();
$('.drums').hide();
$('.synth').hide();


function levelUp2(){
	if (myScore === 40) {
		alert("Niceeeee! You reached Level 2 and earned two more beats!");
		document.getElementById("level-1-track").muted = true;
		$("#level-2-track")[0].play();
		$('.guitar').fadeIn();
		$('.bass').fadeIn();
	} 
}

function levelUp3(){
	if (myScore === 70){
		alert("Niceeeee! You reached Level 3 and earned two more beats!");
		document.getElementById("level-2-track").muted = true;
		$("#level-3-track")[0].play();
		$('.drums').fadeIn();
		$('.synth').fadeIn();
	}
}

//start game
$(".play-icon").click(function(){
	var timer = setInterval(function() {
		$('.timer').text(sec--);
		if (sec < 0) {
			alert("Sorrry! You have run out of time!");
			clearInterval(timer);
		}
	}, 1000);
	$("#level-1-track")[0].play();
	alienFlip();
	alienLove();
	alien8Bit();
});

// animations for targets

	// animation & click function for green alien flipping in spaceship
	function alienFlip(){
		var x= Math.random() * 555;
		$('.alien-flip').css({"left": "-75px", "top": x});
		$('.alien-flip').animate({left: '1000px'}, 7000, alienFlip);
	}
	function alienflip_Midgame(){
		var x= Math.random() * 375;
		$('.alien-flip').css({"left": "0px", "top": x});
		$('.alien-flip').fadeIn();
		$('.alien-flip').animate({left: '1100px'}, 7000, alienFlip);
	}
	$('.alien-flip').click(function(){
		$('.alien-flip').stop().hide();
		myScore = myScore + 10;
		levelUp2();
		levelUp3();
		document.getElementById('points').innerHTML = myScore;
		alienflip_Midgame();
	});

     // animation & click function for alien w/ hearts
     function alienLove(){
     	var y= Math.random() * 99;
     	$('.alien-love').css({"right": "0px", "top": y});
     	$('.alien-love').animate({right: '-50px'}, 2000, alienLove);
     }
     function alienlove_Midgame(){
     	var y= Math.random() * 50;
     	$('.alien-love').css({"right": "0px", "top": y});
     	$('.alien-love').fadeIn();
     	$('.alien-love').animate({right: '-300px'}, 2000, alienlove_Midgame);
     }
     $('.alien-love').click(function(){
     	$('.alien-love').stop().hide();
     	myScore = myScore + 10;
     	levelUp2();
     	levelUp3();
     	document.getElementById('points').innerHTML = myScore;
     	alienlove_Midgame();
     });

     // animation for 8 - bit alien

     function alien8Bit(){
     	var y= Math.random() * 215;
     	$('.alien-8-bit').css({"right": "0px", "top": y});
     	$('.alien-8-bit').animate({right: '-50px'}, 2000, alien8Bit);
     }
     function alien8bit_Midgame(){
     	var y= Math.random() * 385;
     	$('.alien-8-bit').css({"right": "0px", "top": y});
     	$('.alien-8-bit').fadeIn();
     	$('.alien-8-bit').animate({right: '-300px'}, 2000, alien8bit_Midgame);
     }
     $('.alien-8-bit').click(function(){
     	$('.alien-8-bit').stop().hide();
     	myScore = myScore + 10;
     	levelUp2();
     	levelUp3();
     	document.getElementById('points').innerHTML = myScore;
     	alien8bit_Midgame();
     });
 });