var clock;

var rows=[2,3,2];
var cols=[3,2,4];
$(document).ready(function(){
	clock = $('.clock').FlipClock({
        clockFace: 'MinuteCounter',
        callbacks: {
            interval: function() {
                var time = this.factory.getTime().time;  
            }
        }
    });

    var turn = Math.floor(Math.random() * 3);

					$('.main-content').html("");
					if(turn == 0) {
						$('.last-sec').html("So, 6 ÷ 2 = <input type='input' name='second_input_div2' id='second_input_div2' style='width: 40px;background-color: #d8d8d8;' disabled='true'>.");
						$('.divide-sen').html("So, 6 / 2 = <input type='input' name='second_input_div' id='second_input_div' style='width: 40px;'>.");
						$('.r-sen').html("There are 3 dots in each row.");
						$('.express').html("6 ÷ 2 = 3");
						$('.f-sen').html("There are 6 dots divided into 2 equal rows.");
						$('.s-sen').html("There are <input type='input' name='first_input_div3' id='first_input_div3' style='width: 40px;background-color: #d8d8d8;' disabled='true'> dots in each row.");
						$('.t-sen').html("So, 6 / 2 = <input type='input'  id='second_input_div3' style='width: 40px;background-color: #d8d8d8;' disabled='true'>.");
						$('.main-content').append("<div class='row' style='border-radius: 15px;border: 2px solid grey; width: 200px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
						$('.main-content').append("<div class='row' style='border-radius: 15px;border: 2px solid grey; width: 200px;margin-top:5px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
					} else if(turn == 1) {
						$('.last-sec').html("So, 6 ÷ 3 = <input type='input' name='second_input_div2' id='second_input_div2' style='width: 40px;background-color: #d8d8d8;' disabled='true'>.");
						$('.divide-sen').html("So, 6 / 3 = <input type='input' name='second_input_div' id='second_input_div' style='width: 40px;'>.");
						$('.r-sen').html("There are 2 dots in each row.");
						$('.express').html("6 ÷ 3 = 2");
						$('.f-sen').html("There are 6 dots divided into 3 equal rows.");
						$('.s-sen').html("There are <input type='input' name='first_input_div3' id='first_input_div3' style='width: 40px;background-color: #d8d8d8;' disabled='true'> dots in each row.");
						$('.t-sen').html("So, 6 / 3 = <input type='input'  id='second_input_div3' style='width: 40px;background-color: #d8d8d8;' disabled='true'>.");
						$('.main-content').append("<div class='row' style='border-radius: 15px;border: 2px solid grey; width: 137px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
						$('.main-content').append("<div class='row' style='border-radius: 15px;border: 2px solid grey; width: 137px;margin-top:5px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
						$('.main-content').append("<div class='row' style='border-radius: 15px;border: 2px solid grey; width: 137px;margin-top:5px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
					} else if(turn == 2) {
						$('.last-sec').html("So, 8 ÷ 2 = <input type='input' name='second_input_div2' id='second_input_div2' style='width: 40px;background-color: #d8d8d8;' disabled='true'>.");
						$('.divide-sen').html("So, 8 / 2 = <input type='input' name='second_input_div' id='second_input_div' style='width: 40px;'>.");
						$('.r-sen').html("There are 4 dots in each row.");
						$('.express').html("8 ÷ 2 = 4");
						$('.f-sen').html("There are 8 dots divided into 2 equal rows.");
						$('.s-sen').html("There are <input type='input' name='first_input_div3' id='first_input_div3' style='width: 40px;background-color: #d8d8d8;' disabled='true'> dots in each row.");
						$('.t-sen').html("So, 8 / 2 = <input type='input'  id='second_input_div3' style='width: 40px;background-color: #d8d8d8;' disabled='true'>.");
						$('.main-content').append("<div class='row' style='border-radius: 15px;border: 2px solid grey; width: 263px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
						$('.main-content').append("<div class='row' style='border-radius: 15px;border: 2px solid grey; width: 263px;margin-top:5px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
					}
					
					$('.main-descr').html("");
					$('.first-top').html("");
					if(turn == 0) {
						$('.first-top').append("<h3>There are 6 dots divided into 2 equal rows.</h3><h3>There are <input type='input' name='first_input_div1' id='first_input_div1' style='width: 40px; background-color: #d8d8d8;' value='3' disabled> dots in each row.</h3><h3>So, 6 / 2 = <input type='input' name='second_input_div1' id='second_input_div1' style='width: 40px; background-color: #d8d8d8;' value='3' disabled='true'>.</h3>");
						$('.main-descr').append("<div class='row' style='border-radius: 15px;border: 2px solid grey; width: 200px;margin-top: 5px;margin-left: 50px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
						$('.main-descr').append("<div class='row' style='opacity: 0.4;width: 200px;margin-top: 5px;margin-left: 50px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
					} else if(turn == 1) {
						$('.first-top').append("<h3>There are 6 dots divided into 3 equal rows.</h3><h3>There are <input type='input' name='first_input_div1' id='first_input_div1' style='width: 40px; background-color: #d8d8d8;' value='2' disabled> dots in each row.</h3><h3>So, 6 / 3 = <input type='input' name='second_input_div1' id='second_input_div1' style='width: 40px; background-color: #d8d8d8;' value='2' disabled='true'>.</h3>");
						$('.main-descr').append("<div class='row' style='border-radius: 15px;border: 2px solid grey; width: 137px;margin-top:5px;margin-left: 50px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
						$('.main-descr').append("<div class='row' style='opacity: 0.4;width: 137px;margin-top:5px;margin-left: 50px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
						$('.main-descr').append("<div class='row' style='opacity: 0.4;width: 137px;margin-top:5px;margin-left: 50px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
					} else if(turn == 2) {
						$('.first-top').append("<h3>There are 8 dots divided into 2 equal rows.</h3><h3>There are <input type='input' name='first_input_div1' id='first_input_div1' style='width: 40px; background-color: #d8d8d8;' value='4' disabled> dots in each row.</h3><h3>So, 8 / 2 = <input type='input' name='second_input_div1' id='second_input_div1' style='width: 40px; background-color: #d8d8d8;' value='4' disabled='true'>.</h3>");
						$('.main-descr').append("<div class='row' style='border-radius: 15px;border: 2px solid grey; width: 263px;margin-left: 50px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
						$('.main-descr').append("<div class='row' style='opacity: 0.4;width: 263px;margin-top:5px;margin-left: 50px;'><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg><svg height='50' width='50' class='circle-3'><circle cx='25' cy='25' r='25' fill='#6252c1' /></svg></div>");
					}
					$('#first_input_div').val("");
					$('#second_input_div').val("");
					
	$('.sbt').click(function(){
		var ans = $('.main-content').eq(0).find('.row').eq(0).find('svg').length;
		if($('#first_input_div').val() =='' || $('#second_input_div').val() == "")
			alert('Please input value!');
		else {
			if($('#first_input_div').val() == ans && $('#second_input_div').val() == ans) {
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
				$('#first_input_div3').val($('#first_input_div').val());
				$('#second_input_div3').val($('#second_input_div').val());
				$('#failed_text').html("<h1 class='failed-h1' style='font-size:50px;'>Sorry, incorrect...</h1>");
				$('.main-question').html("The correct answer is:");
				$('.main-question').css('color','#77a200');
				$('.duck-imgs').css('display','none');
				$('.duck-correct-num').css('display','unset');
				$('.explanation').css('display','unset');
				$('.explanation').css('color','#77a200');
				$('.hidden-div').css('display','unset');
				$('.sbt').css('display','none');
				$('.got-it').css('display','unset');
				$('.got-it1').css('display','unset');

			}
		}
	});

    $('.got-it').click(function(){
    	location.reload();
    });

    $('.got-it1').click(function(){
    	location.reload();
    });
});