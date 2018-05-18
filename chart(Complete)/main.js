var clock;
$(document).ready(function(){
/*    setInterval(function(){
        $('.ballon').css('top',(parseInt($('.ballon').css('top'))-1)+'px');
    },100);*/
    var myArray = ["birds.png","foods.png","vegetables.png"];
    var main_que =["Anne went to a bird refuge and saw some eagles, parrots, penguins,  and ducks. She made a bar graph of the birds at the refuge:","Anthony went on a picnic and brought some oranges, pies, carrots,  and cupcakes. He made a bar graph of the food he brought:","Hana asked thirty-one people on the street to vote for their favourite vegetable. She made a bar graph showing how many people named each vegetable:"];
	var sub_que =["Which bird did she see more of, ducks or penguins?","Did he bring more oranges or pies?","Did more people vote for carrots or aubergine?"];
    var correct_one=["Duck.gif","Oranges.gif","Carrot.gif"];
    var correct_name=["Duck","Oranges","Carrots"];
    var wrong_one=["Penguin.gif","Pie.gif","Aubergine.gif"];
    var wrong_name=["Penguin","Pie","Aubergine"];
    var first_one=["Eagle.gif","Oranges.gif","Potato.gif"];
    var first_name=["Eagle","Oranges","Potato"];
    var second_one=["Parrot.gif","Pie.gif","Carrot.gif"];
    var second_name=["Parrot","Pie","Carrot"];
    var third_one=["Penguin.gif","Carrot.gif","Aubergine.gif"];
    var third_name=["Penguin","Carrot","Aubergine"];
    var forth_one=["Duck.gif","Muffin.gif","Broccoli.gif"];
    var forth_name=["Duck","CupCakes","Broccoli"];

    var solve1=["Find the bar for ducks. Now find the line where the bar for ducks ends. The bar for ducks ends at 8. She saw 8 ducks.","Find the bar for oranges. Now find the line where the bar for oranges ends. The bar for oranges ends at 7. He brought 7 oranges. ","Find the bar for carrots. Now find the line where the bar for carrots ends. The bar for carrots ends at 9. 9 people voted for carrots."];
    var solve2=["Find the bar for penguins. Now find the line where the bar for penguins ends. The bar for penguins ends at 2. She saw 2 penguins.","Find the bar for pies. Now find the line where the bar for pies ends. The bar for pies ends at 6. He brought 6 pies. ","Find the bar for aubergine. Now find the line where the bar for aubergine ends. The bar for aubergine ends at 6. 6 people voted for aubergine. "];
    var solve3=["8 is more than 2. She saw more ducks.","7 is more than 6. He brought more oranges.","9 is more than 6. More people voted for carrots."];
    
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
				if(($(this).find('h3').html() == 'Duck') || ($(this).find('h3').html() == 'Oranges') || ($(this).find('h3').html() == 'Carrots'))
				{
					$('#wonderful').fadeIn(500);
    				$('.col-sm-12').fadeOut(500);
    				setTimeout(function() {
    					$('#wonderful').fadeOut(500);
    					$('.col-sm-12').fadeIn(500);
                    /*    
                        clock = $('.clock').FlipClock({
                            clockFace: 'MinuteCounter',
                            callbacks: {
                                interval: function() {
                                    var time = this.factory.getTime().time;  
                                }
                            }
                        });
                    */
                        var turn = Math.floor(Math.random() * myArray.length);
                        var rand = myArray[turn];
                        $('.select').css('background-color','white');
                        $('.select').css('border-color','#bbf1ee');
                        $('.select').removeClass('select');
                        $('.main-one').html(main_que[turn]);
                        $('.sub-one').html(sub_que[turn]);
                        $('.back-image').attr('src',myArray[turn]);
                        $('.correct-answer .margin-sm').eq(0).find('img').attr('src',correct_one[turn]);
                        $('.correct-answer .margin-sm').eq(0).find('h3').html(correct_name[turn]);
                        $('.correct-answer .margin-sm').eq(1).find('img').attr('src',wrong_one[turn]);
                        $('.correct-answer .margin-sm').eq(1).find('h3').html(wrong_name[turn]);

                        $('.problem-pic .col-sm-4 .row').eq(0).find('img').attr('src',first_one[turn]);
                        $('.problem-pic .col-sm-4 .row').eq(0).find('h3').html(first_name[turn]);
                        $('.problem-pic .col-sm-4 .row').eq(1).find('img').attr('src',second_one[turn]);
                        $('.problem-pic .col-sm-4 .row').eq(1).find('h3').html(second_name[turn]);
                        $('.problem-pic .col-sm-4 .row').eq(2).find('img').attr('src',third_one[turn]);
                        $('.problem-pic .col-sm-4 .row').eq(2).find('h3').html(third_name[turn]);
                        $('.problem-pic .col-sm-4 .row').eq(3).find('img').attr('src',forth_one[turn]);
                        $('.problem-pic .col-sm-4 .row').eq(3).find('h3').html(forth_name[turn]);


                        $('.sub-main .row').eq(0).find('img').attr('src',first_one[turn]);
                        $('.sub-main .row').eq(0).find('h3').html(first_name[turn]);
                        $('.sub-main .row').eq(1).find('img').attr('src',second_one[turn]);
                        $('.sub-main .row').eq(1).find('h3').html(second_name[turn]);
                        $('.sub-main .row').eq(2).find('img').attr('src',third_one[turn]);
                        $('.sub-main .row').eq(2).find('h3').html(third_name[turn]);
                        $('.sub-main .row').eq(3).find('img').attr('src',forth_one[turn]);
                        $('.sub-main .row').eq(3).find('h3').html(forth_name[turn]);

                        $('.origin .row').eq(0).find('img').attr('src',correct_one[turn]);
                        $('.origin .row').eq(0).find('h3').html(correct_name[turn]);
                        $('.origin .row').eq(1).find('img').attr('src',wrong_one[turn]);
                        $('.origin .row').eq(1).find('h3').html(wrong_name[turn]);


                        $('.pro-ans .row').eq(0).find('img').attr('src',correct_one[turn]);
                        $('.pro-ans .row').eq(0).find('h3').html(correct_name[turn]);
                        $('.pro-ans .row').eq(1).find('img').attr('src',wrong_one[turn]);
                        $('.pro-ans .row').eq(1).find('h3').html(wrong_name[turn]);

                        $('.in-pattern .row').eq(0).find('img').attr('src',correct_one[turn]);
                        $('.in-pattern .row').eq(0).find('h3').html(correct_name[turn]);
                        $('.in-pattern .row').eq(1).find('img').attr('src',wrong_one[turn]);
                        $('.in-pattern .row').eq(1).find('h3').html(wrong_name[turn]);

                        $('.solve-1').html(solve1[turn]);
                        $('.solve-2').html(solve2[turn]);
                        $('.solve-3').html(solve3[turn]);
                        var ss = parseInt($('.question-info-h2').eq(0).html()) + 1;
                        $('.question-info-h2').eq(0).html(ss);
    				}, 3000);
				}
				else {
					var ans = $('.select').find('h3').html();
                    clock.stop();
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
    					if($(this).find('h3').html() == ans) {
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


    clock = $('.clock').FlipClock({
        clockFace: 'MinuteCounter',
        callbacks: {
            interval: function() {
                var time = this.factory.getTime().time;  
            }
        }
    });
});



