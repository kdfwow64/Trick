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
	$('.res').click(function(){
		$('.res').css('border-color','#bbf1ee');
		$('.res').css('background-color','white');
		$('.res').removeClass('select');
		$(this).css('border-color','blue');
		$(this).css('background-color','#0ad6f7');
		$(this).addClass('select');
		
	});
	$('.res').mouseenter(function(){
		$(this).css('background-color','#0ad6f7');
    });
    $('.res').mouseleave(function(){
        if($(this).hasClass('select')) {
            $(this).css('background-color','#0ad6f7');
        } else {
        $(this).css('background-color','white');

        }
    });
	$('.sbt').click(function(){
		var flag = 0;
		$('.res').each(function(){
			if($(this).hasClass('select')) {
				flag = 1;
				if($(this).find('span').html() == '1')
				{
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
						var rand = myArray[Math.floor(Math.random() * myArray.length)];
						$('img').attr('src',rand);
                        
    				}, 3000);
				}
				else {
                        clock.stop();
					var ans = $('.select').find('span').html();
					$('#failed_text').html("<h1 class='failed-h1' style='font-size:50px;'>Sorry, incorrect...</h1>");
    				$('.main-question').html("The correct answer is:");
    				$('.main-question').css('color','#77a200');
    				$('.sbt').css('display','none');
    				$('.duck-imgs').css('display','none');
    				$('.got-it').css('display','unset');
    				$(this).css('opacity','0.3');
    				$(this).removeClass('responsive');
    				$(this).css('border-width','2px');
    				$(this).parent().parent().children().eq(0).children().eq(0).removeClass('responsive');
    				$(this).parent().parent().children().eq(0).children().eq(0).addClass('click-state');
    				$('.explanation').css('display','unset');
    				$('.explanation').css('color','#77a200');
    				$('.hidden-div').css('display','unset');
    				$('.got-it1').css('display','unset');

    				$('.you-answered').each(function(){
    					if($(this).find('span').html() == ans) {
    						$(this).css('border-color','blue');
    						$(this).css('background-color','#0ad6f7');
    					}
    				});
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