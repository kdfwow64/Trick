var current = 0;
var array = [0, 0, 0, 0, 0, 0, 0, 0];
var shape = [0, 0, 0, 0, 0, 0, 0, 0];
var pattern_shape = [1, 2, 2, 1, 2, 1, 1, 1];
var pattern_polygon = [1, 1, 1, 2, 1, 2, 2, 1];


function move_circle(id){
    move = $(".back-shape").eq(id).next();
    shape[id] = 0;
    move.animate({
        top: '221px',
        left: '17px',
    }, 300, function(){ 
            move.remove();
            current = 0;
            while(1)
            {
                if(array[current] == 1)
                    current ++;
                else
                    break;
            }
            $('.back-shape').removeClass('border-blue');
            $('.back-shape').eq(current).addClass('border-blue');
    });
    array[id] = 0;
}
function move_rect(id){
    move = $(".back-shape").eq(id).next();
    shape[id] = 0;
    move.animate({
        top: '221px',
        left: '102px',
    }, 300, function(){ 
            move.remove();
            current = 0;
            while(1)
            {
                if(array[current] == 1)
                    current ++;
                else
                    break;
            }
            $('.back-shape').removeClass('border-blue');
            $('.back-shape').eq(current).addClass('border-blue');
        });
    array[id] = 0;
}
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
    $('.circle-svg').click(function(){
        current = 0;
        while(1)
        {
            if(array[current] == 1)
                current ++;
            else
                break;
        }

        shape[current] = 1;
        if (current <8 ) {
            $(this).after('<div class="pattern-circle circle-svg" style="z-index: 15;"><svg width="50" height="50" style="margin-left: 7px;margin-top: 7px;"><circle cx="25" cy="25" r="25" fill="#61cffa"></circle></svg></div>');
            move = $(this).next();
            move.animate({top:'133px', left: 17 + current * 85 + 'px'}, 300, function(){
                $('.back-shape').eq(current).after('<div class="pattern-circle circle-svg moved_shape" onclick="move_circle('+current+')" style="top: 133px;left:'+(17+current*85)+'px"><svg width="50" height="50" style="margin-left: 7px;margin-top: 7px; "><circle cx="25" cy="25" r="25" fill="#61cffa"></circle></svg></div>');
                move.remove();
                array[current] = 1;
                current = 0;
                while(1)
                {
                    if(array[current] == 1)
                        current ++;
                    else
                        break;
                }
                $('.back-shape').removeClass('border-blue');
                $('.back-shape').eq(current).addClass('border-blue');
            });
        }
        
    });
    $('.rect-svg').click(function(){
        current = 0;
        while(1)
        {
            if(array[current] == 1)
                current ++;
            else
                break;
        }
        shape[current] = 2;
        if (current <8 ) {
            $(this).after('<div class="pattern-circle rect-svg" style="z-index: 15;" ><svg width="50" height="50" style="margin-left: 7px;margin-top: 7px;"><rect width="50" height="50" style="fill:rgb(0,0,255);"></rect></svg></div>');
            move = $(this).next();
            move.animate({top:'133px', left: 17 + current * 85 + 'px'}, 300, function(){
                $('.back-shape').eq(current).after('<div class="pattern-circle circle-svg moved_shape" onclick="move_rect('+current+')" style="top: 133px;left:'+(17+current*85)+'px"><svg width="50" height="50" style="margin-left: 7px;margin-top: 7px; "><rect width="50" height="50" style="fill:rgb(0,0,255);"></rect></svg></div>');
                move.remove();
                array[current] = 1;
                current = 0;
                while(1)
                {
                    if(array[current] == 1)
                        current ++;
                    else
                        break;
                }
                $('.back-shape').removeClass('border-blue');
                $('.back-shape').eq(current).addClass('border-blue');
            });
        }
    });
    

	$('.sbt').click(function(){
        var flag = 0;
		for(i = 0; i<8; i++) {
            if(shape[i] == 0) 
                flag = 2;
            else {
                if(shape[i] == pattern_shape[i]) {

                } else {
                    flag = 1;
                }
            }
        }
        if(flag == 1) {
            for(i = 0 ;i< 8; i++) {
                var type = 1;
                if($('.moved_shape').eq(i).find('circle').length == 1)
                    type = 2;
                if(type == 1)
                    $('.you-ans').eq(i).html('<svg width="50" height="50" style="margin-left: 10px;margin-top: 10px;"><rect width="50" height="50" style="fill:rgb(0,0,255);" /></svg>');
                else
                    $('.you-ans').eq(i).html('<svg width="50" height="50" style="margin-left: 10px;margin-top: 10px;"><circle cx="25" cy="25" r="25" fill="#61cffa" /></svg>');
            }
            clock.stop();
            $('#failed_text').html("<h1 class='failed-h1' style='font-size:50px;'>Sorry, incorrect...</h1>");
            $('.main-question').html("The correct answer is:");
            $('.main-question').css('color','#77a200');
            $('.duck-imgs').css('display','none');
            $('.explanation').css('display','unset');
            $('.explanation').css('color','#77a200');
            $('.hidden-div').css('display','unset');
            $('.sbt').css('display','none');
            $('.got-it').css('display','unset');
            $('.got-it1').css('display','unset');
        } else if (flag == 0 ){
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
                var turn = Math.floor(Math.random() * 3);
                if(turn  == 0 ) {
                    $('.circle-svg').html("<svg width='50' height='50' style='margin-left: 7px;margin-top: 7px;''><circle cx='25' cy='25' r='25' fill='#61cffa' /></svg>");
                    $('.main-pro').css('margin-top','20px');
                    $('.main-pro').html("<svg width='50' height='50' style='margin-left: 30px;'><circle cx='25' cy='25' r='25' fill='#61cffa' /></svg><svg width='50' height='50' style='margin-left: 30px;'><rect width='50' height='50' style='fill:rgb(0,0,255);' /></svg><svg width='50' height='50' style='margin-left: 30px;'><rect width='50' height='50' style='fill:rgb(0,0,255);' /></svg><svg width='50' height='50' style='margin-left: 30px;'><circle cx='25' cy='25' r='25' fill='#61cffa' /> </svg><svg width='50' height='50' style='margin-left: 30px;'><rect width='50' height='50' style='fill:rgb(0,0,255);' /></svg><svg width='50' height='50' style='margin-left: 30px;'><circle cx='25' cy='25' r='25' fill='#61cffa' /></svg><svg width='50' height='50' style='margin-left: 30px;'><circle cx='25' cy='25' r='25' fill='#61cffa' /></svg><svg width='50' height='50' style='margin-left: 30px;'><circle cx='25' cy='25' r='25' fill='#61cffa' /></svg>");
                } else if(turn  == 1) {
                    $('.main-pro').css('margin-top','10px');
                    $('.circle-svg').html("<svg width='60' height='60' style='margin-left:4px;' zoom='0.97'><polygon points='30.500000000000007,0,61,52.827549630850754,0,52.827549630850754' fill='#2cb764' ></polygon></svg>");
                    $('.main-pro').html("<svg width='60' height='60' class = 'polygon-margin'><polygon points='30.500000000000007,0,61,52.827549630850754,0,52.827549630850754' fill='#2cb764' ></polygon></svg><svg width='60' height='60' class = 'polygon-margin'><polygon points='30.500000000000007,0,61,52.827549630850754,0,52.827549630850754' fill='#2cb764' ></polygon></svg><svg width='60' height='60' class = 'polygon-margin'><polygon points='30.500000000000007,0,61,52.827549630850754,0,52.827549630850754' fill='#2cb764' ></polygon></svg>     <svg width='50' height='50' style='margin-left: 30px;'><circle cx='25' cy='25' r='25' fill='#00ff00' /></svg>                   <svg width='60' height='60' class = 'polygon-margin'><polygon points='30.500000000000007,0,61,52.827549630850754,0,52.827549630850754' fill='#2cb764' ></polygon></svg>    <svg width='50' height='50' style='margin-left: 30px;'><circle cx='25' cy='25' r='25' fill='#00ff00' /></svg><svg width='50' height='50' style='margin-left: 30px;'><circle cx='25' cy='25' r='25' fill='#00ff00' /></svg>            <svg width='60' height='60' class = 'polygon-margin'><polygon points='30.500000000000007,0,61,52.827549630850754,0,52.827549630850754' fill='#2cb764' ></polygon></svg>");
                } else {
                    $('.main-pro').css('margin-top','10px');
                    $('.main-pro').html("<svg width='60' height='60' class = 'polygon-margin'><polygon points='30.500000000000007,0,61,52.827549630850754,0,52.827549630850754' fill='#2cb764' ></polygon></svg><svg width='60' height='60' class = 'polygon-margin'><polygon points='30.500000000000007,0,61,52.827549630850754,0,52.827549630850754' fill='#2cb764' ></polygon></svg><svg width='60' height='60' class = 'polygon-margin'><polygon points='30.500000000000007,0,61,52.827549630850754,0,52.827549630850754' fill='#2cb764' ></polygon></svg>     <svg width='50' height='50' style='margin-left: 30px;'><circle cx='25' cy='25' r='25' fill='#00ff00' /></svg>                   <svg width='60' height='60' class = 'polygon-margin'><polygon points='30.500000000000007,0,61,52.827549630850754,0,52.827549630850754' fill='#2cb764' ></polygon></svg>    <svg width='50' height='50' style='margin-left: 30px;'><circle cx='25' cy='25' r='25' fill='#00ff00' /></svg><svg width='50' height='50' style='margin-left: 30px;'><circle cx='25' cy='25' r='25' fill='#00ff00' /></svg>            <svg width='60' height='60' class = 'polygon-margin'><polygon points='30.500000000000007,0,61,52.827549630850754,0,52.827549630850754' fill='#2cb764' ></polygon></svg>");
                }
            }, 3000);


        } else {
            alert("Do not leave blank!");
        }
	}); 

    $('.got-it').click(function(){
    	location.reload();
    });

    $('.got-it1').click(function(){
    	location.reload();
    });
});