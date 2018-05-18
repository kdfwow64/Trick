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
		var myArray = ["apple.svg","ball.svg","sweet.svg"];
		var rand = myArray[Math.floor(Math.random() * myArray.length)];
		$('img').attr('src',rand);
		var clicking = 0;
	    $('.responsive').mouseenter(function(){
	    	$(this).addClass('mouse-over');
	    });
	    $('.responsive').mouseleave(function(){
	    	$(this).removeClass('mouse-over');
	    });
	    $('.responsive').click(function(){
	    	clicking = 1;
	    	$('.responsive').removeClass('click-state');
	    	$('.responsive').removeClass('mouse-over');
	    	$(this).addClass('click-state');
	    });
	    $('body').click(function(){
	    	if(clicking == 0)
				$('.responsive').removeClass('click-state');
			clicking = 0;
		});
	    $('.sbt').click(function(){
	    	var flag = 0;
	    	$('.sub-div').each(function(){
	    		if($(this).hasClass('click-state')) {
	    			flag = 1;
	    			if($(this).find('img').length == 1) {
	    				$('#wonderful').fadeIn(500);
	    				$('.col-sm-10').fadeOut(500);
	    				$('.clock').fadeOut(500);
	    				setTimeout(function() {
	    					$('#wonderful').fadeOut(500);
	    					$('.col-sm-10').fadeIn(500);
	    					$('.clock').fadeIn(500);
							var rand = myArray[Math.floor(Math.random() * myArray.length)];
							$('img').attr('src',rand);
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
	    				$('.sbt').css('display','none');
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
	    			}
	    		}
	    	});
	    	if(flag == 0) {
	    		alert("Please select one!");
	    	}
	    });

	    $('.got-it').click(function(){
	    	location.reload();
	    });

	    $('.got-it1').click(function(){
	    	location.reload();
	    });

	});