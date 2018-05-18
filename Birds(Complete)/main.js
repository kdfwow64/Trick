var clock;
var myArray=["birds.svg","balls.svg","gumdrop.svg"];
var main_qu = ["Count by 5s. Click each group of birds to keep track as you count.","Count by 5s. Click each group of balls to keep track as you count.","Count by 5s. Click each group of gumdrop candies to keep track as you count."];
var sub_qu = ["How many birds are there?","How many balls are there?","How many gumdrops are there?"];
var bottom_ans =["There are 15 birds.","There are 15 balls.","There are 15 gumdrops."];
$(document).ready(function(){
	clock = $('.clock').FlipClock({
        clockFace: 'MinuteCounter',
        callbacks: {
            interval: function() {
                var time = this.factory.getTime().time;  
            }
        }
    });
    var turn = Math.floor(Math.random() * myArray.length);
    $('.duck-class').attr('src',myArray[turn]);
    $('.duck-disable-class').attr('src',myArray[turn]);
    $('.main-qu').html(main_qu[turn]);
    $('.sub-qu').html(sub_qu[turn]);
    $('.bottom-ans').html(bottom_ans[turn]);

	$('.duck-class').click(function(){
		$(this).css('opacity','0.3');
		var count = ($(this).parent().parent().find('svg').length +1) * 5;
		if(!$(this).parent().find('svg').length) {
			if(count == 5) {
				$(this).parent().append("<svg height='60' width='60' class='duck-num' ><circle cx='30' cy='30' r='30' fill='#6252c1' /><span class='duck-real-num1'>"+count+"</span></svg>");
			} else {
				$(this).parent().append("<svg height='60' width='60' class='duck-num' ><circle cx='30' cy='30' r='30' fill='#6252c1' /><span class='duck-real-num'>"+count+"</span></svg>");
			}
		}
	});
	$('.duck-col-2').click(function(){
		$('.duck-col-2').find('g').attr('fill','#14beff');
		$(this).find('g').attr('fill','#004ca2');
		$('.duck-col-2').removeClass('duck-select-num');
		$(this).addClass('duck-select-num');
	});
	$('.sbt').click(function(){
		if($('#bird_answer').val() == "15") {
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
				location.reload();
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
			$('#you_answered').val($('#bird_answer').val());
			$('.sbt').css('display','none');
			$('.got-it').css('display','unset');
			$('.got-it1').css('display','unset');
		}
	});

    $('.got-it').click(function(){
    	location.reload();
    });

    $('.got-it1').click(function(){
    	location.reload();
    });
});