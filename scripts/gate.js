function refresh(){
	  $('body').css('backgroundColor', 'white');
    $('.eyes').css('opacity', 0);
    $('.textbox').css('opacity', 0);
    $('.door').css('opacity', 1);
    document.title = "A Light in the dark?";
	}
	function trydoor(){
	  $('.textbox').css('opacity', 1);
    printDelayed("It's locked.","textbox",30);
    setTimeout(function(){$('.textbox').css('opacity', 0);},1000);
	}
	function jumpscare(){
	  var sound = new Howl({src: ['https://xuanwu4.github.io/545249534b454c494f4e/intel/null.ogg', 'https://xuanwu4.github.io/545249534b454c494f4e/intel/null.mp3'], volume: 0.5});
	  sound.play();
	  $('body').css('backgroundColor', 'black');
 	  $('.eyes').css('opacity', 1);
    $('.door').css('opacity', 0);
    $('.textbox').css('opacity', 0);
    document.title = "...";
    setTimeout(function(){ window.location.href = "https://xuanwu4.github.io/545249534b454c494f4e"; }, 100);
	}
