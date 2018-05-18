var clock;
$(document).ready(function(){
	clock = $('.clock').FlipClock({
        clockFace: 'MinuteCounter',
        callbacks: {
            interval: function() {
                var time = this.factory.getTime().time;  
            }
        }
    });
	$('.duck-class').click(function(){
		$(this).css('opacity','0.3');
		var count = $(this).parent().parent().find('svg').length+1;
		if(!$(this).parent().find('svg').length) {
			$(this).parent().append("<svg height='60' width='60' class='duck-num' ><circle cx='30' cy='30' r='30' fill='#6252c1' /><span class='duck-real-num'>"+count+"</span></svg>");
		}
	});
	$('.duck-col-2').click(function(){
		$('.duck-col-2').find('g').attr('fill','#14beff');
		$(this).find('g').attr('fill','#004ca2');
		$('.duck-col-2').removeClass('duck-select-num');
		$(this).addClass('duck-select-num');
	});
	$('.sbt').click(function(){
		var flag = 0;
		$('.duck-col-2').each(function(){
			if($(this).hasClass('duck-select-num')) {
				flag = 1;
				if($(this).find('span').html() == "3") {
					$('#wonderful').fadeIn(500);
    				$('.col-sm-10').fadeOut(500);
    				$('.clock').fadeOut(500);
    				setTimeout(function() {
    					$('#wonderful').fadeOut(500);
    					$('.col-sm-10').fadeIn(500);
    					$('.clock').fadeIn(500);
    					clock = $('.clock').FlipClock({
		                    clockFace: 'MinuteCounter',
		                    callbacks: {
		                        interval: function() {
		                            var time = this.factory.getTime().time;  
		                        }
		                    }
		                });
    				}, 3000);
				} else {
	    				clock.stop();
					$('#failed_text').html("<h1 class='failed-h1' style='font-size:50px;'>Sorry, incorrect...</h1>");
    				$('.main-question').html("The correct answer is:");
	    			$('.main-question').css('color','#77a200');
	    			$('.duck-imgs').css('display','none');
	    			$('.duck-correct-num').css('display','unset');
	    			$('.explanation').css('display','unset');
	    			$('.explanation').css('color','#77a200');
	    			$('.hidden-div').css('display','unset');
	    			$('.duck-choose-num').html($(this).find('span').html());
    				$('.sbt').css('display','none');
    				$('.got-it').css('display','unset');
    				$('.got-it1').css('display','unset');
				}
			}
		});
		if(flag == 0)
			alert("Please choose!");
	});

    $('.got-it').click(function(){
    	location.reload();
    });

    $('.got-it1').click(function(){
    	location.reload();
    });
});