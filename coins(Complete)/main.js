var clock;
var coin1=["pence1.png","pence-1.png","pence-3.png"];
var coin2=["pence2.png","pence-2.png","pence-4.png"];
var count = [15,5,15];
var main_qu=["How many five pence coins can you get for the pennies?","How many five pence coins can you get for the pennies?","How many five pence coins can you get for the two pence coins?"];
var solve1=["First, count the pennies. There are 15 pennies. 15 pennies are worth 15p.","First, count the pennies. There are 5 pennies. 5 pennies are worth 5p.","First, count the two pence coins. There are 15 two pence coins. Each two pence coin is worth 2 pence. 15 two pence coins are worth 30p."];
var solve2=["Next, work out how many five pence coins you need to make 15p. It takes 3 five pence coins to make 15p.","Next, work out how many five pence coins you need to make 5p. It takes 1 five pence coins to make 5p.","Next, work out how many five pence coins you need to make 30p. It takes 6 five pence coins to make 30p."];
var solve3=["You can get <strong>3 five pence coins</strong> for the pennies.","You can get <strong>1 five pence coins</strong> for the pennies.","You can get <strong>6 five pence coins</strong> for the two pence coins."];
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
	$('.col-sm-7').eq(0).html("");
	$('.col-sm-7').eq(1).html("");
	turn++;
	var str = "pence1-"+turn+".png";    
	if(turn == 3)
		str = "<img src = '"+str+"' style='margin-right: 3px;'>";
	else
		str = "<img src = '"+str+"'>";

	for(i = 0;i<count[turn-1];i++)
	{
		$('.col-sm-7').eq(0).append(str);
		$('.col-sm-7').eq(1).append(str);
	}
	var str = "pence2-"+turn+".png";
	$('.sec-coin').attr('src',str);
	$('.main-qu').html(main_qu[turn]);
	$('.solve1').html(solve1[turn]);
	$('.solve2').html(solve2[turn]);
	$('.solve3').html(solve3[turn]);
	$('.sbt').click(function(){
		var ss = $('.col-sm-7 img').eq(0).attr('src');
		var eq ;
		if(ss == "pence1-1.png")
			eq = "3";
		else if(ss == "pence1-2.png")
			eq ="1";
		else if(ss =="pence1-3.png")
			eq="6";
		if($('#count_coin').val() == eq) {
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
		} else if($('#count_coin').val() == ""){
			alert("Please input value!");
		} 
		else {
	    	clock.stop();
			$('#you_answered').val($('#count_coin').val());
			$('#failed_text').html("<h1 class='failed-h1' style='font-size:50px;'>Sorry, incorrect...</h1>");
			$('.main-question').html("The correct answer is:");
			$('.main-question').css('color','#77a200');
			$('.duck-imgs').css('display','none');
			$('.duck-correct-num input').val(eq);
			$('.duck-correct-num').css('display','unset');
			$('.explanation').css('display','unset');
			$('.explanation').css('color','#77a200');
			$('.hidden-div').css('display','unset');
			$('.duck-choose-num').html($(this).find('span').html());
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